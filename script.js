
let mainNavLinks = document.querySelectorAll("#sideMenu .sideMenuButton");
let mainSections = document.querySelectorAll("main > section");

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY;

  mainSections.forEach(section => {
    if (
      section.offsetTop <= fromTop + 50 &&
      section.offsetTop + section.offsetHeight > fromTop + 50
    ) {
      let hash = "#" + section.id;
      mainNavLinks.forEach(link => {
        link.classList.remove("current");
        if (link.getAttribute("href") === hash) {
          link.classList.add("current");
        }
      });
    }
  });
});

window.dispatchEvent(new Event("scroll"))