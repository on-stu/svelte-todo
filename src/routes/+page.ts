import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Todo } from '$lib/types/todo';

export const load: PageLoad<{ todos: Todo[] }> = async ({ params }) => {
	const todos = await fetch('http://localhost:5173/api/todos').then((res) => res.json());

	if (true) {
		return { todos }; // array 형태로 내보낼 수 없음
	}

	throw error(404, 'Not found');
};
