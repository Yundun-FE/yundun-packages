<style lang="postcss">
.Dialog {
  .el-dialog {
    border-radius: 0px !important;

    &__header {
      text-align: left !important;
      border-bottom: 1px solid #eee;
      padding: 16px;

    }

    &__body {
      padding: 16px;
    }

    &__footer {
      overflow: hidden;
      padding: 20px;
    }
  }

  .el-form-item {
    &__label {
      font-size: 13px;
    }
  }
}
</style>

<template>
  <el-dialog
    :width="width"
    :close-on-click-modal="closeOnClickModal"
    :title="title"
    :visible.sync="open"
    :center="center"
    class="Dialog"
    @close="handleClose"
  >
    <slot/>
    <div slot="footer">
      <!-- <slot name="footer"/> -->
      <el-button
        @click="handleClose"
      >取消</el-button>
      <el-button
        type="primary"
        @click="handleSubmit"
      >保存</el-button>
    </div>
  </el-dialog>
</template>

<script>
/*
+-----------------------------------------------------------------------------------------------------------------------
| Yundun
+-----------------------------------------------------------------------------------------------------------------------
| yd-dialog
| 弹框组件，支持 aside
*/

export default {
  name: 'Dialog',

  props: {
    center: {
      type: Boolean,
      default: true
    },
    title: String,
    visible: Boolean,
    width: [String, Number],
    closeOnClickModal: Boolean
  },

  data() {
    return {
      open: this.visible
    }
  },

  watch: {
    visible(val) {
      this.open = val
    }
  },

  methods: {
    handleSubmit() {
      this.$emit('submit')
    },

    handleClose() {
      this.$emit('update:visible', false)
    }
  }
}
</script>
