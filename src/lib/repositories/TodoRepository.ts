import type { Todo } from '$lib/types/todo';
import * as fs from 'fs';

export class TodoRepository {
	private todos: Todo[];

	constructor() {
		const todosFile = fs.readFileSync('./static/todos.json');
		this.todos = JSON.parse(todosFile.toString());
	}

	getTodos(): Todo[] {
		return this.todos;
	}

	addTodo(todo: Todo) {
		this.todos.push(todo);
		this.storeFile();
	}

	deleteTodo(todoId: number) {
		this.todos = this.todos.filter((todo) => todo.id !== todoId);
		this.storeFile();
	}

	storeFile() {
		fs.writeFileSync('./static/todos.json', JSON.stringify(this.todos));
	}
}
