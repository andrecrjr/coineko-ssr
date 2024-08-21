import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

export default function SvgAsset({
	options
}: {
	options: DetailedHTMLProps<
		ImgHTMLAttributes<HTMLImageElement>,
		HTMLImageElement
	>;
}) {
	// eslint-disable-next-line @next/next/no-img-element
	return <img {...options} alt="icon" loading="lazy" />;
}
