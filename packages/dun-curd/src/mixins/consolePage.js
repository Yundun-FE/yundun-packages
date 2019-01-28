import Fetch from '@/utils/fetch'

export default {
  data() {
    return {
      Fetch,
      columns: [],
      actions: {},
      list: [],
      loading: true,
      layoutFinish: false,
      dataFinish: false
    }
  },

  created() {
    setTimeout(() => {
      this.initPageLayout()
    }, 50)
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

    async initPageLayout() {
      const data = await Fetch.get(`/explorer/pages/${this.pageName}`)
      this.columns = data.content.columns
      this.actions = data.content.actions
      this.layoutFinish = true
      this.checkFinish()
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
