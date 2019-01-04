<template>
  <yd-card title="攻击趋势">
    <ChartLine
      :data="chart.data"
      :setting="chart.setting"
    ></ChartLine>
  </yd-card>
</template>

<script>
import create from 'common/utils/create-basic'
import Fetch from 'common/api/fetch'
import { formatList, mergeParams } from 'common/utils/response'
import ChartLine from 'common/components/Chart/ChartLine'

export default create({
  name: 'CardAttackLine',

  components: {
    ChartLine
  },

  data() {
    return {
      loading: true,
      chart: {
        data: {
          columns: [],
          row: []
        },
        setting: {}
      },
      params: {}
    }
  },

  methods: {
    async init(params) {
      params = params || this.$refs.dmData.getParams()
      params = mergeParams(params, this.params)
      this.loading = true
      const { list, total } = formatList(await Fetch.get('', params))
      this.$refs.dmData.init({ total })
      this.list = list
      this.loading = false
    }
  }
})
</script>
