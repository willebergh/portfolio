function scroll_home() {
  var elmnt = document.getElementById('home_section').offsetTop;
  var scroll_num = elmnt - 64;
  window.scrollTo(0, scroll_num);
}
function scroll_about() {
  var elmnt = document.getElementById('about_section').offsetTop;
  var scroll_num = elmnt - 64;
  window.scrollTo(0, scroll_num);
}
function scroll_projects() {
  var elmnt = document.getElementById('projects_section').offsetTop;
  var scroll_num = elmnt - 64;
  window.scrollTo(0, scroll_num);
}
function scroll_work() {
  var elmnt = document.getElementById('work_section').offsetTop;
  var scroll_num = elmnt - 64;
  window.scrollTo(0, scroll_num);
}
function scroll_contact() {
  var elmnt = document.getElementById('contact_section').offsetTop;
  var scroll_num = elmnt - 64;
  window.scrollTo(0, scroll_num);
}
function scroll_position() {
  var x_scroll_pos = $(window).scrollTop();
  var home = document.getElementById('header_nav_home');
  var about = document.getElementById('header_nav_about');
  var projects = document.getElementById('header_nav_projects');
  var work = document.getElementById('header_nav_work');
  var contact = document.getElementById('header_nav_contact');

  if (x_scroll_pos > window.innerHeight / 2) {
    about.style.color = "var(--main-white-color)";
    home.style.color = "var(--main-light-gray-color)";
  } else {
    home.style.color = "var(--main-white-color)";
    about.style.color = "var(--main-light-gray-color)";
  }
  if (x_scroll_pos > window.innerHeight * 2 - window.innerHeight / 2) {
    projects.style.color = "var(--main-white-color)";
    about.style.color = "var(--main-light-gray-color)";
  } else {
    projects.style.color = "var(--main-light-gray-color)";
  }
  if (x_scroll_pos > window.innerHeight * 3 - window.innerHeight / 2) {
    work.style.color = "var(--main-white-color)";
    projects.style.color = "var(--main-light-gray-color)";
  } else {
    work.style.color = "var(--main-light-gray-color)";
  }
  if (x_scroll_pos > window.innerHeight * 4 - window.innerHeight / 2) {
    contact.style.color = "var(--main-white-color)";
    work.style.color = "var(--main-light-gray-color)";
  } else {
    contact.style.color = "var(--main-light-gray-color)";
  }
}
