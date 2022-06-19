export const get = async () => {
	/**
	 * vite function, imports files and returns an object
	 * with the relative path as a key and the value being
	 * a function that loads the contents as a Js Promise
	 */
	const allPostFiles = import.meta.glob('../blog/*.md')

	console.log(allPostFiles)

	const iterablePostFiles = Object.entries(allPostFiles)

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metaData } = await resolver()
			const postPath = path.slice(2, -3)

			return {
				meta: metaData,
				path: postPath,
			}
		}),
	)
	// const sortedPosts = allPosts.sort((a, b) => {
	//     return new Date(b.meta.date) - new Date(a.meta.date)
	// })

	return {
		status: 200,
		body: allPosts,
	}
}
