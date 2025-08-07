export const countIncompletedTasks = (arr) => {
  let count = 0;
  arr.forEach((el) => {
    if (!el.completed) {
      count++;
    }
  });
  return count;
};
