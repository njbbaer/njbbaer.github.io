$(document).ready(function() {
  setCurrentJobDuration()
});

let setCurrentJobDuration = () => {
  let startDate = new Date("2018-03-26");
  let endDate = new Date();

  let years = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24 * 365.25));
  let months = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24 * 30.44)) % 12;
  $('#currentYears').text(years);
  $('#currentMonths').text(months);
}