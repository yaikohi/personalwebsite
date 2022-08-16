/**
 * Resources used:
 * src1: https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
 * src2: https://bobbyhadz.com/blog/typescript-left-hand-side-of-arithmetic-operation-must-be-type
 */

/**
 * The frontmatter of the `.md` posts
 */
type Frontmatter = {
	title: string
	date: string
	summary: string
}

/**
 * The function that returns a promise which resolves into the frontmatter `Post`.
 */
type Meta = () => Promise<{ metadata: Frontmatter }>

/**
 * Contains the metadata and the file path.
 */
type PostFile = {
	path: string
	meta: Frontmatter
}

export const GET: import('@sveltejs/kit').RequestHandler = async () => {
	/**
	 * Sveltekit (or Vite(?)) function that imports files and returns an object
	 * with the relative path as a key and the value as a
	 *  function that loads the content as a `Promise`
	 */
	const postFiles = import.meta.glob('../blog/*.md') as unknown as Record<string, Meta>

	const iterablePostFiles = Object.entries(postFiles)

	const posts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver()
			const postPath = path.slice(2, -3)

			return {
				meta: metadata,
				path: postPath,
			}
		}),
	)

	const sortedPosts = posts.sort((a: PostFile, b: PostFile) => {
		const dateB = new Date(b.meta.date)
		const dateA = new Date(a.meta.date)

		return dateB.getTime() - dateA.getTime()
	})

	return {
		body: sortedPosts,
	}
}
