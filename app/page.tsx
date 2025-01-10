'use client';
import SuggestionCard from '@/components/cards/suggestion-card';
import Main from '@/components/layout/main';
import PageHeader from '@/components/layout/page-header';
import Sidebar from '@/components/layout/sidebar';
import { Button } from '@/components/ui/button';
import Menu from '@/components/ui/menu';
import { HStack, VStack } from '@chakra-ui/react';
import { CaretDown, Plus } from '@phosphor-icons/react';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<Sidebar />
			<Main>
				<VStack className='gap-y-0 md:gap-y-6' alignItems='stretch'>
					<PageHeader
						left={
							<Image
								src={'/images/bulb.png'}
								height={24}
								width={23}
								alt='Bulb'
							/>
						}
						title='4 Suggestions'
						right={
							<Button>
								<Plus weight='bold' /> Add Feedback
							</Button>
						}
					>
						<Menu>
							<HStack className='text-sm'>
								Sort by:{' '}
								<div className='font-bold'>Most Upvotes</div>{' '}
								<CaretDown weight='bold' />
							</HStack>
						</Menu>
					</PageHeader>
					<VStack
						gapY={'20px'}
						alignItems='stretch'
						className='p-8 md:p-0'
					>
						<SuggestionCard />
						<SuggestionCard />
						<SuggestionCard />
						<SuggestionCard />
					</VStack>
				</VStack>
			</Main>
		</>
	);
}
