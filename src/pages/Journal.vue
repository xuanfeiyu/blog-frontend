<template>
  <Layout>
    <div class="container">
      <div class="journal-hero">
        <h1 class="journal-header">
          a wise person once said...
        </h1>
      </div>
    </div>
    <g-link :to="'/post/'+item.node.id" class="journal-post" v-for="(item,index) in $page.posts.edges" :key="index">
      <div class="container journal">
        <h2 class="journal-title">{{item.node.title}}</h2>
        <p class="journal-excerpt">{{item.node.subTitle}}</p>
      </div>
    </g-link>
    <!-- <a href="/journal/gridsome-forestry-cms/" class="journal-post">
      <div class="container journal">
        <h2 class="journal-title">Gridsome with Forestry CMS</h2>
        <p class="journal-excerpt">Get up and running with Forestry CMS, a git-backed headless CMS with a slick editing interface.</p>
      </div>
    </a>
    <a href="/journal/use-gridsome-vuejs/" class="journal-post">
      <div class="container journal">
        <h2 class="journal-title">VueJS for your next project</h2>
        <p class="journal-excerpt">Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.</p>
      </div>
    </a>
    <a href="/journal/macos-development-environment/" class="journal-post">
      <div class="container journal">
        <h2 class="journal-title">macOS development environment</h2>
        <p class="journal-excerpt">Get up and running with a fresh macOS Catalina install</p>
      </div>
    </a>
    <a href="/journal/a-journal-entry/" class="journal-post">
      <div class="container journal">
        <h2 class="journal-title">About Typography</h2>
        <p class="journal-excerpt">Font face, vertical rythm, readability, this long fake text should flow.</p>
      </div>
    </a> -->
  </Layout>
</template>
<page-query>
query{
  posts: allStrapiPost{
    edges{
      node{
        id
        title
        subTitle
        created_at
      }
    }
  }
}
</page-query>
<script>
export default {
  name: 'JournalPage',
  metaInfo: {
    title: 'Journal'
  }
}
</script>
