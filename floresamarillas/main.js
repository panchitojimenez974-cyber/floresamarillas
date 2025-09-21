onload = () => {
    const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
    }, 1000);
};


window.addEventListener("load", () => {
  document.body.classList.remove("not-loaded");
});
