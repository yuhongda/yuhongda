#!/usr/bin/env ts-node
'use strict';
import fetch from 'node-fetch';
import { writeFile } from 'node:fs/promises';

async function fetchInstagram() {
	const response = await fetch(`https://graph.instagram.com/me/media?access_token=${process.env.ACCESS_TOKEN}}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
	const json = (await response.json()) as any;

	if (json.data.length > 0) {
		let posts = [];
		const top3 = json.data.slice(0, 3);
		for (let i = 0; i < top3.length; i++) {
			const response = await fetch(
				`https://graph.instagram.com/${top3[i].id}?fields=media_url,thumbnail_url&access_token=${process.env.ACCESS_TOKEN}}`,
				{
					method: 'GET',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
				}
			);
			const d = (await response.json()) as any;

			// convert to base64
			const base64 = await fetch(d.media_url)
				.then((res) => res.arrayBuffer())
				.then((buf) => Buffer.from(buf).toString('base64'));
			posts.push({
				...d,
				base64,
			});
		}

		await writeFile('src/ig.json', JSON.stringify(posts));
	}
}

await fetchInstagram();
