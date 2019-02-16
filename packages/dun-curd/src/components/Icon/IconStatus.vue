<template>
  <div :class="['iconStatus--' + status, icon]" class="iconStatus" />
</template>

<script>
const NAME = 'yd-icon-status'

export default {
  name: NAME,
  props: {
    icon: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.iconStatus {
  display: inline-block;
  font-size: 12px;

  &--success {
    color: var(--color-success);
  }

  &--warning {
    color: var(--color-warning);
  }

  &--primary {
    color: var(--color-primary);
  }

  &--danger {
    color: var(--color-danger);
  }

  &--info {
    color: var(--color-info);
  }
}
</style>
