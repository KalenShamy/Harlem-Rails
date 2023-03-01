import { error } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

import type { RequestHandler } from "./$types";

// Insert an email into the hello@ai-camp.org account for contact form submissions
// * INPUT: MailRequest
// * OUTPUT: MailResponse
export const POST: RequestHandler = async ({ request }) => {
	let result = 0;
	try {
		const data = await request.json();

		console.log(data);
	} catch {
		throw error(400, "Bad Request");
	}

	return new Response(JSON.stringify({result: result}), { status: 200 });
};
