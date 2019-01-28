<style lang="stylus">
.card-job {
  border-bottom: 1px solid #EEE;
  position: relative;
  overflow: hidden;
  display: flex;
  vertical-align: center;
  padding: 12px;
  height: 64px;
  transition: 0.15s;
  align-items: center;

  &:hover {
    background: rgb(250, 250, 250);
  }

  .icon-status {
    &--success {
      color: #67c23a;
    }

    &--progress {
      color: #409EFF;
    }
  }

  &__header {
    position: relative;
    z-index: 1;
    width: 200px;
  }

  &__body {
    position: relative;
    z-index: 1;
    flex: 1;
  }

  .el-tag {
    display: inline-block;
    vertical-align: top;
  }

  .text {
    &--title {
      display: inline-block;
      margin: 0px;
      font-weight: 500;
      color: #666;
      margin-right: 2px;
      font-size: 14px;
      transition: 0.15s;

      &:hover {
        color: #409EFF;
      }
    }
  }

  .el-progress {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;

    &-bar {
      height: 100% !important;

      &__outer {
        opacity: 0.1;
        height: 100% !important;
        border-radius: 0px !important;
      }

      &__inner {
        border-radius: 0px !important;
      }
    }
  }

  .el-progress-bar__innerText {
    display: none;
  }
}

.action-list {
  text-align: right;

  .action-item {
    display: inline-block;
  }

  .el-button--mini.is-circle {
    padding: 5px;
    font-size: 10px;
  }
}
</style>

<template>
  <div class="card-job">
    <el-progress
      v-if="progress && progress.progress"
      :text-inside="true"
      :stroke-width="5"
      :percentage="progress.progress"
    />
    <div class="card-job__header">
      <i
        v-if="progress && progress.progress"
        class="icon-status icon-status--progress el-icon-loading"
      />
      <i
        v-else
        class="icon-status icon-status--success el-icon-circle-check"
      />
      <h3 class="text--title">
        <a
          :href="data.url"
          target="_blank"
        >
          {{ data.title }}
        </a>
      </h3>
      <el-tag
        :type="TYPE_MAP[data.env]['type']"
        size="mini"
        class="tag"
      >
        {{ TYPE_MAP[data.env]['name'] }}
      </el-tag>
    </div>
    <div class="card-job__body">
      <div class="action-list">
        <ul>
          <!-- <li class="action-item">
          <el-button type="info" size="mini" icon="yundun-fe yicon-user" circle/>
        </li> -->
          <li
            v-if="data.cmds && data.cmds.length > 0"
            class="action-item"
          >
            <el-popover
              placement="bottom"
              trigger="hover"
            >
              <ul class="list-cmds">
                <li
                  v-for="item in data.cmds"
                  :key="item.id"
                  class="list-cmds-item"
                >
                  <el-tooltip
                    :content="item.title"
                    placement="top"
                  >
                    <div>
                      {{ item.content }}
                    </div>
                  </el-tooltip>
                </li>
              </ul>
              <el-button
                slot="reference"
                type="default"
                size="mini"
                icon="yundun-fe yicon-code"
                circle
              />
            </el-popover>
          </li>
          <!-- <li v-if="data.name" class="action-item">
            <el-tooltip content="立即构建" placement="top">
              <el-button :disabled="progressing" type="success" size="mini" icon="yundun-fe yicon-reload" circle @click="handleBuild(data.name)" />
            </el-tooltip>
          </li> -->
          <li
            v-if="data.name"
            class="action-item"
          >
            <router-link
              :to="`/product/id/${data.id}`"
              :id="`product_${data.id}`"
              class="inlineBlock"
            >
              <el-button
                type="primary"
                size="mini"
                icon="yundun-fe yicon-arrowright"
                circle
              />
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- </a> -->
  </div>
</template>

<script>
const TYPE_MAP = {
  test: {
    name: '测试',
    color: 'default',
    type: 'info'
  },
  pre: {
    name: '预发布',
    color: 'warning',
    type: 'warning'
  },
  'test-online': {
    name: '线上测服',
    color: 'warning'
  },
  prod: {
    name: '正式环境',
    color: 'success',
    type: 'success'
  }
}

export default {

  components: {},
  props: {
    data: {
      type: Object,
      default: () => { }
    },
    progress: {
      type: Object,
      default: () => { }
    }
  },
  data() {
    return {
      TYPE_MAP
    }
  },

  computed: {
    progressing() {
      if (this.progress && this.progress.progress) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    handleBuild(name) {
      this.$emit('on-build', name)
    }
  }
}
</script>
