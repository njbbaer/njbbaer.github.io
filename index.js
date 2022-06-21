$(document).ready(function() {
  setCurrentJobDuration()
});

$("#copy-email").click(() => {
  copyToClipboard("njbbaer@gmail.com");
  showPopover($("#copy-email"), "Copied!");
});

const setCurrentJobDuration = () => {
  const startDate = new Date("2018-03-26");
  const endDate = new Date();

  const years = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24 * 365.25));
  const months = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24 * 30.44)) % 12;
  $('#current-years').text(years);
  $('#current-months').text(months);
}

const copyToClipboard = (content) => {
  var copyTextarea = document.createElement("textarea");
  copyTextarea.style.position = "fixed";
  copyTextarea.style.opacity = "0";
  copyTextarea.textContent = content;
  document.body.appendChild(copyTextarea);
  copyTextarea.select();
  document.execCommand("copy");
  document.body.removeChild(copyTextarea);
}

const showPopover = (element, content) => {
  const popover = new bootstrap.Popover(element, {
    content: content
  });
  popover.show()
  setTimeout(() => {
    popover.dispose();
  }, 1000);
}