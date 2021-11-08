<template>
	<Layout>
		<h2>Blog</h2>
		<g-link
			v-for="post in $page.posts.edges"
			:key="post.id"
			class="post"
			:to="post.node.path"
		>
			<div class="post">
				<h3 class="post__title">
					{{ post.node.title }}
				</h3>
				<div class="post__info">
					<span class="post__date"> {{ post.node.date }} </span>
					<span class="post__sep"> | </span>
					<span class="post__category">{{ post.node.category }}</span>
				</div>
				<p class="post__resume">
					{{ post.node.resume }}
				</p>
			</div>
			<hr class="post__line" />
		</g-link>
	</Layout>
</template>

<page-query>
	query {
		posts: allPost {
			edges {
				node {
					id
					title
					date(format: "DD MMM YYYY")
					category
					resume
					path
				}
			}
		}
	}
</page-query>

<style scoped>
</style>
