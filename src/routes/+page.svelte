<script lang="ts">
	const getRandomNumber = async () => {
		const response = await fetch('http://localhost:5173/api');
		const data = await response.json();
		return data;
	};
</script>

<div>
	{#await getRandomNumber()}
		<h2>loading</h2>
	{:then number}
		<h2>{number}</h2>
	{/await}
</div>
