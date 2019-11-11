import Vue from "vue"
import Component from "vue-class-component"

const getPath = (file: string, path = ""): string =>
	path ? `/${path}/${file}` : `/${file}`

enum ImageSize {
	Regular = "reg",
	Thumb = "thumb",
}

namespace ImageSize {
	const urls: any = {
		reg:
			"https://res.cloudinary.com/salvadornico/image/upload/v1529327218/Portfolio",
		thumb:
			"https://res.cloudinary.com/salvadornico/image/upload/c_fill,g_north,h_200,w_200/v1507347618/Portfolio",
	}

	export const getUrl = (size: ImageSize): string => urls[size]
}

export type ImagePathOptions = {
	file: string
	path?: string
	size?: ImageSize
}

@Component
export class ImageService extends Vue {
	imagePath({
		file,
		path = "",
		size = ImageSize.Regular,
	}: ImagePathOptions): string {
		let url = ImageSize.getUrl(size)

		return url + getPath(file, path)
	}
}
