<script lang="ts">
	import type { PageData } from './$types';
	import type { Todo } from '$lib/types/todo';
	import TodoCard from './TodoCard.svelte';

	export let data: PageData; //무조건 data로 받아와야 함, object type임
	let todos: Todo[] = data.todos;
	let content = '';

	const addTodo = async () => {
		const newTodo: Todo = { id: todos.length + 1, content, done: false };
		todos = [...todos, newTodo];
		fetch('http://localhost:5173/api/todos', { method: 'POST', body: JSON.stringify(newTodo) });
		content = '';
	};

	$: console.log(todos);
</script>

<div class="container" on:mousemove={(e) => console.log(e)}>
	<input placeholder="add todo" type="text" bind:value={content} />
	<button on:click={addTodo}>ADD</button>
	{#each todos as todo}
		<TodoCard {todo} />
	{/each}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 12px;
	}
</style>
