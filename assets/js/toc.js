const closeMenu = () => {
  const toggle = document.getElementById("header-toggle");
  toggle.checked = false;
};

const fixToc = () => {
  const name = "menu__item--toc";
  const tocItems = document.getElementsByClassName(name);

  for (const item of tocItems) {
    item.classList.remove(name);
    item.addEventListener("click", closeMenu);
  }
};

window.addEventListener("DOMContentLoaded", fixToc);
