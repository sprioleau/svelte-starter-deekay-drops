<footer>
	<ul class="text-muted">
		<li><a href="https://github.com/sprioleau/deekay-drops-svelte">source</a></li>
		<li>created by <a href="https://github.com/sprioleau">@sprioleau</a></li>
	</ul>
</footer>

<style>
	footer {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem 2rem;
		background-color: rgba(var(--accent-1-rgb), 0.1);
		color: var(--white);
		height: var(--footer-height);
	}

	ul {
		display: flex;
	}

	li:not(:last-child) {
		margin-right: 0.5rem;
	}
</style>
