document.addEventListener("DOMContentLoaded", () => {
  const toc = document.getElementById("toc");
  const mainNavbar = document.getElementById("main-navbar");
  const introHeader = document.querySelector(".intro-header");
  let isCollapsed = false;

  // Handle TOC collapse/expand when .intro-header is visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isCollapsed) {
          toc.classList.remove("collapsed");
          isCollapsed = true;
          console.log("MUNCUL");
        } else if (!entry.isIntersecting && isCollapsed) {
          toc.classList.add("collapsed");
          isCollapsed = false;          
          console.log("HILANG");
        }
      });
    },
    { root: null, threshold: 0.0 } // Adjust threshold as needed
  );

  // Observe the .intro-header element
  if (introHeader) {
    observer.observe(introHeader);
  }

  // Handle click to toggle collapse/expand
  toc.addEventListener("click", (event) => {
    if (event.target.textContent.toLowerCase().includes("daftar isi")) {
      toc.classList.toggle("collapsed");
    }
  });

  // Smooth scroll to headers with offset
  toc.addEventListener("click", (event) => {
    const target = event.target;
    if (target.tagName === "A" && target.hash) {
      event.preventDefault();
      const header = document.querySelector(target.hash);
      const navbarHeight = mainNavbar.offsetHeight;
      const tocHeight = toc.offsetHeight;

      if (header) {
        const offset = navbarHeight + tocHeight;
        const headerPosition = header.getBoundingClientRect().top + window.scrollY;
        const scrollPosition = headerPosition - offset;

        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  });
});
