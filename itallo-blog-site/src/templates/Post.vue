<template>
  <Layout>
    <header class="title">
      <h1>{{ $page.post.title }}</h1>
    </header>
    <main class="content" v-html="$page.post.content"></main>
  </Layout>
</template>

<page-query>
	query Post($path: String!) {
		post: post(path: $path) {
			id 
			title 
			path
			content
		}
	}
</page-query>

<style scoped>
.title {
  text-align: center;
}
</style>