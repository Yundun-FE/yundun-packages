<template>
  <yd-card title="">
    <DmData
      :inner-card="false"
      ref="dmData"
      @init="init"
    >
      <yd-table
        :class="b()"
        :loading="loading"
      >
        <el-table :data="list">
        </el-table>
      </yd-table>
    </DmData>
  </yd-card>
</template>

<script>
import create from 'common/utils/create-basic'
import Fetch from 'common/api/fetch'
import DmData from 'common/components/DmData/DmData'
import { formatList, mergeParams } from 'common/utils/response'

export default create({
  name: '',

  components: {
    DmData
  },

  data() {
    return {
      loading: true,
      list: [],
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
