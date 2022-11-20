
export const getMonths = (props) => {
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const d = new Date();
  let currentMonth = month[d.getMonth()];

  let nextMonth = (currentMonth === 'December') ? month[0] : month[d.getMonth() + 1];
  return (
    [currentMonth, nextMonth]
  )
}

export default getMonths;


