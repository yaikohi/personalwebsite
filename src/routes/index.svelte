<script lang="ts">
	import Icon from '$lib/components/Icon.svelte'
	import IconLink from '$lib/components/IconLink.svelte'
	import Image from '$lib/components/Image.svelte'
</script>

<div class=" relative z-10 mx-auto px-6 md:max-w-xl lg:max-w-4xl">
	<div class="flex flex-col items-center space-x-8 md:px-0 lg:flex lg:flex-row lg:text-left">
		<div class=" pb-4 lg:pb-0">
			<h1
				class="pt-8 font-light leading-[3.125rem] tracking-wide text-slate-900 transition-colors dark:text-white md:text-5xl"
			>
				Nice to meet you, my name is <span class="font-medium text-blue-800 dark:text-yellow-200">
					Erik Beem
				</span>
			</h1>
			<section>
				<p class="mb-4 text-3xl leading-8">
					...and I currently work as a full-time student at the university of applied sciences in
					Utrecht.
				</p>

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

				<section class="mt-14 mb-4 text-left">
					<h2 class="font-ptsans text-4xl sm:mt-4">
						I am also a professional hobbyist and time waster
					</h2>
					<div class="flex flex-row">
						<div class="flex flex-col" />
						<h2 class="mt-0 mb-8 font-ptsans text-2xl font-thin italic sm:mt-2">
							text-reader, video-watcher, youtube-subscriber, game-gamer, ADHD enjoyer, and
							household-developer
						</h2>
					</div>
					<p class="py-8 font-firacode text-xs font-light italic">
						and working on this website 🚀🚀🚀
					</p>
				</section>
			</section>
		</div>
	</div>
</div>
