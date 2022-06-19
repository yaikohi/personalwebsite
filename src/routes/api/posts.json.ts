
type TPost = {
    title: string,
    date: string,
}

type TPostFile = {
    path: string,
    meta: TPost
}

export const get = async () => {
    /**
	 * vite function, imports files and returns an object
	 * with the relative path as a key and the value being
	 * a function that loads the contents as a Js Promise
	 */
    const allPostFiles = import.meta.glob('../blog/*.md')

    const iterablePostFiles = Object.entries(allPostFiles)
  
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        const { metadata } = await resolver()
        const postPath = path.slice(2, -3)
  
        return {
          meta: metadata,
          path: postPath,
        }
      })
    )  

    const sortedPosts = allPosts.sort((a: TPostFile, b: TPostFile) => {
        const dateB = new Date(b.meta.date)
        const dateA = new Date(a.meta.date)

        // src1: https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
        // src2: https://bobbyhadz.com/blog/typescript-left-hand-side-of-arithmetic-operation-must-be-type

      return dateB.getTime() - dateA.getTime()
    })
  
    return {
      body: sortedPosts
    }
  }