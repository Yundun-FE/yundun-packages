<style lang="postcss">
.DmEdit {
  padding: 20px 30px;
  min-height: 300px;
  .Card--action {
    .Card__body {
      min-height: 300px;
    }
  }
  .BlockForm {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
}
</style>

<template>
  <div :class="b()">
    <Card theme="action">
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        label-width="120px"
      >
        <slot />
      </el-form>
      <div slot="footer">
        <el-button
          v-if="backButton"
          @click="handleBack"
        >返回</el-button>
        <div class="pull-right">
          <el-button
            type="primary"
            @click="handleSubmit"
          >保存</el-button>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import create from '../../utils/create-basic'
import form from '../../mixins/form'

export default create({
  name: 'DmEdit',

  mixins: [form],

  props: {
    backButton: Boolean
  },

  provide() {
    return {
      dmForm: this
    }
  },

  methods: {
    handleBack() {
      this.$router.push({
        path: '..'
      })
    }
  }
})
</script>
