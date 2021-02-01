export default {
  name: 'books',
  methods: {
    async getContent(){
      // const data = await this.$prismic.client.query('').then((response) => {
      //   // response is the response object, response.results holds the documents
      //   console.log(response);
      // });
      await this.$prismic.client.query(this.$prismic.Predicates.at('document.type', 'bookspage')).then((response) => {
        // response is the response object, response.results holds the documents
        console.log(response);
      });
    }
  },
  created() {
    this.getContent();
  }
}
