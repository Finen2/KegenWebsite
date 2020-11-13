export default {
  name: 'home',
  data () {
    return {
      fields: {
        title: null,
        logo: null,
        richContent: null
      }
    };
  },
  methods: {
    async getContent(){
      // const data = await this.$prismic.client.getSingle('homepage')
      // console.log(data);
        // .then((document) => {
        //   this.fields.title = document.data.title;
        //   this.fields.logo = document.data.logo;
        //   this.fields.richContent = document.data.rich_content;
        // })
    }
  },
  created(){
    this.getContent();
  }
}
