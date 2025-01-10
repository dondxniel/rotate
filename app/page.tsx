'use client';
import SuggestionCard from '@/components/cards/suggestion-card';
import Main from '@/components/layout/main';
import PageHeader from '@/components/layout/page-header';
import Sidebar from '@/components/layout/sidebar';
import { Button } from '@/components/ui/button';
import FilterMenu from '@/components/utilities/filter-menu';
import { VStack } from '@chakra-ui/react';
import { Plus } from '@phosphor-icons/react';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<Sidebar />
			<Main>
				<VStack gapY={{ base: '0px', md: '24px' }} alignItems='stretch'>
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
						<FilterMenu />
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
