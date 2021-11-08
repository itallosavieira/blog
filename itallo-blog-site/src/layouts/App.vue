<template>
	<div class="layout">
		<TheHeader />
		<slot />
	</div>
</template>

<script>
import TheHeader from "~/components/TheHeader.vue";

export default {
	components: {
		TheHeader,
	},
};
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css";
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700&display=swap");

body {
	font-family: "Heebo", sans-serif;
	font-weight: 400;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

h1,
h2 {
	font-weight: 700;
}

h3,
h4,
h5,
h6 {
	font-weight: 500;
}

a {
	color: inherit;
	text-decoration: inherit;
}

.layout {
	max-width: 768px;
	margin: 0 auto;
}
</style>
