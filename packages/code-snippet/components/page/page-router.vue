<template>
  <console-page-layout
    :class="b()"
    title="网站列表"
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
import ConsolePageLayout from 'common/components/layout/console-page-layout'
import NavbarPage from 'common/components/Navbar/NavbarPage'

export default create({
  name: 'page',

  components: {
    ConsolePageLayout,
    NavbarPage
  },

  data() {
    return {
      navbar: [
        {
          label: '',
          to: ''
        }
      ]
    }
  }
})
</script>
