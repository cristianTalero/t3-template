import Image, { ImageProps } from 'next/image'
import { useState } from 'react'
import { useDidUpdate } from 'rooks'

function CustomImage(props: ImageProps) {
	const [imageSrc, setImageSrc] = useState(props.src)

	useDidUpdate(() => setImageSrc(props.src), [props.src])
	
	return (
		<Image
			{...props}
			src={imageSrc}
			alt={props.alt}
			onError={() => setImageSrc('/images/default/broken-img.png')}
		/>
	)
}

export default CustomImage
