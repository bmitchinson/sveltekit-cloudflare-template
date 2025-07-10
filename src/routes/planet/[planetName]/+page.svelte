<script lang="ts">
	import Planet from '$lib/components/Planet.svelte';
	import { columnCenter } from '$lib/commonTailwind.js';

	export let data;
</script>

<Planet name={data.planetName} nickname={data.planetNickname} />

<form method="POST" action="?/nicknamePlanet">
	<div class={columnCenter + ' mt-8'}>
		<div class="font-large mb-1 block text-sm text-gray-700">
			~ submit a nickname for the planet to the server, to be signed and saved in a browser cookie ~
		</div>

		<input
			type="text"
			id="nickname"
			name="nickname"
			required
			class=" w-full border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
			placeholder={`enter a nickname for "${data.planetName}"`}
		/>

		<button type="submit" class="bg-blue-300 px-6 py-2 hover:bg-blue-200">go</button>
	</div>
</form>
