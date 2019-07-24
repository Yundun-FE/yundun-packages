<template>
  <a-card v-loading="loading">
    <el-form
      style="margin-top: 32px"
      label-width="180px"
      label-position="right"
    >
      <el-form-item label="名称">
        <el-input
          v-model="form.title"
          style="width: 280px"
        />
      </el-form-item>
    </el-form>
    <el-form
      label-width="180px"
      label-position="right"
      style="margin-top: 32px"
    >
      <el-form-item>
        <el-button
          :loading="loadingSubmit"
          icon="el-icon-s-promotion"
          type="primary"
          style="margin-right: 12px; width: 120px"
          @click="handleSubmit"
        >保存</el-button>
        <router-link to="/goods/list">
          <el-button>返回</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </a-card>
</template>

<script>
import consoleEdit from '@/mixins/consoleEdit'

export default {
  mixins: [consoleEdit],

  data() {
    return {
      formDefault: {
        title: '',
      }
    }
  },

  activated() {
    this.mode = this.$route.params.id ? 'Edit' : 'Create'
  },

  methods: {
    async fetchInfo() {
      if (this.mode === 'Edit') {
        return await this.Fetch.get(`/${this.$route.params.id}`)
      } else {
        return {}
      }
    },

    initData(form) {

    },

    async fetchSubmit() {
      const data = this.form
      const form = {
        title: data.title,
      }

      if (this.mode === 'Create') {
        await this.Fetch.post(``, form)
        this.$router.push('/')
      } else {
        await this.Fetch.put(`/${this.$route.params.id}`, form)
        this.$router.push('/')
      }
    }
  }
}
</script>
