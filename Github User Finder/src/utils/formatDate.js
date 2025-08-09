export const formatDate = (dateStr) => {
  const date = new Date(dateStr);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return formattedDate;
};
