import { c as create_ssr_component, v as validate_component } from "../../../immutable/chunks/index-5d236a54.js";
import { P as Post } from "../../../immutable/chunks/_post-2318a219.js";
const metadata = {
  "title": "First time using mdsvex",
  "date": "2022-06-29",
  "summary": "I parsed this post in markdown with mdsvex which allows you to use svelte and markdown within sveltekit projects."
};
const _1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<h2>Gutentag</h2>
<p>I installed mdsvex to handle markdown files for me as I plan to write my blogs in markdown language.</p>
<p>Not really one-hundred percent sure. However, figuring out how to get mdsvex to work with my application is interesting enough in itself so I thought why not.</p>
<p>I followed <a href="${"https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog"}" rel="${"nofollow"}">John\u2019s</a> blogpost about setting up mdsvex and sveltekit to set it up for my own website. It was a good informative read. </p>
<p>Working on this website I also maintained a list of sources which can be found on the github page of this website <a href="${"https://github.com/yaikohi/personalwebsite"}" rel="${"nofollow"}">here</a>.</p>
<style lang="${"postcss"}">h2 {
    
    padding-bottom: 1rem
}
    
    p {
    
    padding-top: 0.5rem;
    
    padding-bottom: 0.5rem
}
    
    p:last-child {
    
    padding-top: 9rem
}

    a {
    
    --tw-text-opacity: 1;
    
    color: rgb(30 58 138 / var(--tw-text-opacity))
}

    a:hover {
    
    --tw-text-opacity: 1;
    
    color: rgb(96 165 250 / var(--tw-text-opacity))
}

    .dark a {
    
    --tw-text-opacity: 1;
    
    color: rgb(59 130 246 / var(--tw-text-opacity))
}

    .dark a:hover {
    
    --tw-text-opacity: 1;
    
    color: rgb(191 219 254 / var(--tw-text-opacity))
}</style>`;
    }
  })}`;
});
export {
  _1 as default,
  metadata
};
