interface NavItemGroup {
	type: 'group';
	label: string;
	children: NavItem[];
}

interface NavItem {
	type: 'item';
	label: string;
	href?: string;
}

export type SidebarItem = NavItem | NavItemGroup;
