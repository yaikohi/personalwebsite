<script lang="ts">
	import Image from '../components/Image.svelte';
</script>

<section>
	<div class="container mx-auto px-6 md:max-w-xl lg:max-w-4xl ">
		<div class="flex flex-col items-center space-x-8 md:px-0 lg:flex lg:flex-row lg:text-left">
			<div class="lg:pt-12">
				<h1
					class="text-3xl font-bold text-slate-900 transition-colors dark:text-white md:text-5xl md:capitalize"
				>
					hello
				</h1>
				<div class="pt-6 text-slate-800 dark:text-white">
					<p class="mb-4 ">
						I currently work as a full-time intern at
						<a
							href="https://pttrns.ai"
							class="font-bold transition-colors dark:hover:text-violet-300 hover:text-violet-500"
							target="_blank"
							rel="noopener"
							>PTTRNS.ai
						</a>
						while being a full-time student at the university of applied sciences in Utrecht.
					</p>
					<p class="pb-4">yeah🚀🚀🚀</p>
					<section>
						<h2 class="text-2xl py-2">
							Current <code
								class="bg-slate-100 font-thin text-slate-800 dark:bg-slate-800 dark:text-slate-100"
								>state</code
							>
						</h2>
						<p class="pb-4">
							I am currently working on this website and another elden-ring related project.
						</p>
					</section>
				</div>
			</div>
			<div class="mb-10 flex-shrink-0 px-2 pt-4 lg:px-4 lg:pt-12">
				<Image src="/images/me_irl.jpg" />
			</div>
		</div>
	</div>
</section>
