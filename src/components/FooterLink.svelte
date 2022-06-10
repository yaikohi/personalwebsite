<script lang="ts">
	export let linksTo: string;
</script>

<a
	href={linksTo}
	class="transition-colors delay-150 ease-in-out hover:rounded-xl p-2 hover:bg-violet-50 hover:text-violet-800 dark:text-white  dark:hover:bg-slate-800 dark:hover:text-purple-200"
	target="_blank"
	rel="noreferrer"
>
	<slot />
</a>
