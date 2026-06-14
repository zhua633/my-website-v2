import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const navLinks = [
  { href: "#Experiences", label: "Experiences" },
  { href: "#Projects", label: "Projects" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [inSection, setInSection] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 48);

      const experiencesEl = document.getElementById("Experiences");
      if (experiencesEl) {
        const { top } = experiencesEl.getBoundingClientRect();
        setInSection(top <= 120);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!inSection) {
      setCollapsed(false);
    }
  }, [inSection]);

  const showGlass = scrolled || inSection;
  const canCollapse = inSection;

  return (
    <nav className="sticky top-0 z-20 w-full pt-6 pb-4">
      <div className="ml-6 md:ml-10">
        <div
          className={`inline-flex h-10 items-center gap-1 rounded-full px-1.5 transition-all duration-500 ${
            showGlass
              ? "border border-white/20 bg-white/10 shadow-lg shadow-black/10 backdrop-blur-md"
              : "border border-transparent bg-transparent"
          }`}
        >
          {canCollapse && (
            <button
              type="button"
              onClick={() => setCollapsed((prev) => !prev)}
              aria-label={collapsed ? "Expand navigation" : "Collapse navigation"}
              aria-expanded={!collapsed}
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-gray-200 transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {collapsed ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                )}
              </svg>
            </button>
          )}

          <div
            className={`flex h-full items-center overflow-hidden transition-all duration-300 ease-out ${
              collapsed ? "max-w-0 opacity-0" : "max-w-[240px] opacity-100"
            }`}
          >
            {navLinks.map(({ href, label }) => (
              <AnchorLink
                key={href}
                href={href}
                className="whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium leading-none text-gray-200 transition-colors hover:bg-white/10 hover:text-white"
              >
                {label}
              </AnchorLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
