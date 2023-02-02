require('dotenv/config');

module.exports = function () {
  const birthDate = process.env.birthDate;

  const date = new Date(birthDate);
  const currentDate = new Date();

  const dateDay = date.getDate();
  const dateMonth = date.getMonth();
  const dateYear = date.getFullYear();

  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  let age = currentYear - dateYear;

  if (currentMonth < dateMonth || (currentMonth === dateMonth && currentDay < dateDay)) {
    age--;
  }

  return age;
};
