import { useState, useRef, useEffect } from "preact/hooks";

export function ResponsiveImage({ images, alt, className = "" }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (!images) return null;

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      <div
        className={`absolute inset-0 bg-gray-200 transition-opacity duration-500 ${
          isLoaded ? "opacity-0" : "opacity-100 animate-pulse"
        }`}
      >
        <div class="flex items-center justify-center h-full mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
          <svg
            class="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          </svg>
        </div>
      </div>

      {isInView && (
        <picture>
          {/* WebP format for modern browsers */}
          <source
            srcSet={`${images.small} 640w, ${images.medium} 1024w, ${images.large} 1600w`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            type="image/webp"
          />
          {/* Fallback to no WebP browsers */}
          <img
            src={images.fallback || images.original}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setIsLoaded(true)}
          />
        </picture>
      )}
    </div>
  );
}
