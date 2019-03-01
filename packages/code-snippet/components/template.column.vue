<template>
  <div :class="b()"></div>
</template>

<script>
import create from '@/utils/create-basic'
import column from '@/mixins/column'

export default create({
  name: 'Column',

  mixins: [column]
})
</script>
