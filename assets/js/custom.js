document.addEventListener("DOMContentLoaded", () => {
  const toc = document.getElementById("toc");
  const mainNavbar = document.getElementById("main-navbar");
  const introHeader = document.querySelector(".intro-header");
  let isCollapsed = false;

  // Function to toggle TOC based on .intro-header visibility
  const toggleTOC = () => {
    const headerRect = introHeader.getBoundingClientRect();
    if (headerRect.top < window.innerHeight && headerRect.bottom > 0) {
      // .intro-header is visible
      if (!isCollapsed) {
        toc.classList.remove("collapsed");
        isCollapsed = true;
      }
    } else {
      // .intro-header is not visible
      if (isCollapsed) {
        toc.classList.add("collapsed");
        isCollapsed = false;
      }
    }
  };

  // Listen to scroll events for dynamic behavior
  window.addEventListener("scroll", toggleTOC);

  // Initial check on page load
  toggleTOC();

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

  function isElementInView() {
    const rect = introHeader.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
    );
  }
  toc.classList.add("collapsed");
  isCollapsed = false;  
  console.log(isElementInView() ? "Intro header is visible" : "Intro header is not visible");
  
});
