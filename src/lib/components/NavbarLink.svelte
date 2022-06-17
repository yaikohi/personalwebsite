<script lang="ts">
	export let linksTo: string
	export let className: string = ''

	let finalClass = `hover:scale-110 ${className}`
</script>

<li class={finalClass}>
	<a
		href={linksTo}
		class="font-medium uppercase tracking-wider text-slate-900 transition-colors hover:text-violet-500 dark:text-white dark:hover:text-violet-300"
	>
		<slot />
	</a>
</li>
