import { c as create_ssr_component, e as escape } from "./index-5d236a54.js";
const Post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { date } = $$props;
  let { summary } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.summary === void 0 && $$bindings.summary && summary !== void 0)
    $$bindings.summary(summary);
  return `<article class="${"mx-8 max-w-2xl sm:mx-auto"}"><header class="${"mx-auto mt-20 mb-14 max-w-2xl"}"><h1 class="${"pb-4 font-medium"}">${escape(title)}</h1>
		<h2 class="${"font-light italic"}">${escape(summary)}</h2>
		<h3 class="${"pt-8 text-right text-sm text-slate-800 dark:text-slate-400"}">Published: ${escape(date)}</h3></header>
	<div>${slots.default ? slots.default({}) : ``}</div></article>`;
});
export {
  Post as P
};
