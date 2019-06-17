<template>
  <DmCudr
    ref="DmCudr"
    :columns="columns"
    :loading="loading"
    :data="list"
  >
    <template
      slot="name"
      slot-scope="{text, record}"
    >
      <!--  -->
    </template>
  </DmCudr>
</template>

<script>
import consoleData from '@/mixins/consoleData'

export default {
  mixins: [consoleData],

  data() {
    return {
      API_INDEX: 'v2/jobs',
      bindParams: {
        pageSize: 100
      },
      columns: [
        {
          title: '名称',
          dataIndex: 'name',
          scopedSlots: { customRender: 'name' }
        },
      ]
    }
  },

  created() {
    this.fetchList()
  }
}
</script>
