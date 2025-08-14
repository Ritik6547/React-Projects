export const getFormattedDate = () => {
  return new Date().toLocaleDateString("en-GB").replace(/\//g, ".");
};
