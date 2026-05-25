import type { SidebarItem } from '$lib/types/sidebar';

export const sidebarItems: SidebarItem[] = [
	{ type: 'item', label: 'Home', href: '/' },
	{ type: 'group', label: 'Abuse Prevention Systems', children: [] },
	{ type: 'group', label: 'API Design', children: [] },
	{ type: 'group', label: 'Caching', children: [] },
	{ type: 'group', label: 'Communication Patterns', children: [] },
	{ type: 'group', label: 'Compression', children: [] },
	{ type: 'group', label: 'Data Distribution', children: [] },
	{ type: 'group', label: 'Data Locality', children: [] },
	{ type: 'group', label: 'Data Systems', children: [] },
	{ type: 'group', label: 'Database Architecture Patterns', children: [] },
	{ type: 'group', label: 'Debugging Systems', children: [] },
	{ type: 'group', label: 'Distributed Coordination Systems', children: [] },
	{ type: 'group', label: 'Edge Systems', children: [] },
	{ type: 'group', label: 'Event Systems', children: [] },
	{ type: 'group', label: 'Global Infrastructure', children: [] },
	{ type: 'group', label: 'Messaging, Streaming', children: [] },
	{
		type: 'group',
		label: 'Networking',
		children: [
			{
				type: 'item',
				label: 'DNS Resolution',
				href: 'content/networking/dns-resolution'
			}
		]
	},
	{ type: 'group', label: 'Observability', children: [] },
	{ type: 'group', label: 'Orchestration Systems', children: [] },
	{ type: 'group', label: 'Ranking Systems', children: [] },
	{ type: 'group', label: 'Real-Time Systems', children: [] },
	{ type: 'group', label: 'Scalability', children: [] },
	{ type: 'group', label: 'Scheduling', children: [] },
	{ type: 'group', label: 'Search, Indexing', children: [] },
	{ type: 'group', label: 'Security', children: [] },
	{ type: 'group', label: 'Storage Engines', children: [] },
	{ type: 'group', label: 'Storage Optimization', children: [] }
];
