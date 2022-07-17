import { c as create_ssr_component, f as each, a as add_attribute, e as escape } from "../../immutable/chunks/index-5d236a54.js";
const load = async ({ fetch }) => {
  const res = await fetch("/api/posts.json");
  const posts = await res.json();
  return { props: { posts } };
};
const Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  return `<div class="${"mx-auto max-w-xl"}"><div class="${"mx-8 sm:mx-auto"}"><section class="${"mx-auto mt-12 max-w-xl"}"><h2 class="${"font-extralight italic text-slate-500 dark:text-slate-300"}">Posts</h2>
			<div class="${"flex flex-col"}"><ul class="${"my-2"}">${each(posts, (post) => {
    return `<li class="${"rounded-xl p-4 hover:bg-slate-50 dark:hover:bg-slate-800"}"><article><header><h3 class="${"font-medium"}"><a class="${"transition-colors hover:text-violet-500 hover:underline hover:underline-offset-4 dark:text-white dark:hover:text-violet-300"}"${add_attribute("href", `${post.path}`, 0)}>${escape(post.meta.title)}</a></h3>
									<p class="${"font-light"}">${escape(post.meta.summary)}</p>
								</header></article>
						</li>`;
  })}</ul></div></section></div></div>`;
});
export {
  Blog as default,
  load
};
