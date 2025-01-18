document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".nav-menu");
  const overlay = document.querySelector(".overlay");
  const buttonMenu = document.querySelector(".button-menu");
  const buttonCloseMenu = document.querySelector(".button-close");
  const buttonHead = document.querySelectorAll(".button-head");
  const navList = document.querySelectorAll(".nav-list");

  //   open menu
  buttonMenu.addEventListener("click", () => {
    menu.classList.add("is-active");
    overlay.classList.add("is-active");
  });

  //   close menu
  buttonCloseMenu.addEventListener("click", () => {
    menu.classList.remove("is-active");
    overlay.classList.remove("is-active");
  });

//   expand menu
  buttonHead.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      navList.forEach((list, listIndex) => {
        if (index === listIndex) {
          list.classList.toggle("expand");
        } else {
          list.classList.remove("expand");
        }
      });
    });
  });
});
