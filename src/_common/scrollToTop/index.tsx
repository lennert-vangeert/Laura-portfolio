import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scroll behaviour on navigation:
 * - If the location has a hash (e.g. /nl/#projects), smooth-scroll to that
 *   section. Retries across a few frames so it also works when arriving from
 *   another route (the target section mounts after navigation).
 * - Otherwise, jump to the top of the page.
 */
const ScrollToTop = (): null => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      let frame = 0;
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (frame++ < 20) {
          requestAnimationFrame(tryScroll);
        }
      };
      tryScroll();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, key]);

  return null;
};

export default ScrollToTop;
