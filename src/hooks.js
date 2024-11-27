import { redirect } from '@sveltejs/kit';

// src/hooks.server.js
export async function handle({ event, resolve }) {
    const response = await resolve(event);

    if (response.status === 404) {
        redirect(302,'/fallBack')
    }

    return response;
}
