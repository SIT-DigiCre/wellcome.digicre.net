const loadGoogleFonts = () => {
  const googleFonts = document.getElementById("google-fonts");
  googleFonts.href = googleFonts.getAttribute("data-href");
};

addEventListener("load", loadGoogleFonts);
