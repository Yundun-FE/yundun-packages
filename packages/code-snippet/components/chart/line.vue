<template>
  <yd-card
    :loading="loading"
    title=""
  >
    <Chart
      :loading="false"
      :data="data"
      :settings="settings"
      height="350px"
    />
  </yd-card>
</template>

<script>
import chartMixins from '@/mixins/chart'
import Chart from '@/components/Chart/Chart'
import { formatData, tooltipAlone } from '@/utils/chart'

export default {
  components: {
    Chart
  },

  mixins: [chartMixins],

  data() {
    return {
      API_URI: 'GET V4/dns.hijack.event.log.line Dns',
      settings: {
        type: 'line'
      }
    }
  },

  methods: {
    async init(params) {
      const data = await this.fetchData(params)
      const unit = data.trend && data.trend.y_data ? data.trend.y_data.unit : ''
      this.settings.yAxisName = [`单位（${unit}）`]
      this.data = formatData(data.trend, ['时间', '劫持次数'])
      this.data.tooltip = tooltipAlone(unit)
    }
  }
}
</script>
