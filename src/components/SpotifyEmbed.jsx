import React from "react";

const SpotifyEmbed = () => {
  return (
    <div className="flex h-fit items-center justify-center p-10">
      <iframe
        as="true"
        className="border-radius:12px"
        src="https://open.spotify.com/embed/show/6i9SWtZPb30xVXWVHSKCqq?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyEmbed;
