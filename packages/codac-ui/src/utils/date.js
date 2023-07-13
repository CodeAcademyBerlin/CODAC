export const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString("en-UK", { month: "long", year: "numeric" });
};
