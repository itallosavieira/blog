<template>
	<div>
		<header class="header">
			<h1 class="logo">
				<g-link to="/">Itallo.</g-link>
			</h1>
			<nav class="nav">
				<g-link class="nav__link" to="/">Home</g-link>
				<g-link class="nav__link" to="/projects/">Projects</g-link>
				<g-link class="nav__link" to="/about">About</g-link>
			</nav>
		</header>
	</div>
</template>

<script>
export default {
	name: "the-header",
};
</script>

<style scoped>
.header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}

.logo {
	font-family: "Poppins", sans-serif;
}

.nav {
	display: flex;
	gap: 2rem;
}

.nav__link {
	font-weight: 500;
}
</style>
