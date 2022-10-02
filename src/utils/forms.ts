import { MouseEvent } from 'react'

export function stopPropagation(e: MouseEvent<HTMLElement>) {
	e.stopPropagation()
	e.nativeEvent.stopPropagation()
}
