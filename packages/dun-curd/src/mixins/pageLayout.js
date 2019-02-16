import Fetch from '../utils/fetch'

export default {
  data() {
    return {
      columns: [],
      actionsRow: [],
      actionsToolbar: [],
      settings: {},
      layoutFinish: false
    }
  },

  mounted() {
    this.initPageLayout()
  },

  methods: {
    async initPageLayout() {
      const data = await Fetch.get(`/explorer/pages/${this.pageName}`)
      const block = data.content.find(_ => _.blockName === 'DmConsole')

      this.columns = block.props.columns
      this.actionsRow = block.props.actionsRow
      this.actionsToolbar = block.props.actionsToolbar
      this.layoutFinish = true
      this.checkFinish()
    }
  }
}
