<script lang="ts" context="module">
	/** @type {import('@sveltejs/kit').Load */
	export const load: import('@sveltejs/kit').Load = async ({ fetch }) => {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts');

		const blogposts = await res.json();

		return {
			props: {
				blogposts
			}
		};
	};
</script>

<script lang="ts">
	export let blogposts: unknown | any;
</script>

<div class="container mx-auto px-6 md:max-w-xl lg:max-w-4xl ">
	<h1>Blog</h1>
	<h2>Contains posts and stuff</h2>
	{#each blogposts as post}
		<section class="py-4 flex flex-col">
			<h2>{post.title.substring(0, 20)}</h2>
			<p>{post.body.substring(0, 80)}</p>
			<a href={`/blog/${post.id}`}>Read more...</a>
		</section>
	{/each}
	<article>
		<h2>Title post 1</h2>
		<p>content post 1</p>
	</article>
</div>
