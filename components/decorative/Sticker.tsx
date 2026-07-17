type Props = {
  src: string;
  alt?: string;
  className?: string;
};

export default function Sticker({ src, alt = "", className = "" }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`object-contain select-none ${className}`}
      draggable={false}
    />
  );
}
