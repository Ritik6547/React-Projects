import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTodo, deleteTodo, fetchTodos, updateTodo } from "../api/todos";

export function useTodos() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
}

export function useAddTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addTodo,
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const previousTodos = queryClient.getQueryData(["todos"]);
      queryClient.setQueryData(["todos"], (allTodos = []) => [
        ...allTodos,
        newTodo,
      ]);
      return { previousTodos };
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(["todos"], context.previousTodos);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
}

export function useUpdateTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTodo,
    onMutate: async (updateTodo) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const previousTodos = queryClient.getQueryData(["todos"]);
      queryClient.setQueryData(["todos"], (allTodos) =>
        allTodos.map((todo) => (todo.id === updateTodo.id ? updateTodo : todo))
      );
      return { previousTodos };
    },
    onError: (context) => {
      queryClient.setQueryData(["todos"], context.previousTodos);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
}

export function useDeleteTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTodo,
    onMutate: async (deletedId) => {
      await queryClient.cancelQueries({ queryKey: ["todos"] });
      const previousTodos = queryClient.getQueryData(["todos"]);
      queryClient.setQueryData(["todos"], (allTodos) =>
        allTodos.filter((todo) => todo.id !== deletedId)
      );
      return { previousTodos };
    },
    onError: (context) => {
      queryClient.setQueryData(["todos"], context.previousTodos);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
}
