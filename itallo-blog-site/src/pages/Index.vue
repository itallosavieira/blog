<template>
	<Layout>
		<h1>{{ $static.metadata.siteName }}</h1>
		<h2>Blog</h2>
		<g-link
			v-for="post in $page.posts.edges"
			:key="post.id"
			class="post"
			:to="post.node.path"
		>
			<div class="post">
				<h3>
					{{ post.node.title }}
				</h3>
			</div>
		</g-link>
	</Layout>
</template>



<static-query>
	query {
		metadata {
			siteName
		}
	}
</static-query>

<page-query>
	query {
		posts: allPost {
			edges {
				node {
					id
					title
					path
				}
			}
		}
	}
</page-query>

<style scoped>
</style>
