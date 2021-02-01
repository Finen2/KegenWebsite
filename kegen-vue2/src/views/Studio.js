export default {
  name: 'studio',
  methods: {
    async getContent(){
      const data = await this.$prismic.client.getSingle('homepage');
      console.log(data);
    }
  },
  created() {
    this.getContent();
  }
};
