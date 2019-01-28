<style lang="postcss">
</style>
<template>
  <div>
    <!-- {{ info }} -->
    <!-- <i /> -->
    <IconStatus :icon="info.icon" :status="info.color"/>
  </div>
</template>

<script>
import IconStatus from '@/components/Icon/IconStatus'

const ICON_LIST = [
  {
    color: 'success',
    status: 'SUCCESS',
    icon: 'el-icon-success'
  },
  {
    color: 'danger',
    status: 'FAILURE',
    icon: 'el-icon-error'
  }
]

export default {
  components: { IconStatus },

  props: {
    status: {
      type: [String, Number],
      default: ''
    }
  },

  computed: {
    info() {
      return ICON_LIST.find(_ => _.status === this.status)
    }
  }
}
</script>
