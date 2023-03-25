const reveal = (selector, options = {}) => {
  addEventListener("load", () => {
    ScrollReveal().reveal(selector, options);
  });
};

const selectors = [
  ".about-us__content > *",
  ".teams__card",
  ".join-us__content > *",
];
selectors.forEach((item) => {
  reveal(item);
});
