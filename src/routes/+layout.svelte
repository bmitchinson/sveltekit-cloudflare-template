<script lang="ts">
	import '../app.css';
	import { blueLink } from '../lib/commonTailwind';

	let { children } = $props();
</script>

<svelte:head>
	<title>Planet 🪐</title>
	<meta property="og:title" content="Planets" />
	<meta property="og:description" content="Planet list" />
	<meta property="og:url" content="https://planet.mitchinson.com" />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<header class="mx-4 my-4 flex flex-row justify-between space-x-4 text-2xl">
		<a href="/">home</a>
	</header>

	<hr class="mb-4 w-full border-t border-gray-300" />

	<div class="m-8 flex flex-grow flex-col items-center">
		{@render children()}
	</div>

	<hr class="mt-4 w-full border-t border-gray-300" />

	<footer class="text-md m-4 flex flex-row justify-center gap-4">
		<a href="/about" class={blueLink}>how i made this site</a> -
		<a href="/" class={blueLink}>home</a> -
		<a href="https://home.mitchinson.dev" class={blueLink}>more of my work</a>
	</footer>
</div>
