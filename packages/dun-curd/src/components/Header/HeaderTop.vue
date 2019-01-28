<style lang="postcss">
.HeaderTop {
  background: #fff;
  padding: 20px 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &__core {
    display: flex;
    align-items: center;
    flex: 0 0 auto;
  }

  &__icon {
    margin-right: 20px;

    .iconfont {
      display: inline-block;
      font-size: 64px;
      width: 64px;
      height: 64px;
      line-height: 64px;
      color: rgb(89, 95, 105);
      text-align: center;
    }
  }

  &__body {
    flex: 1;
  }

  &__title {
    font-size: 21px;
    line-height: 1;
    margin: 0 0 10px;
    color: #595f69;
    font-weight: 500;
  }

  &__info {
    font-size: 14px;
  }

  &__tab {
    border-top: 1px solid rgba(0,0,0,.1);
    margin-top: 20px;
    margin-left: -30px;
    margin-right: -30px;
    margin-bottom: -20px;
    background: rgb(252, 252, 252);
    .el-tabs__nav-wrap{
      padding: 0 30px;
    }
    .el-tabs__header{
      margin-bottom: 0px;
    }
    .el-tabs__active-bar{
      height: 3px;
    }
  }
}
</style>

<template>
  <div :class="b()">
    <div :class="b('core')">
      <div :class="b('icon')">
        <i class="iconfont icon-yundun" />
      </div>
      <div :class="b('body')">
        <h1 :class="b('title')">
          <slot name="title" />
          {{ title }}
        </h1>
        <div :class="b('info')">
          <slot name="info" />
        </div>
      </div>

      <div :class="b('action')">
        <slot name="action"/>
      </div>
    </div>
    <div :class="b('tab')">
      <slot />
    </div>
  </div>
</template>

<script>
import create from 'common/utils/create-basic'

export default create({
  name: 'HeaderTop',

  components: {},

  props: {
    title: {
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
