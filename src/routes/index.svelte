<script lang="ts">
	import Image from '../components/Image.svelte';
</script>

<div class="container mx-auto px-6 md:max-w-xl lg:max-w-4xl ">
	<div class="flex flex-col items-center space-x-8 md:px-0 lg:flex lg:flex-row lg:text-left">
		<div class=" pb-4 lg:pb-0">
			<h1
				class="text-3xl font-bold text-slate-900 transition-colors dark:text-white md:text-5xl md:capitalize"
			>
				hello
			</h1>
			<div class="pt-6 text-slate-800 dark:text-white">
				<section>
					<p class="mb-4 ">
						I currently work as a full-time intern at
						<a
							href="https://pttrns.ai"
							class="font-bold transition-colors hover:text-violet-500 dark:hover:text-violet-300"
							target="_blank"
							rel="noopener"
							>PTTRNS.ai
						</a>
						while being a full-time student at the university of applied sciences in Utrecht.
					</p>
					<p class="pb-4">yeah🚀🚀🚀</p>
				</section>
				<section>
					<p class="py-8 text-xs italic font-firacode font-light">I'm working on this website rn</p>
				</section>
			</div>
		</div>
		<div class="mb-10 flex-shrink-0 px-2 pt-4 lg:px-4 lg:pt-12">
			<Image src="/images/me_irl.jpg" />
		</div>
	</div>
</div>
