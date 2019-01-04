<template>
  <console-page-layout
    :class="b()"
    title=""
  >
    <NavbarPage
      :data="navbar"
      slot="header"
    ></NavbarPage>
    <router-view></router-view>
  </console-page-layout>
</template>

<script>
import create from 'common/utils/create-basic'

export default create({
  name: 'page',

  data() {
    return {
      navbar: [
        {
          label: '扫描列表',
          to: 'list'
        },
        {
          label: '配置列表',
          to: 'setting'
        }
      ]
    }
  }
})
</script>
