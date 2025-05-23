import { useEffect } from "react";
import { useActiveLink } from "./ActiveLinkContext";
import { links } from "../../lib/data";
import { ReactNode } from "react";

interface ActiveSectionObserverProps {
  children: ReactNode;
}

const ActiveSectionObserver: React.FC<ActiveSectionObserverProps> = ({
  children,
}) => {
  const { setActiveLink } = useActiveLink();
  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    };

    const observer = new window.IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    });

    links.forEach((link) => {
      const sectionId = link.href.replace(/^#/, "");
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [setActiveLink]);

  return <>{children}</>;
};

export default ActiveSectionObserver;
