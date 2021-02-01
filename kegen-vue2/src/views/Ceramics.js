export default {
  name: 'ceramics',
  methods: {
    async getContent(){
      const data = await this.$prismic.client.getSingle('homepage');
      console.log(data);
    }
  },
  created() {
    this.getContent();
  }
}
