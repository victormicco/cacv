import NextImage from "next/image";

type GalleryPhotoProps = {
  src: string;
  alt: string;
  width: string;
  height: string;
};

export default function GalleryPhoto({
  src,
  alt,
  width,
  height,
}: GalleryPhotoProps) {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{ borderRadius: 12, flex: 1 }}
    />
  );
}
