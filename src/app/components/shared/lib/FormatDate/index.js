export function formatDate(date) {
  const newDate = new Date(date);

  let dd = newDate.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = newDate.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yy = newDate.getFullYear() % 100;
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}
