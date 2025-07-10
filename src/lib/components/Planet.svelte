<script lang="ts">
	import { planet } from '$lib/ascii';
	import { asciiArt } from '$lib/commonTailwind';

	export let name: String;
</script>

<div class={asciiArt}>{planet}</div>
<div class="mt-8">hello world 🪐</div>
<div>from planet "{name}"</div>
