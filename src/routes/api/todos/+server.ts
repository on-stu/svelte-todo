import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { TodoRepository } from '$lib/repositories/TodoRepository';

const todoRepository = new TodoRepository();

export const GET: RequestHandler = () => {
	const todos = todoRepository.getTodos();
	return json(todos);
};

export const POST: RequestHandler = async (event) => {
	const todo = await event.request.json();
	todoRepository.addTodo(todo);
	return json(todo);
};
