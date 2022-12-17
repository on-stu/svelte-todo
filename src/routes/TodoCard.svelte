<script lang="ts">
	import type { Todo } from '$lib/types/todo';
	export let todo: Todo;
</script>

<div>
	<input type="checkbox" bind:checked={todo.done} />
	<span class="content" on:click={() => (todo.done = !todo.done)} on:keyup>
		{todo.content}
	</span>
</div>

<style>
	.content {
		cursor: pointer;
	}
</style>
