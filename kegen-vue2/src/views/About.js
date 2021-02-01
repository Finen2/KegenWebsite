export default {
  name: 'about',
  methods: {
    async getContent(){
      const data = await this.$prismic.client.getSingle('aboutpage');
      console.log(data);
    }
  },
  created() {
    this.getContent();
  }
}
