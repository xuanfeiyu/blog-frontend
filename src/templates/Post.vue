<template>
  <Layout>
    <div class="journal">
      <div class="container journal-container">
        <div class="journal-header">
          <h1 class="journal-title">{{$page.post.title}}</h1>
          <div class="journal-meta">
            <div class="journal-author">
              <span class="label">Author</span>
              <span class="author-name">{{$page.post.author}}</span>
            </div>
            <div class="journal-date">
              <span class="label">Date</span>
              <div>{{$page.post.date}}</div>
            </div>
            <div class="journal-time">
              <span class="label">Time</span>
              <span>{{$page.post.time}}</span>
            </div>
          </div>
        </div>
        <div class="journal-content" v-html="mdToHtml($page.post.content)"></div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query ($id:ID!){
  post:strapiPost(id:$id){
    id
    title
    subTitle
    author
    date
    time
    content
  }
}
</page-query>
<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

export default {
  name: 'PostPage',
  methods:{
    mdToHtml(markdown){
      return md.render(markdown)
    }
  }
}
</script>

<style scoped>
.journal-title {
  font-size: 4rem;
  margin: 0 0 4rem;
  padding: 0;
}
</style>