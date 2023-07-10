const headerListItems = document.querySelectorAll('.header-list');

headerListItems.forEach(function(listItem) {
  listItem.addEventListener('mousedown', function() {
    listItem.classList.add('active');
  });

  listItem.addEventListener('mouseup', function() {
    listItem.classList.remove('active');
  });
});
const hamburger = document.querySelector((".burger-bar"))
const navMenu = document.querySelector(".burger-nav")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})