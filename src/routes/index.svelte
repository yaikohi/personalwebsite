<script lang="ts">
	import Icon from '$lib/components/Icon.svelte'
	import IconLink from '$lib/components/IconLink.svelte'
	import Image from '$lib/components/Image.svelte'
</script>

<div class=" relative z-10 mx-auto px-6 md:max-w-xl lg:max-w-4xl">
	<div class="flex flex-col items-center space-x-8 md:px-0 lg:flex lg:flex-row lg:text-left">
		<div class=" pb-4 lg:pb-0">
			<h1
				class="tracking-wide font-light leading-[3.125rem] pt-8 text-slate-900 transition-colors dark:text-white md:text-5xl"
			>
				Nice to meet you, my name is <span class="font-medium dark:text-yellow-200 text-blue-800">
					Erik Beem
				</span>
			</h1>
			<div class="pt-6 text-slate-800 dark:text-white">
				<section>
					<p class="mb-4 text-3xl leading-8">
						...and I currently work as a full-time intern at
						<a
							href="https://pttrns.ai"
							class="font-bold transition-colors hover:text-blue-500 dark:hover:text-blue-300"
							target="_blank"
							rel="noopener"
							>PTTRNS.ai
						</a>
						while being a full-time student at the university of applied sciences in Utrecht.
					</p>
				</section>
				<section>
					<p class="py-8 font-firacode text-xs font-light italic">
						I'm working on this website rn🚀🚀🚀
					</p>
				</section>
			</div>
		</div>
		<div class="mb-10 flex-shrink-0 px-2 pt-4 lg:px-4 lg:pt-12">
			<Image src="/images/me_irl.jpg" alt="me" />
			<div class="z-60 mt-5 flex flex-row justify-center font-medium">
				<IconLink linksTo="https://twitter.com/hhhghq0"><Icon icon="twitter" /></IconLink>
				<IconLink linksTo="https://www.linkedin.com/in/erik-beem/"
					><Icon icon="linkedin" /></IconLink
				>
				<IconLink linksTo="https://github.com/yaikohi"><Icon icon="github" /></IconLink>
			</div>
		</div>
	</div>
</div>
