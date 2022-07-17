import { c as create_ssr_component, v as validate_component } from "../../../immutable/chunks/index-5d236a54.js";
import { P as Post } from "../../../immutable/chunks/_post-2318a219.js";
const metadata = {
  "title": "Thoughts while making this site",
  "date": "2022-06-29",
  "summary": "Writing a blog and how I want to write new posts"
};
const _2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<h2>Hallo</h2>
<p>I initially wrote this file to test out the capabilities of mdsvex but I thought I could also write some more.</p>
<p>I have been thinking the following while working on this website.</p>
<blockquote><p>Why is it hard to make your own website?</p></blockquote>
<p>Immediately I realized some obvious reasons.</p>
<ul><li>It should display who you are to the public and this can be very overwhelming for a lot of people</li>
<li>Webdevelopment is such a vast area with a lot to learn, which can also be overwhelming</li>
<li>It involves creating designs, which is another thing that has a whole field for it</li></ul>
<p>Concerning the software design I am still not sure if I would want to proceed with the setup I currently have. Which is posting new posts through git commits.</p>
<p>I also am writing the tailwindcss inside the markdown files because I don\u2019t know how else I would update the layout of the post. This adds extra effort to writing the posts alone but I guess it allows for certain flexibility when I want certain elements to look a certain way.</p>
<style lang="${"postcss"}">blockquote {

    margin-left: 1rem;

    margin-right: 1rem;

    margin-top: 0.5rem;

    margin-bottom: 1rem;

    --tw-bg-opacity: 1;

    background-color: rgb(249 250 251 / var(--tw-bg-opacity));

    padding: 0.5rem
}

.dark blockquote {

    --tw-bg-opacity: 1;

    background-color: rgb(30 41 59 / var(--tw-bg-opacity))
}

    ul {

    display: flex;

    flex-direction: column
}

    li {

    margin-top: 0.5rem;

    margin-bottom: 0.5rem;

    margin-left: 1.5rem;

    margin-right: 1.5rem;

    list-style-type: disc;

    font-weight: 100
}

    h2 {

    padding-bottom: 1rem
}
    
    p {

    padding-top: 0.5rem;

    padding-bottom: 0.5rem
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
  _2 as default,
  metadata
};
