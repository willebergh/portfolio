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
