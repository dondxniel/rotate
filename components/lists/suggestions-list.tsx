import SuggestionCard from '@/components/cards/suggestion-card';
import { VStack } from '@chakra-ui/react';

export default function SuggestionsList() {
	return (
		<VStack gapY={'20px'} alignItems='stretch' className='p-8 md:p-0'>
			<SuggestionCard />
			<SuggestionCard />
			<SuggestionCard />
			<SuggestionCard />
		</VStack>
	);
}
