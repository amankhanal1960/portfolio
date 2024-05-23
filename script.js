const tablinks = document.querySelectorAll(".tab-links");
const tabcontents = document.querySelectorAll(".tab-contents");

function opentab(x) {
  tablinks.forEach((tablink) => {
    tablink.classList.remove("active-link");
  });

  tabcontents.forEach((tabcontent) => {
    tabcontent.classList.remove("active-tab");
  });

  event.currentTarget.classList.add("active-link");
  document.getElementById(x).classList.add("active-tab");
}
