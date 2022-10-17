import Image, { ImageProps } from 'next/image'
import { useRef, useState } from 'react'
import { useDidUpdate } from 'rooks'
import { isRemote } from 'utils/files'

const MIN_IMAGE_SIZE = 40

type CustomImageProps = {
	withFull?: boolean
} & ImageProps

function CustomImage({ withFull = false, ...props }: CustomImageProps) {
	const [full, setFull] = useState(false)
	const [imageSrc, setImageSrc] = useState(props.src)
	const isImageSmall = useRef(
		(props.height as number) < MIN_IMAGE_SIZE &&
			(props.width as number) < MIN_IMAGE_SIZE
	)

	useDidUpdate(() => setImageSrc(props.src), [props.src])

	return (
		<Image
			{...props}
			src={imageSrc}
			alt={props.alt}
			className={withFull ? 'cursor-pointer' : ''}
			placeholder={isImageSmall.current ? 'empty' : 'blur'}
			blurDataURL={typeof props.src === 'string' ? props.src : undefined}
			onError={() => setImageSrc('/images/default/broken-img.png')}
			unoptimized={isRemote(imagesSrc as string)}
			onClick={() => withFull && setFull(current => !current)}
			objectFit={full ? 'contain' : props.objectFit}
		/>
	)
}

export default CustomImage
