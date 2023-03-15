const loadGoogleFonts = () => {
  const googleFonts: HTMLLinkElement = document.getElementById("google-fonts")!;
  googleFonts.href = googleFonts.getAttribute("data-href");
};

addEventListener("load", loadGoogleFonts);
