'use client';

import { Button, TextField } from '@radix-ui/themes';
import axios from 'axios';
import 'easymde/dist/easymde.min.css';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import SimpleMDE from 'react-simplemde-editor';

interface IssueForm {
	title: string;
	description: string;
}

export default function NewIssuePage() {
	const router = useRouter();
	const { register, control, handleSubmit } = useForm<IssueForm>();

	return (
		<form
			className='max-w-xl mx-auto space-y-3'
			onSubmit={handleSubmit(async (data) => {
				await axios
					.post('/api/issues', data)
					.then()
					.then(() => {
						toast.success('Data Submited');
						router.push('/issues');
					})
					.catch((error) => {
						console.log(error.response.data[0].message);

						toast.error(`${error.response.data[0].message}`);
					});
			})}
		>
			<TextField.Root>
				<TextField.Input placeholder='Title' {...register('title')} />
			</TextField.Root>
			<Controller
				name='description'
				control={control}
				render={({ field }) => <SimpleMDE placeholder='description' {...field} />}
			/>
			<Button>Submit New Issue</Button>
		</form>
	);
}
