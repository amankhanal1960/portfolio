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
  //event.currentTarget Represents the element to which the event listener is attached.
  document.getElementById(x).classList.add("active-tab");
  //Adds the 'active-tab' class to the content section with the ID specified by x.
}
