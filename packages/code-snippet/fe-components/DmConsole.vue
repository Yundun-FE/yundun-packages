<template>
  <page
    :loading="loading"
  >
    <DmConsole
      ref="DmConsole"
      :data="list"
      :columns="columns"
      :actions="actions"
      :multiple-selection.sync="multipleSelection"
      class="padding"
      @init="init"
      @action="handleAction"
    />
  </page>
</template>

<script>
import createCudr from '@/utils/create-cudr'

export default createCudr({
  pageName: 'dashboard-build',
  API_NAME: 'jobs'
})
</script>
