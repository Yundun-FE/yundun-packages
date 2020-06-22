<template>
  <ConsolePageLayout :tabs="navbar">
    <router-view />
  </ConsolePageLayout>
</template>

<script>
export default {
  data() {
    return {
      navbar: [
        {
          name: 'list'
        },
        {
          name: 'setting'
        }
      ]
    }
  }
}
</script>
