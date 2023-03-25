const toggleHeader = () => {
  const checkbox = document.getElementById("header-toggle");
  checkbox.checked = !checkbox.checked;
};

const fixToc = () => {
  const className = "menu__item--toc";
  const toc = [...document.getElementsByClassName(className)];
  toc.forEach((item) => {
    item.classList.remove(className);
    item.addEventListener("click", toggleHeader);
  });
};

addEventListener("DOMContentLoaded", fixToc);
