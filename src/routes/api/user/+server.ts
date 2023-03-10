import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// sveltekit API route -> /login/{customer_id}
// export const GET: RequestHandler = async ({ params }) => {
export const GET: RequestHandler = async () => {
	return json({user: 'default user'})
};
