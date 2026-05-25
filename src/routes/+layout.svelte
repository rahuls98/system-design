<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Sidebar from '$lib/components/+sidebar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="stylesheet" href="https://unpkg.com/@knadh/oat/oat.min.css" />
	<script src="https://unpkg.com/@knadh/oat/oat.min.js" defer></script>

	<style>
		main {
			padding: 20px;
		}
	</style>
</svelte:head>

<nav data-topnav>
	<button data-sidebar-toggle aria-label="Toggle menu" class="outline"> ☰ </button>
	<span>System Design</span>
</nav>

<aside data-sidebar>
	<Sidebar />
</aside>

<main>
	{@render children()}
</main>
