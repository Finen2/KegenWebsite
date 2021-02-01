// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data: () => ({
    pageTitle : {},
    homepageImage: {},
    introductionText: {},
  }),
  methods: {
    async getContent(){
      const data = await this.$prismic.client.getSingle('homepage');
      console.log(data);
      this.pageTitle = data.data.pagetitle[0];
      this.homepageImage = data.data.homepageimage;
      this.introductionText = data.data.introductiontext[0];

      console.log(this.homepageImage);
    }
  },
  created() {
    this.getContent();
  }
}
