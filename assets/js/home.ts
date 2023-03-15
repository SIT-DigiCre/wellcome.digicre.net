const hideHeader = () => {
  const toggle: HTMLInputElement = document.getElementById("header-toggle")!;
  toggle.checked = false;
};

const modifyToc = () => {
  const className: string = "menu__item--toc";
  const toc = [...document.getElementsByClassName(className)];
  for (const item of toc) {
    item.classList.remove(className);
    item.addEventListener("click", hideHeader);
  }
};

addEventListener("DOMContentLoaded", modifyToc);
