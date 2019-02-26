<template>
  <console-page-layout
    :class="b()"
    title=""
  >
    <NavbarPage
      slot="header"
      :data="navbar"
    />
    <router-view/>
  </console-page-layout>
</template>

<script>
import create from '@/utils/create-basic'

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
