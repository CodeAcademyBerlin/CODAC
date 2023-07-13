// components/VideoEmbed.tsx
export function SectionGoogleSlide({ data }) {
    return (<div className="video-embed pb-56.25 relative my-8 h-72 overflow-hidden lg:h-[450px]">
      <iframe title="slides" src={data.link ?? ""} width={"100%"} height={"100%"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute left-0 top-0 h-full w-full"/>
    </div>);
}
