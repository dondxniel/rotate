import { BadgeProps, Badge as ChakraBadge } from '@chakra-ui/react';

interface IBadge extends BadgeProps {
	active?: boolean;
}

export default function Badge({ active, className, ...props }: IBadge) {
	return (
		<ChakraBadge
			background={active ? '#4661E6' : '#F2F4FF'}
			color={active ? '#fff' : '#4661E6'}
			py={'5px'}
			px={'16px'}
			fontWeight={'semibold'}
			fontSize={'13px'}
			borderRadius={'10px'}
			_hover={{ background: '#CFD7FF' }}
			className={`transition-all duration-300 cursor-pointer ${className}`}
			{...props}
		/>
	);
}
