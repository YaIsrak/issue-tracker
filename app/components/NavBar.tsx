import Link from 'next/link';
import { FaBug } from 'react-icons/fa';

export default function NavBar() {
	const links = [
		{
			label: 'Deshboard',
			href: '/',
		},
		{
			label: 'Issues',
			href: '/issues',
		},
	];
	return (
		<nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
			<Link href={'/'}>
				<FaBug />
			</Link>
			<ul className='flex space-x-6'>
				{links.map((link) => (
					<li key={link.href}>
						<Link
							className='text-zinc-500 hover:text-zinc-800 transition-colors'
							href={link.href}
						>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}