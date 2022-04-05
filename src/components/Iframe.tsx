export default function Iframe() {
  return (
    <iframe
      loading="lazy"
      src="https://www.youtube-nocookie.com/embed/RDKe9ODRt4E"
      width="100%"
      height="100%"
      style={{ borderRadius: 8 }}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}
