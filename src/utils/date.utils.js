export const formatDate = (date) =>
  date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
  });
