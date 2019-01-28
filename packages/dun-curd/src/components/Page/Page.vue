<style lang="postcss">
.Page {
  min-height: calc(100vh - 64px);

  &-header {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  .padding {
    padding: 20px 30px;
  }
}
</style>
<template>
  <div
    v-loading="loading"
    :class="b([type])"
    element-loading-background="rgba(0, 0, 0, 0)"
  >
    <HeaderBreadcrumb v-if="breadcrumb" />
    <!-- <el-alert
      title="成功提示的文案"
      type="success"/> -->
    <div
      v-if="$slots.header"
      class="page-header"
    >
      <slot name="header" />
    </div>
    <slot />
  </div>
</template>

<script>
import create from '@/utils/create-basic'

export default create({
  name: 'Page',
  components: {},
  props: {
    loading: Boolean,
    breadcrumb: Boolean,
    type: {
      type: String,
      default: ''
    }
  },

  data() {
    return {}
  },

  computed: {},

  methods: {}
})
</script>
