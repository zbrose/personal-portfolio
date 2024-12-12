import { Inter, Nunito, Quicksand } from 'next/font/google';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../scss/styles.scss';

const inter = Nunito({
	subsets: ['latin'],
	display: 'swap',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className}>
			<body>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
