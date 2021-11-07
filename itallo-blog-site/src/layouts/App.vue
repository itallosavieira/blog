<template>
	<div class="layout">
		<header class="header">
			<h1>
				<g-link to="/">Itallo.</g-link>
			</h1>
			<nav class="nav">
				<g-link class="nav__link" to="/">Blog</g-link>
				<g-link class="nav__link" to="/projects/">Projetos</g-link>
				<g-link class="nav__link" to="/about">Sobre</g-link>
			</nav>
		</header>
		<slot />
		<the-footer></the-footer>
	</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Poppins:wght@600;700&display=swap');

body {
	font-family: 'Inter', sans-serif;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6 {
	font-family: 'Poppins', sans-serif;
}

.layout {
	max-width: 768px;
	margin: 0 auto;
}
</style>
