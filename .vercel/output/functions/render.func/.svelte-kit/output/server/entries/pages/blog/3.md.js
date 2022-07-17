import { c as create_ssr_component, v as validate_component } from "../../../immutable/chunks/index-5d236a54.js";
import { P as Post } from "../../../immutable/chunks/_post-2318a219.js";
const metadata = {
  "title": "Third post, just in case",
  "date": "2022-06-29T00:00:00.000Z",
  "summary": "Just working on the appearance of the website, tweaking things etcetera."
};
const _3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Post, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<h2>Bonjour</h2>
<p>I am testing mdsvex still</p>
<p>tweaking</p>
<p>the dates don\u2019t look too good right now\u2026</p>
<p>googling..</p>
<p>WAIT!</p>
<p>without googling, I am using numbers instead of strings for the date</p>
<p>hence the weird format on this page.</p>
<p>I\u2019ll keep it on just this post for future reference</p>
<p>yes</p>
<style lang="${"postcss"}">h2 {
    
    padding-bottom: 1rem
}
    
    p {
    
    padding-top: 0.5rem;
    
    padding-bottom: 0.5rem
}</style>`;
    }
  })}`;
});
export {
  _3 as default,
  metadata
};
