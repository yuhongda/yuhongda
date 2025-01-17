#!/usr/bin/env ts-node
'use strict';
import fetch from 'node-fetch';
import { writeFile } from 'node:fs/promises';
import sharp from 'sharp';

async function fetchInstagram() {
	const response = await fetch(`https://graph.instagram.com/me/media?access_token=${process.env.IG_TOKEN}}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	});
	const json = (await response.json()) as any;

	if (json.data?.length > 0) {
		let posts = [];
		const top9 = json.data.slice(0, 9);
		for (let i = 0; i < top9.length; i++) {
			console.log(`Fetching ${i + 1} of ${top9.length}`);
			const response = await fetch(
				`https://graph.instagram.com/${top9[i].id}?fields=media_url,thumbnail_url&access_token=${process.env.IG_TOKEN}}`,
				{
					method: 'GET',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
				}
			);
			const d = (await response.json()) as any;
			const isThumbnail = d.thumbnail_url && !d.media_url;
			// resize image to 50% of original size and convert to base64
			const arrayBuffer = await fetch(d.thumbnail_url || d.media_url).then((res) => res.arrayBuffer());
			const imageBuffer = Buffer.from(arrayBuffer);
			const metadata = (await sharp(imageBuffer).metadata()) as any;
			const resizedImageBuffer = await sharp(imageBuffer)
				.resize({ width: isThumbnail ? metadata.width : Math.round(metadata.width / 4) })
				.toBuffer();
			const base64 = resizedImageBuffer.toString('base64');

			posts.push({
				...d,
				base64,
			});
		}

		await writeFile('src/ig.json', JSON.stringify(posts));
		console.log('Done');
	}
}

await fetchInstagram();
