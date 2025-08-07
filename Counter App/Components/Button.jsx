const Button = ({ btnClass = "", content = "click", onClick }) => {
  return (
    <button onClick={onClick} className={`btn ${btnClass}`}>
      {content}
    </button>
  );
};

export default Button;


 public static int search(int[] arr, int target, int index) {
        // Base case: if index goes out of bounds
        if (index == arr.length) {
            return -1;
        }

        // If current element matches the target
        if (arr[index] == target) {
            return index;
        }

        // Recur for next index
        return search(arr, target, index + 1);
    }