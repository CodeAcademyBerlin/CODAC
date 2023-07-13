// components/VideoEmbed.tsx
import React from "react";
const getEmbedUrl = (videoUrl) => {
    const youtubeRegex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|watch\?v%3D)([\w-]{11}).*/;
    const youtubeMatch = videoUrl.match(youtubeRegex);
    if (youtubeMatch && youtubeMatch[2].length === 11) {
        return `https://www.youtube.com/embed/${youtubeMatch[2]}`;
    }
    // Add support for other video platforms here
    return null;
};
export function SectionVideoEmbed({ data }) {
    const embedUrl = getEmbedUrl(data.url);
    if (!embedUrl)
        return <div>Invalid video URL</div>;
    return (<div className="video-embed pb-56.25 relative my-8 h-72 overflow-hidden lg:h-[450px]">
      <iframe title="video" src={embedUrl || ""} width={data.width || "100%"} height={data.height || "100%"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute left-0 top-0 h-full w-full"/>
    </div>);
}
