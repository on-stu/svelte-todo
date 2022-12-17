<script>
	import Headers from './Headers.svelte';
</script>

<div class="root">
	<Headers />
	<slot />
</div>

<style global>
	* {
		padding: 0;
		margin: 0;
		font-family: 'PuradakGentleGothicR';
	}

	@font-face {
		font-family: 'PuradakGentleGothicR';
		src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.1/PuradakGentleGothicR.woff2')
			format('woff2');
		font-weight: normal;
		font-style: normal;
	}

	.root {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
	}
</style>
