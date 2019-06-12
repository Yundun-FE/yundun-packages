<template>
  <console-page-layout>
    <NavbarPage
      slot="header"
      :data="navbar"
    />
    <router-view />
  </console-page-layout>
</template>

<script>
export default {
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
}
</script>
