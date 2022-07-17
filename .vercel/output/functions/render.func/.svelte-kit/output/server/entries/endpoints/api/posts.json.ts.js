const GET = async () => {
  const postFiles = Object.assign({ "../blog/1.md": () => import("../../pages/blog/1.md.js"), "../blog/2.md": () => import("../../pages/blog/2.md.js"), "../blog/3.md": () => import("../../pages/blog/3.md.js") });
  const iterablePostFiles = Object.entries(postFiles);
  const posts = await Promise.all(iterablePostFiles.map(async ([path, resolver]) => {
    const { metadata } = await resolver();
    const postPath = path.slice(2, -3);
    return {
      meta: metadata,
      path: postPath
    };
  }));
  const sortedPosts = posts.sort((a, b) => {
    const dateB = new Date(b.meta.date);
    const dateA = new Date(a.meta.date);
    return dateB.getTime() - dateA.getTime();
  });
  return {
    body: sortedPosts
  };
};
export {
  GET
};
