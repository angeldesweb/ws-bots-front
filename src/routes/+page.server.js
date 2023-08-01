import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

const api = env.API_URL;

export const actions = {
	login: async ({ request, cookies }) => {
		const data = await request.formData();

		const response = await fetch(`${api}/login`, {
			mode: 'cors',
			method: 'post',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(Object.fromEntries(data))
		});

		const result = await response.json();

		if (result.success) {
			cookies.set('token', result.token, { path: '/' });
			throw redirect(301, '/home');
		}
	}
};
