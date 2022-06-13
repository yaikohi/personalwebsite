<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch, params }) => {
		const id = params.id;
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
		const post = await res.json();
		return {
			props: {
				post
			}
		};
	};
</script>

<script lang="ts">
	export let post: { title: string; body: string };
</script>

<div class="container mx-auto px-6 md:max-w-xl lg:max-w-4xl ">
	<article class="py-4 flex flex-col">
		<h2 class="py-5">{post.title}</h2>
		<p class="">{post.body}</p>
	</article>
</div>
