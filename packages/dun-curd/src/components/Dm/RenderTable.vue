<script>
import create from '../../utils/create-basic'

export default create({
  name: 'DmTable',

  render(createElement) {
    const columnsRender = []

    if (this.actions && this.actions.multiple || this.selection) {
      columnsRender.push(
        createElement('el-table-column', {
          props: {
            type: 'selection',
            width: 55
          }
        })
      )
    }

    this.columns.forEach(column => {
      const { tag = 'el-table-column', props = {}, componentName, componentProps = {}} = column

      let scopedSlots = {}
      if (componentName) {
        const props = componentProps
        if (componentName === 'ColumnAction' && this.actions && this.actions.row) {
          props.list = this.actions.row.list
        }
        scopedSlots = {
          default: scope => createElement(componentName, {
            props: {
              scope,
              ...props
            },
            on: {
              'click': e => this.$emit('click', e),
              'action': e => this.$emit('action', e)
            }
          })
        }
      }

      columnsRender.push(
        createElement('el-table-column', {
          props,
          scopedSlots
        })
      )
    })

    columnsRender.push(
      this.$slots.default
    )

    return createElement('el-table', {
      on: {
        'selection-change': val => this.$emit('selection-change', val)
      },
      props: {
        'border': this.border,
        'data': this.data,
        'size': this.size
      }
    }, columnsRender)
  },

  props: {
    selection: Boolean,
    border: Boolean,
    actions: {
      type: Object,
      default: () => { }
    },
    size: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    }
  }
})
</script>
