export const handle = async ({ event, resolve }) => {
	const token = event.cookies.get('token') || null;

	if (token && event.url.pathname === '/') {
		return new Response('Redirect', { status: 301, headers: { Location: '/home' } });
	}

	if (!token && event.url.pathname !== '/') {
		return new Response('Redirect', { status: 301, headers: { Location: '/' } });
	}

	return resolve(event);
};
