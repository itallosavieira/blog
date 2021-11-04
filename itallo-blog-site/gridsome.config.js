module.exports = {
  siteName: 'itallo',
  siteDescription: 'Whoaaa... this is my blog',
  plugins: [{
    use: '@gridsome/source-filesystem',
    options: {
      path: './posts/**/*.md',
      typeName: 'Post'
    }
  }],
  templates: {
    Post: "/post/:title"
  }
}
