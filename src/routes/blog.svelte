<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit'
	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/api/posts.json')
		const posts = await res.json()

		return {
			props: {
				posts,
			},
		}
	}
</script>

<script lang="ts">
	export let posts: any
</script>

<div class="mx-auto max-w-xl">
	<div class=" mx-8 sm:mx-auto">
		<section class="mx-auto mt-12 max-w-xl">
			<h2 class="font-extralight italic text-slate-500 dark:text-slate-300">Posts</h2>
			<div class="flex flex-col">
				<ul class="my-2">
					{#each posts as post}
						<li class="rounded-xl p-4 hover:bg-slate-50 dark:hover:bg-slate-800">
							<article>
								<header>
									<h3 class="font-medium">
										<a
											class="transition-colors hover:text-violet-500 hover:underline hover:underline-offset-4 dark:text-white dark:hover:text-violet-300"
											href={`${post.path}`}>{post.meta.title}</a
										>
									</h3>
									<p class="font-light">{post.meta.summary}</p>
								</header>
							</article>
						</li>
					{/each}
				</ul>
			</div>
		</section>
	</div>
</div>
