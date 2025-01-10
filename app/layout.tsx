import { Provider } from '@/components/ui/provider';
import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import './globals.css';

const jost = Jost({
	variable: '--font-jost',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Rotate - Senior Frontend Developer Interview by Don Daniel.',
	description:
		"Daniel Don's submission of the Rotate's Senior Frontend Developer Interview.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${jost.variable} antialiased light`}>
				<Provider>
					<div
						id='pageLayout'
						className='flex flex-col lg:flex-row md:gap-[30px] page-layout'
					>
						{children}
					</div>
				</Provider>
			</body>
		</html>
	);
}
