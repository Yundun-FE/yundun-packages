<style lang="postcss">
.HeaderBreadcrumb{
  background: #FFF;
  padding: 20px 30px;
}
</style>

<template>
  <div :class="b()">
    <el-breadcrumb
      class="app-breadcrumb"
      separator="/"
    >
      <el-breadcrumb-item
        v-for="(item,index) in levelList"
        v-if="item.meta.title"
        :key="item.path"
      >
        <span
          v-if="item.redirect===&quot;noredirect&quot;||index==levelList.length-1"
          class="no-redirect"
        >{{ item.meta.title }}</span>
        <router-link
          v-else
          :to="formatUrl(item.path)"
        >{{ item.meta.title }}</router-link>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import create from '../../utils/create-basic'

export default create({
  name: 'HeaderBreadcrumb',

  props: {
    breadcrumb: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      levelList: []
    }
  },

  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },

  methods: {
    formatUrl(url) {
      console.log(this.$route)
      const { params } = this.$route
      Object.keys(params).forEach(key => {
        url = url.replace(`:${key}`, params[key])
      })
      return url
    },

    getBreadcrumb() {
      const matched = this.$route.matched // .filter(item => item.name)
      console.log(this.$route.matched)
      this.levelList = matched
    }
  }

})
</script>
