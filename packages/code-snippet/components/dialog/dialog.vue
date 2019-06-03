<template>
  <DmDialog
    ref="Dialog"
    title=""
  >
    <!--  -->
  </DmDialog>
</template>

<script>
import consoleDialog from '@/mixins/consoleDialog'
import RULE from '@/utils/verify'

export default {
  data() {
    return {
      rules: {}
    }
  },

  methods: {
    beforeOpen() {

    }
  }
}
</script>
