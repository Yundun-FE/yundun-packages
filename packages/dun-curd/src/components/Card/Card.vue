<style lang="scss">
.Card {
  position: relative;
  background: #fff;
  border: 1px solid #e4e7ed;
  border-bottom-width: 0;
  border-radius: 4px;
  box-shadow: 0 1px 4px 0 rgba(204, 209, 217, 0.3);

  &--action {
    .Card {
      &__header {
        padding: 8px 22px;
        background: rgb(244, 246, 249);
      }

      &__body {
        padding: 24px;
      }

      &__footer {
        background: rgb(244, 246, 249);
        overflow: hidden;
        padding: 12px 24px;
      }
    }
  }

  h2.Card__title {
    font-weight: 500;
    color: rgb(47, 48, 51);
    margin: 0px;
    font-size: 18px;
    line-height: 38px;
  }

  &__body {
    clear: both;
    height: 100%;
  }

}
</style>

<template>
  <div :class="b([theme])">
    <div
      v-if="$slots.header || title"
      :class="b('header')"
    >
      <h2
        v-if="title"
        :class="b('title')"
      >{{ title }}</h2>
      <slot name="header" />
    </div>
    <div :class="b('body')">
      <slot />
    </div>
    <div
      v-if="$slots.footer"
      :class="b('footer')"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
import create from '../../utils/create-basic'

export default create({
  name: 'Card',

  components: {},

  props: {
    title: String,
    theme: {
      type: String,
      default: ''
    }
  },

  data() {
    return {}
  },

  computed: {},

  methods: {}
})
</script>
