import React, { useState } from "react";

export default function YouTubeFacade({
  videoId,
  title = "School video",
  isShorts = false, // Shorts → vertical ratio
}) {
  const [play, setPlay] = useState(false);
  const [thumb, setThumb] = useState(
    `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
  );

  const embedSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;

  // 9:16 for shorts, 16:9 for normal
  const paddingTop = isShorts ? "177.78%" : "56.25%";

  return (

    <div className={`mx-auto ${isShorts ? "max-w-sm" : "max-w-5xl"}`}>
      <div
        className="relative w-full overflow-hidden rounded-xl shadow-md bg-black"
        style={{ paddingTop }}
      >
        {play ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={embedSrc}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlay(true)}
            className="absolute inset-0 h-full w-full"
            aria-label="Play video"
            style={{
              backgroundImage: `url(${thumb})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* fallback if maxres not available */}
            <img
              src={thumb}
              alt=""
              className="hidden"
              onError={() =>
                setThumb(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`)
              }
            />

            <span className="absolute inset-0 bg-black/30" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="h-16 w-16 rounded-full bg-black/60 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
