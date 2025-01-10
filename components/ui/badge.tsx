import { BadgeProps, Badge as ChakraBadge } from '@chakra-ui/react';

interface IBadge extends BadgeProps {
	active?: boolean;
}

export default function Badge({ active, ...props }: IBadge) {
	return (
		<ChakraBadge
			background={active ? '#4661E6' : '#F2F4FF'}
			color={active ? '#fff' : '#4661E6'}
			py={'5px'}
			px={'16px'}
			fontWeight={'semibold'}
			fontSize={'13px'}
			borderRadius={'10px'}
			{...props}
		/>
	);
}
