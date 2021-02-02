<template>
  <Layout>

    <!-- Main Content -->
    <div class="container">
      <div class="hero">
        <h1 class="hero-title">{{general.title}}</h1>
        <h2 class="hero-subtitle">{{general.subTitle}}</h2>
      </div>
      <div class="projects">
        <div class="project">
          <a href="/projects/chelsea-landmark/" class="project-link">
            <img class="thumbnail g-image g-image--lazy g-image--loaded"
                 alt="Banana"
                 src="../../static/img/banana.jpg"
                 width="2560">
            <h3 class="project-title">Banana</h3>
            <div class="categories">
              <span class="category">photography</span>
              <span class="category">pink</span>
            </div>
          </a>
        </div>
        <div class="project"><a href="/projects/sunk/" class="project-link">
            <img alt="Pineapple" src="../../static/img/pineapple.jpg"
                 data-sizes="(max-width: 2560px) 100vw, 2560px"
                 class="thumbnail g-image g-image--lazy g-image--loaded">
            <h3 class="project-title">Pineapple</h3>
            <div class="categories"><span class="category">photography</span>
              <span class="category">blue</span>
            </div>
          </a>
        </div>
        <div class="project"><a href="/projects/3d-graff/" class="project-link">
            <img alt="Ice Cream" src="../../static/img/ice-cream.jpg" width="2560"

                 class="thumbnail g-image g-image--lazy g-image--loaded"

                 sizes="(max-width: 2560px) 100vw, 2560px">
            <h3 class="project-title">Ice Cream</h3>
            <div class="categories"><span class="category">photography</span>
              <span class="category">yellow</span>
            </div>
          </a></div>
        <div class="project"><a href="/projects/ios-concept/" class="project-link">
            <img alt="Porta400" src="../../static/img/porta400.jpg" class="thumbnail g-image g-image--lazy g-image--loaded">

            <h3 class="project-title">Porta400</h3>
            <div class="categories">
              <span class="category">photography</span>
              <span class="category">yellow</span>
            </div>
          </a></div>
      </div>
    </div>
    <div>
      <div class="latest-journals-heading container"><span class="label">Latest and greatest</span></div>
      <div class="latest-journals">
        <div class="container">
          <g-link :to="'/post/'+item.node.id" class="journal" v-for="(item,index) in $page.posts.edges" :key="index">
            <h3 class="journal-title">{{item.node.title}}</h3>
          </g-link>
          <!-- <a href="/journal/gridsome-forestry-cms/" class="journal">
            <h3 class="journal-title">Gridsome with Forestry CMS</h3>
          </a>
          <a href="/journal/use-gridsome-vuejs/" class="journal">
            <h3 class="journal-title">VueJS for your next project</h3>
          </a>
          <a href="/journal/macos-development-environment/" class="journal">
            <h3 class="journal-title">macOS development environment</h3>
          </a>
          <a href="/journal/a-journal-entry/" class="journal">
            <h3 class="journal-title">About Typography</h3>
          </a> -->
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query{
  posts: allStrapiPost{
    edges{
      node{
        id
        title
      }
    }
  }

  general:allStrapiGeneral{
    edges{
      node{
        id
        title
        subTitle
      }
    }
  }

}
</page-query>

<script>
import { Pager } from 'gridsome';
export default {
  metaInfo: {
    title: 'Hello, world!',
  },
  name: 'HomePage',
  components: {
    Pager
  },
  computed:{
    general(){
      return this.$page.general.edges[0].node
    }
  }
}
</script>

<style>
</style>
