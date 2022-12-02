import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Todo } from '$lib/types/todo';

export const load: PageServerLoad<Todo[]> = async ({ params }) => {
	if (true) {
		return [{ done: false, content: 'hello world' }];
	}

	throw error(404, 'Not found');
};
