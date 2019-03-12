<template>
  <yd-card title="TOP10 攻击类型">
    <ve-chart
      height="300px"
      :data="chart.data"
      :settings="chart.settings"
      theme-name="yundun"
      :legend-visible="false"
    ></ve-chart>
  </yd-card>
</template>

<script>
import create from 'common/utils/create-basic'

export default create({
  name: 'CardAttackLine',

  data() {
    return {
      loading: true,
      chart: {
        data: {
          columns: [],
          row: []
        },
        settings: {
          type: 'pie'
        }
      },
      params: {}
    }
  },

  created() {
    this.init()
  },

  methods: {
    async init() {
      const params = this.params
      this.loading = true
      const data = await this.Fetch.get('V4/Web.Domain.Report.Hwws.wafAttackNameTop10', params)
      console.log(data)
      this.loading = false
    }
  }
})
</script>
