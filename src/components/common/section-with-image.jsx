import { ResponsiveImage } from "./responsive-image";
import { useEffect, useRef } from "react";

export const SectionWithImage = ({
  children,
  imageLeft = false,
  imageSrc,
  imageAlt = "Photo présentation",
  className = "",
}) => {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const syncHeights = () => {
      if (contentRef.current && imageRef.current) {
        const contentHeight = contentRef.current.offsetHeight;
        const minHeight = 300;
        const finalHeight = Math.max(contentHeight, minHeight);

        imageRef.current.style.height = `${finalHeight}px`;
      }
    };

    syncHeights();

    window.addEventListener("resize", syncHeights);

    const resizeObserver = new ResizeObserver(syncHeights);
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    return () => {
      window.removeEventListener("resize", syncHeights);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section className={`py-16 ${className} group`}>
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
            imageLeft ? "lg:grid-flow-col" : ""
          }`}
        >
          <div className={`order-1 ${imageLeft ? "lg:order-1" : "lg:order-2"}`}>
            <div
              ref={imageRef}
              className="relative min-h-[300px] overflow-hidden rounded-lg shadow-xl"
            >
              <ResponsiveImage
                images={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover rounded-lg shadow-lg group-hover:scale-125 transition"
              />
            </div>
          </div>

          <div
            ref={contentRef}
            className={`order-2 ${imageLeft ? "lg:order-2" : "lg:order-1"}`}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};
