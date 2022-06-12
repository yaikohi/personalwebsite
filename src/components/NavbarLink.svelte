<script lang="ts">
	export let linksTo: string;
</script>

<li>
	<a
		href={linksTo}
		class="font-medium uppercase tracking-wider text-slate-900 transition-colors hover:text-violet-500 dark:text-white dark:hover:text-violet-300"
	>
		<slot />
	</a>
</li>
