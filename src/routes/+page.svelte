<script lang="ts">
	const getRandomNumber = async () => {
		const response = await fetch('http://localhost:5173/api');
		const data = await response.json();
		return data;
	};
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data);
</script>

<div>
	{#await getRandomNumber() then number}
		<h2>{number}</h2>
	{/await}
</div>
