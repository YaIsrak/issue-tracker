import { Button } from '@radix-ui/themes';
import Link from 'next/link';

export default function page() {
	return (
		<div>
			<Button>
				<Link href={'/issues/new'}>New</Link>
			</Button>
		</div>
	);
}
