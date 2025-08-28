export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("todoState", serializedState);
  } catch (err) {
    console.log("Error saving state : ", err);
  }
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("todoState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log("Error loading state: ", err);
    return undefined;
  }
};
