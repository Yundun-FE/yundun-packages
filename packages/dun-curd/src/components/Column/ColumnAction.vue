<style lang="postcss">
.ColumnAction{
  &__item{
    margin-right: 8px;

    &:last-child{
      margin-right: 0px;
    }
  }
}
</style>

<template>
  <div :class="b()">
    <span
      v-for="(item, index) in list"
      :class="b('item')"
      :key="index"
    >
      <el-dropdown
        v-if="item.items"
        :size="size"
        split-button
        trigger="click"
        @click="handleClick({command: item.command, scope, settings: item})"
        @command="handleClick"
      >
        {{ item.label }}
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="(item, index) in item.items"
            :key="index"
            :command="{command: item.command, scope, settings: item}"
          >{{ item.label }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button
        v-else
        :size="size"
        :type="item.type"
        @click="handleClick({command: item.command, scope, settings: item})"
      >{{ item.label }}</el-button>
    </span>
  </div>
</template>

<script>
import create from 'common/utils/create-basic'

export default create({
  name: 'ColumnAction',

  props: {
    size: {
      type: String,
      default: 'medium'
    },
    list: {
      type: Array,
      default: () => []
    },
    scope: {
      type: Object,
      default: () => { }
    }
  },

  data() {
    return {
    }
  },

  methods: {
    handleClick(e) {
      e.mode = 'Row'
      this.$emit('action', e)
    }
  }
})
</script>
