import { signCookieValue, verifyCookieValue } from '$lib/cookies';
import { redirect } from '@sveltejs/kit';

export async function load({ params, platform, cookies }) {
	const planetNicknameSigned = cookies.get(`${params.planetName}-planetNickname`);

	const planetNicknameDecoded = await verifyCookieValue(
		planetNicknameSigned,
		platform.env.COOKIE_SECRET
	);

	// the following is provided as "data" to the component
	return {
		planetName: params.planetName,
		planetNickname: planetNicknameDecoded || ''
	};
}

export const actions = {
	nicknamePlanet: async ({ request, params, platform, cookies }) => {
		const data = await request.formData();
		const nicknameFromForm = data.get('nickname');

		const cookieAttr = `${params.planetName}-planetNickname`;
		const signedValue = await signCookieValue(nicknameFromForm, platform.env.COOKIE_SECRET);

		cookies.set(cookieAttr, signedValue, {
			path: `/planet/${params.planetName}`, // scope cookie to page
			maxAge: 60 * 60 * 1, // 1 hours
			httpOnly: true,
			secure: true,
			sameSite: 'strict'
		});

		// 303 - Operation has completed, continue elsewhere
		return redirect(303, `/planet/${params.planetName}`);
	}
};
