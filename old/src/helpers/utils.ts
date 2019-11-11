export const getJson = (url: string) => fetch(url).then(data => data.json())

export const capitalize = (value: string) => {
	if (!value) return ""

	return value.charAt(0).toUpperCase() + value.slice(1)
}
