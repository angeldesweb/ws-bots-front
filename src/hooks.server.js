export const handle = async ({ event, resolve }) => {
	const token = event.cookies.get('token') || null;
	//console.log(token);

	return resolve(event);
};
