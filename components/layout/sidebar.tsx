import Badge from '@/components/ui/badge';
import { Button, HStack, VStack } from '@chakra-ui/react';
import { List, X } from '@phosphor-icons/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Sidebar() {
	const [showNav, setShowNav] = useState(false);
	const toggleNav = () => setShowNav((p) => !p);

	useEffect(() => {
		document.body.classList[showNav ? 'add' : 'remove']('no-scroll');
		return () => document.body.classList.remove('no-scroll');
	}, [showNav]);

	return (
		<div
			className={`flex flex-row lg:flex-col gap-6 items-stretch sidebar relative `}
		>
			<HStack className='lg:h-[137px] bg-custom-radial p-[24px] w-full md:rounded-[10px] flex-1 lg:flex-none overflow-visible'>
				<VStack
					justifyContent={'end'}
					alignItems={'start'}
					className='flex-1 !gap-0 md:!gap-[auto] text-white h-full'
				>
					<div className='font-bold text-[15px] md:text-xl'>
						Frontend Mentor
					</div>
					<div className='text-[13px] md:text-base opacity-75'>
						Feedback Board
					</div>
				</VStack>
				<Button
					onClick={toggleNav}
					className='md:hidden !p-0 min-w-max h-auto'
				>
					{showNav ? (
						<X color='white' className='text-xl' />
					) : (
						<List color='white' className='text-xl' />
					)}
				</Button>
			</HStack>

			<div
				className={`absolute ${
					showNav ? 'left-0' : 'left-full'
				} top-full right-0 bottom-0 z-10 h-screen md:h-auto md:static flex-[2] md:flex-none bg-black/20 md:bg-transparent`}
				onClick={toggleNav}
			>
				<div className='bg-[#F7F8FD] md:bg-transparent h-screen md:h-auto md:static flex flex-col md:flex-row lg:flex-col gap-6 items-stretch p-6 md:p-0 w-3/4 ml-auto md:w-auto md:ml-0'>
					<HStack className='flex-none md:flex-1 flex lg:flex-none bg-white rounded-[10px] p-[24px]'>
						<HStack
							justifyContent={'start'}
							alignItems={'start'}
							flexWrap={'wrap'}
							gapX={'8px'}
							gapY={'16px'}
						>
							<Badge active>All</Badge>
							<Badge>UI</Badge>
							<Badge>UX</Badge>
							<Badge>Enhancement</Badge>
							<Badge>Bug</Badge>
							<Badge>Feature</Badge>
						</HStack>
					</HStack>

					<VStack
						alignItems={'stretch'}
						gapY={'2'}
						className='flex-none md:flex-1 flex lg:flex-none bg-white rounded-[10px] p-[24px]'
					>
						<HStack justifyContent={'space-between'}>
							<div className='text-lg font-bold text-[#3A4374] flex-1'>
								Roadmap
							</div>
							<div>
								<Link href='#'>View</Link>
							</div>
						</HStack>
						<HStack
							justifyContent={'space-between'}
							className='text-gray-500'
						>
							<HStack gapX={'2'} flex={1}>
								<div className='bg-[#F49F85] h-2 w-2 rounded-full' />
								<div>Planned</div>
							</HStack>
							<div className='font-bold'>2</div>
						</HStack>
						<HStack
							justifyContent={'space-between'}
							className='text-gray-500'
						>
							<HStack gapX={'2'} flex={1}>
								<div className='bg-[#AD1FEA] h-2 w-2 rounded-full' />
								<div>In-Progress</div>
							</HStack>
							<div className='font-bold'>3</div>
						</HStack>
						<HStack
							justifyContent={'space-between'}
							className='text-gray-500'
						>
							<HStack gapX={'2'} flex={1}>
								<div className='bg-[#62BCFA] h-2 w-2 rounded-full' />
								<div>Live</div>
							</HStack>
							<div className='font-bold'>1</div>
						</HStack>
					</VStack>
				</div>
			</div>
		</div>
	);
}
