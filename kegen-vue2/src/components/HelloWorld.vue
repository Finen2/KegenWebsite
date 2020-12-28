<template>
  <div class="hello">
    <h1>{{ fields.pageTitle }}</h1>
    <prismic-image :field="fields.logo"/>
    <prismic-rich-text :field="fields.richContent"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fields: {
        pageTitle: null,
        logo: null,
        richContent: null
      }
    };
  },
  methods: {
    async getContent () {
      await this.$prismic.client.getSingle('homepage')
        .then((document) => {
          this.fields.pageTitle = document.data.pageTitle;
          this.fields.logo = document.data.logo;
          this.fields.richContent = document.data.rich_content;
        })
    }
  },
  created () {
    this.getContent();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
