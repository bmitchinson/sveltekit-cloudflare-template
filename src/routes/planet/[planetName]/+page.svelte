<script lang="ts">
	import Planet from '$lib/components/Planet.svelte';

	export let data;
</script>

<Planet name={data.planetName} />
