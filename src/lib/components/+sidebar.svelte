<script lang="ts">
	import { sidebarItems } from '$lib/data/sidebar';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	function getPath(href?: string): string {
		if (!href) return '#';
		const normalized = href.startsWith('/') ? href : `/${href}`;
		return resolve(normalized as any);
	}
</script>

<nav>
	<ul>
		{#each sidebarItems as navItem}
			{#if navItem.type === 'group'}
				<details>
					<summary>{navItem.label}</summary>
					<ul>
						{#each navItem.children as navGroupChild}
							{@const resolvedHref = getPath(navGroupChild.href)}
							<li>
								<a
									href={resolvedHref}
									aria-current={page.url.pathname === resolvedHref ? 'page' : undefined}
								>
									{navGroupChild.label}
								</a>
							</li>
						{/each}
					</ul>
				</details>
			{:else if navItem.type === 'item'}
				{@const resolvedHref = getPath(navItem.href)}
				<li>
					<a
						href={resolvedHref}
						aria-current={page.url.pathname === resolvedHref ? 'page' : undefined}
					>
						{navItem.label}
					</a>
				</li>
			{/if}
		{/each}
	</ul>
</nav>
