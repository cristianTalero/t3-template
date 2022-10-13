import Image, { ImageProps } from 'next/image'
import { useRef, useState } from 'react'
import { useDidUpdate } from 'rooks'
import { isRemote } from 'utils/files'

function CustomImage(props: ImageProps) {
	const [imageSrc, setImageSrc] = useState(props.src)
	const isImageSmall = useRef(props.height === 40 && props.width === 40)

	useDidUpdate(() => setImageSrc(props.src), [props.src])

	return (
		<Image
			{...props}
			src={imageSrc}
			alt={props.alt}
			placeholder={isImageSmall.current ? 'empty' : 'blur'}
			blurDataURL={typeof props.src === 'string' ? props.src : undefined}
			onError={() => setImageSrc('/images/default/broken-img.png')}
			unoptimized={isRemote(props.src as string)}
		/>
	)
}

export default CustomImage
