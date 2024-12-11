import { Metadata } from 'next';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../scss/styles.scss';

export const metadata: Metadata = {
	title: 'Home',
	description: 'Welcome to Next.js',
};

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
