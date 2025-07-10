<script lang="ts">
	import { planet } from '$lib/ascii';
	import { asciiArt } from '$lib/commonTailwind';

	export let name: string;
	export let nickname = '';
</script>

<div class={asciiArt}>{planet}</div>
<div class="mt-8">hello world 🪐</div>
<div>from planet "{name}"</div>

{#if !nickname}
	<div>aka: (nickname missing)</div>
{:else}
	<div>{`aka: ${nickname}`}</div>
{/if}
