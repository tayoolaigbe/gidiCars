import './globals.css';
import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components';

export const metadata: Metadata = {
	title: 'Car hub',
	description: 'Discover the best cars in Edinburgh.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Navbar />
			<body className="relative">{children}</body>
			<Footer />
		</html>
	);
}
