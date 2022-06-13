<script lang="ts" context="module">
	/** @type {import('@sveltejs/kit').Load */
	export const load: import('@sveltejs/kit').Load = async ({ fetch }) => {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		const blogposts = await res.json();

		const resImg = await fetch('https://dog.ceo/api/breed/leonberg/images/');
		const resImgdata = await resImg.json();
		const images = resImgdata.message;

		return {
			props: {
				blogposts,
				images
			}
		};
	};
</script>

<script lang="ts">
	export let blogposts: unknown[] | any[];
	export let images: unknown[] | any[];
</script>

<div class="container mx-auto px-6 md:max-w-xl lg:max-w-4xl ">
	<h1>Blog</h1>
	<h2>Contains posts and stuff</h2>
	{#each blogposts as post}
		<section class="py-4 flex flex-col">
			<img src={images[post.id]} alt="Leonberger dog" />
			<h2 class="py-2">{post.title.substring(0, 20)}</h2>
			<div class="pl-2">
				<p>{post.body}</p>
				<a href={`/blog/${post.id}`}>Read more...</a>
			</div>
		</section>
	{/each}
</div>
