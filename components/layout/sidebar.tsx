import Badge from '@/components/ui/badge';
import { HStack, VStack } from '@chakra-ui/react';
import Link from 'next/link';

export default function Sidebar() {
	return (
		<div className='flex flex-row lg:flex-col gap-6 items-stretch sidebar'>
			<VStack
				justifyContent={'end'}
				alignItems={'start'}
				className='lg:h-[137px] flex-1 lg:flex-none bg-custom-radial md:rounded-[10px] p-[24px] text-white'
			>
				<div className='font-bold text-xl'>Frontend Mentor</div>
				<div className='text-base opacity-75'>Feedback Board</div>
			</VStack>

			<HStack className='flex-1 !hidden md:!flex lg:flex-none bg-white rounded-[10px] p-[24px]'>
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
				className='flex-1 !hidden md:!flex lg:flex-none bg-white rounded-[10px] p-[24px]'
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
	);
}
