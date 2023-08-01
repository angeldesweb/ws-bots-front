export const load = async ({ cookies }) => {
	const token = cookies.get('token', { path: '/' });
	return {
		token
	};
};
