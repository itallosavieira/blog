<template>
  <header class="header">
    <strong>
      <g-link to="/">{{ $static.metadata.siteName }}</g-link>
    </strong>
    <nav class="nav">
      <g-link class="nav__link" to="/">Blog</g-link>
      <g-link class="nav__link" to="/projects/">Projetos</g-link>
      <g-link class="nav__link" to="/about">Sobre</g-link>
    </nav>
  </header>
</template>

<style scoped>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
