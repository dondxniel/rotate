'use client';

import {
	AbsoluteCenter,
	Button,
	Menu as ChakraMenu,
	MenuRootProps,
	Portal,
} from '@chakra-ui/react';
import * as React from 'react';
import { LuCheck, LuChevronRight } from 'react-icons/lu';

interface MenuContentProps extends ChakraMenu.ContentProps {
	portalled?: boolean;
	portalRef?: React.RefObject<HTMLElement>;
}

interface IMenuProps extends MenuRootProps {
	// children?: React.ReactNode;
}

export const MenuContent = React.forwardRef<HTMLDivElement, MenuContentProps>(
	function MenuContent(props, ref) {
		const { portalled = true, portalRef, ...rest } = props;
		return (
			<Portal disabled={!portalled} container={portalRef}>
				<ChakraMenu.Positioner>
					<ChakraMenu.Content ref={ref} {...rest} />
				</ChakraMenu.Positioner>
			</Portal>
		);
	}
);

export const MenuArrow = React.forwardRef<
	HTMLDivElement,
	ChakraMenu.ArrowProps
>(function MenuArrow(props, ref) {
	return (
		<ChakraMenu.Arrow ref={ref} {...props}>
			<ChakraMenu.ArrowTip />
		</ChakraMenu.Arrow>
	);
});

export const MenuCheckboxItem = React.forwardRef<
	HTMLDivElement,
	ChakraMenu.CheckboxItemProps
>(function MenuCheckboxItem(props, ref) {
	return (
		<ChakraMenu.CheckboxItem ref={ref} {...props}>
			<ChakraMenu.ItemIndicator hidden={false}>
				<LuCheck />
			</ChakraMenu.ItemIndicator>
			{props.children}
		</ChakraMenu.CheckboxItem>
	);
});

export const MenuRadioItem = React.forwardRef<
	HTMLDivElement,
	ChakraMenu.RadioItemProps
>(function MenuRadioItem(props, ref) {
	const { children, ...rest } = props;
	return (
		<ChakraMenu.RadioItem ps='8' ref={ref} {...rest}>
			<AbsoluteCenter axis='horizontal' left='4' asChild>
				<ChakraMenu.ItemIndicator>
					<LuCheck />
				</ChakraMenu.ItemIndicator>
			</AbsoluteCenter>
			<ChakraMenu.ItemText>{children}</ChakraMenu.ItemText>
		</ChakraMenu.RadioItem>
	);
});

export const MenuItemGroup = React.forwardRef<
	HTMLDivElement,
	ChakraMenu.ItemGroupProps
>(function MenuItemGroup(props, ref) {
	const { title, children, ...rest } = props;
	return (
		<ChakraMenu.ItemGroup ref={ref} {...rest}>
			{title && (
				<ChakraMenu.ItemGroupLabel userSelect='none'>
					{title}
				</ChakraMenu.ItemGroupLabel>
			)}
			{children}
		</ChakraMenu.ItemGroup>
	);
});

export interface MenuTriggerItemProps extends ChakraMenu.ItemProps {
	startIcon?: React.ReactNode;
}

export const MenuTriggerItem = React.forwardRef<
	HTMLDivElement,
	MenuTriggerItemProps
>(function MenuTriggerItem(props, ref) {
	const { startIcon, children, ...rest } = props;
	return (
		<ChakraMenu.TriggerItem ref={ref} {...rest}>
			{startIcon}
			{children}
			<LuChevronRight />
		</ChakraMenu.TriggerItem>
	);
});

export const MenuRadioItemGroup = ChakraMenu.RadioItemGroup;
export const MenuContextTrigger = ChakraMenu.ContextTrigger;
export const MenuRoot = ChakraMenu.Root;
export const MenuSeparator = ChakraMenu.Separator;

export const MenuItem = ChakraMenu.Item;
export const MenuItemText = ChakraMenu.ItemText;
export const MenuItemCommand = ChakraMenu.ItemCommand;
export const MenuTrigger = ChakraMenu.Trigger;

export default function Menu({ children, ...props }: IMenuProps) {
	return (
		<MenuRoot {...props}>
			<MenuTrigger asChild>
				<Button variant='outline' size='sm'>
					{children}
				</Button>
			</MenuTrigger>
			<MenuContent width={'200px'}>
				<MenuItem
					className='border-b border-b-[#3A4374]/15 py-3 hover:bg-inherit cursor-pointer hover:text-[#AD1FEA]'
					value='most-upvotes'
				>
					Most Upvotes
				</MenuItem>
				<MenuItem
					className='border-b border-b-[#3A4374]/15 py-3 hover:bg-inherit cursor-pointer hover:text-[#AD1FEA]'
					value='least-upvotes'
				>
					Least Upvotes
				</MenuItem>
				<MenuItem
					className='border-b border-b-[#3A4374]/15 py-3 hover:bg-inherit cursor-pointer hover:text-[#AD1FEA]'
					value='most-comments'
				>
					Most Comments
				</MenuItem>
				<MenuItem
					className='py-3 hover:bg-inherit cursor-pointer hover:text-[#AD1FEA]'
					value='least-comments'
				>
					Least Comments
				</MenuItem>
			</MenuContent>
		</MenuRoot>
	);
}
