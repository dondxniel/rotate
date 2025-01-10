import Badge from '@/components/ui/badge';
import { HStack, VStack } from '@chakra-ui/react';
import { CaretUp, ChatCircle } from '@phosphor-icons/react';

export default function SuggestionCard() {
	return (
		<HStack
			alignItems={'stretch'}
			p='32px'
			gapX={'40px'}
			borderRadius={'10px'}
			bg='white'
		>
			<VStack className='!hidden md:!flex'>
				<VStack
					width={'40px'}
					bg='#F2F4FE'
					borderRadius={'10px'}
					p='8px'
					fontSize='sm'
					fontWeight={'bold'}
				>
					<CaretUp weight='bold' color='#4661E6' />
					112
				</VStack>
			</VStack>
			<VStack flex={1} alignItems={'start'} gap={0}>
				<div className='font-bold text-lg text-[#3A4374]'>
					Add tags for solutions
				</div>
				<div className='text-[#647196]'>
					Easier to search for solutions based on a specific stack.{' '}
				</div>
				<HStack flexWrap={'wrap'} gapX={'8px'} mt='5'>
					<Badge>Enhancement</Badge>
				</HStack>
				<HStack
					justifyContent={'space-between'}
					mt='5'
					className='!flex md:!hidden w-full'
				>
					<HStack
						bg='#F2F4FE'
						borderRadius={'10px'}
						p='8px'
						fontSize='sm'
						fontWeight={'bold'}
					>
						<CaretUp weight='bold' color='#4661E6' />
						112
					</HStack>
					<HStack>
						<ChatCircle weight='fill' color='#CDD2EE' /> 2
					</HStack>
				</HStack>
			</VStack>
			<VStack justifyContent={'center'} className='!hidden md:!flex'>
				<HStack>
					<ChatCircle weight='fill' color='#CDD2EE' /> 2
				</HStack>
			</VStack>
		</HStack>
	);
}
