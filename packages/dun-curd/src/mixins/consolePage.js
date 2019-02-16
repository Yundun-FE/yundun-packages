export default {
  data() {
    return {
      list: [],
      loading: true,
      dataFinish: false
    }
  },

  methods: {
    init(params) {
      this.fetchData(`/${this.API_NAME}`, {
        ...params,
        ...this.$route.params
      })
    },

    formatResponse(data) {
      return data
    },

    checkFinish() {
      if (this.dataFinish && this.layoutFinish) {
        this.$refs.DmConsole.handleShow()
        this.loading = false
      }
    },
    // 读取数据
    async fetchData(url, params) {
      this.loading = true
      const response = await this.Fetch.get(url, params)
      const { list, total } = this.formatResponse(response)
      this.$refs.DmConsole.updateTotal(total)

      this.list = list
      this.dataFinish = true
      this.checkFinish()
    }
  }
}
