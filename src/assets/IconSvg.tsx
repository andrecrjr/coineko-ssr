import Image, { ImageProps } from 'next/image';

export default function SvgAsset({ options }: { options: ImageProps }) {
  return <Image loading="eager" {...options} alt="icon" />;
}
