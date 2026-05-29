"use client";

import { useRef, useState, useEffect } from "react";
import { X } from "lucide-react";

const photos = [
  "/photos/DSCF5983.JPG",
  "/photos/IMG_0184.JPG",
  "/photos/IMG_1576 2.JPG",
  "/photos/IMG_1647.JPG",
  "/photos/IMG_2853 3.jpg",
  "/photos/IMG_3567.JPG",
  "/photos/IMG_3916.JPG",
  "/photos/IMG_4237.JPG",
  "/photos/IMG_4303.JPG",
  "/photos/IMG_6317.jpg",
];

const allPhotos = [...photos, ...photos];

export default function PhotoStrip() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const didDrag = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const autoScrollRef = useRef<number>();
  const [dragging, setDragging] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const tick = () => {
      if (!isDragging.current && track) {
        track.scrollLeft += 0.6;
        if (track.scrollLeft >= track.scrollWidth / 2) track.scrollLeft = 0;
      }
      autoScrollRef.current = requestAnimationFrame(tick);
    };
    autoScrollRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(autoScrollRef.current!);
  }, []);

  // Close lightbox on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    didDrag.current = false;
    setDragging(true);
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(walk) > 4) didDrag.current = true;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onMouseUp = () => { isDragging.current = false; setDragging(false); };

  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    didDrag.current = false;
    startX.current = e.touches[0].pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    didDrag.current = true;
    trackRef.current.scrollLeft = scrollLeft.current - (x - startX.current) * 1.5;
  };

  const onTouchEnd = () => { isDragging.current = false; };

  const handlePhotoClick = (src: string) => {
    if (!didDrag.current) setLightbox(src);
  };

  return (
    <>
      <section className="py-16 bg-background overflow-hidden">
        <div
          ref={trackRef}
          className={`flex gap-4 overflow-x-scroll select-none px-8 ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {allPhotos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Photo ${(i % photos.length) + 1}`}
              draggable={false}
              onClick={() => handlePhotoClick(src)}
              className="h-64 md:h-72 w-auto flex-shrink-0 rounded-xl border border-border object-cover pointer-events-auto hover:brightness-90 transition-all duration-150"
            />
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <img
            src={lightbox}
            alt="Expanded photo"
            className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
