const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const getCurrentDate = () => {
  const date = new Date();

  const year = date.getFullYear();
  const month = (date.getMonth() + 1 - 10) >= 0 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
  const day = (date.getDate() - 10) >= 0 ? date.getDate() : "0" + date.getDate();

  return `${year}-${month}-${day}`;
};

const formatDate = (date: string) => {
  if (!date) return "";
  const [year, month, day] = date.split('-');

  return `${day} ${months[Number(month) - 1]} ${year}`;
}
export { getCurrentDate, formatDate };