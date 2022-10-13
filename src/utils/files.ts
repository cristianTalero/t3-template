export function toBase64(file: File) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()

		reader.readAsDataURL(file as Blob)
		reader.onloadend = () => {
			resolve(reader.result as string)
		}

		reader.onerror = error => {
			reject(error)
		}
	})
}

export function isRemote(src: string) {
	return src.includes('http', 0)
}
