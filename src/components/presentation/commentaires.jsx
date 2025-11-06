import { useEffect, useRef, useState } from "react";
import { PORTFOLIO } from "../../data/portfolio";
import { ResponsiveImage } from "../common/responsive-image";
import { getResponsiveImage } from "../../utils/image.utils";

export default function Commentaires() {
  const customerReviews = PORTFOLIO.map(({ customer }) => customer).filter(
    (c) => !!c && c.comment
  );
  const count = customerReviews.length;

  const randIndex = () => (count > 0 ? Math.floor(Math.random() * count) : 0);
  const [index, setIndex] = useState(randIndex);
  const [fakeDisplayIndex, setFakeDisplayIndex] = useState(0);
  const mountedRef = useRef(true);

  const nextRandom = (current) => {
    if (count <= 1) return current || 0;
    let next = current;
    while (next === current) {
      next = Math.floor(Math.random() * count);
    }
    return next;
  };

  useEffect(() => {
    mountedRef.current = true;
    const interval = setInterval(() => {
      setIndex((cur) => nextRandom(cur));
      setFakeDisplayIndex(fakeDisplayIndex + 1);
    }, 5000);

    return () => {
      mountedRef.current = false;
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  if (count === 0) {
    return null;
  }

  const item = customerReviews[index];

  return (
    <div class="bg-primary p-6 text-white">
      <div
        class="container p-6 mx-auto h-48 rounded-lg border border-secondary"
        aria-live="polite"
      >
        <div class="flex gap-3 items-start">
          <div class="flex-1">
            <p>
              “<span class="italic">{item.comment}</span>”
            </p>
            <div class="mt-3 text-gray-500">
              <strong>{item.name}</strong>
            </div>
          </div>

          {item.logo && (
            <ResponsiveImage
              className="w-12 h-12"
              images={getResponsiveImage(item.logo)}
              alt={`Logo de ${item.name}`}
            />
          )}
        </div>
      </div>
      <div class="flex justify-center gap-2 mt-4">
        {customerReviews.map((_, i) => (
          <div
            key={i}
            class={`w-2 h-2 rounded-full ${
              i === fakeDisplayIndex ? "bg-secondary" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
