export function initDrawer(): void {
  const hamburger = document.querySelector<HTMLButtonElement>(".hamburger");
  const closeBtn = document.querySelector<HTMLButtonElement>(".close-btn");
  const drawer = document.querySelector<HTMLElement>(".nav-drawer");
  const backdrop = document.querySelector<HTMLDivElement>(".backdrop");
  const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-drawer a");

  console.log("Drawer elements found:", { hamburger, drawer });

  function toggleDrawer(isOpen: boolean): void {
    if (!drawer || !backdrop || !hamburger) return;

    drawer.classList.toggle("open", isOpen);
    backdrop.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  }

  hamburger?.addEventListener("click", () => toggleDrawer(true));
  closeBtn?.addEventListener("click", () => toggleDrawer(false));
  backdrop?.addEventListener("click", () => toggleDrawer(false));

  navLinks.forEach((link) => {
    link.addEventListener("click", () => toggleDrawer(false));
  });

  document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Escape" && drawer?.classList.contains("open")) {
      toggleDrawer(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && drawer?.classList.contains("open")) {
      toggleDrawer(false);
    }
  });
}
