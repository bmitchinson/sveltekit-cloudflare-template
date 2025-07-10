export async function verifyCookieValue(
	signedValue: string,
	secret: string
): Promise<string | null> {
	const parts = signedValue.split('.');
	if (parts.length !== 2) return null;

	const [value, signatureHex] = parts;

	const key = await crypto.subtle.importKey(
		'raw',
		new TextEncoder().encode(secret),
		{ name: 'HMAC', hash: 'SHA-256' },
		false,
		['verify']
	);

	const signature = new Uint8Array(
		signatureHex.match(/.{2}/g)?.map((byte) => parseInt(byte, 16)) || []
	);

	const isValid = await crypto.subtle.verify(
		'HMAC',
		key,
		signature,
		new TextEncoder().encode(value)
	);

	return isValid ? value : null;
}

// Utility functions for signing and verifying cookies
export async function signCookieValue(value: string, secret: string): Promise<string> {
	const key = await crypto.subtle.importKey(
		'raw',
		new TextEncoder().encode(secret),
		{ name: 'HMAC', hash: 'SHA-256' },
		false,
		['sign']
	);

	const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(value));
	const signatureHex = Array.from(new Uint8Array(signature))
		.map((b) => b.toString(16).padStart(2, '0'))
		.join('');

	return `${value}.${signatureHex}`;
}
