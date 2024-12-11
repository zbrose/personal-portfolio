import { Metadata } from 'next';
import Home from '../components/home';
import path from 'path';
import fs from 'fs';

export const metadata: Metadata = {
	title: 'Zachary Manning-Brose',
};

async function getImages() {
	const imagesDirectory = path.join(process.cwd(), 'public/icons');
	const images = fs.readdirSync(imagesDirectory);
	return images;
}

export default async function Page() {
	const images = await getImages();
	return <Home images={images} />;
}
