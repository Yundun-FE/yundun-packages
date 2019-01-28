export default {
  props: {
    rules: {
      type: Object,
      default: () => {}
    },
    value: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },

  data() {
    return {
      form: this.value
    }
  },

  watch: {
    value(val) {
      this.form = val
    },

    rules(val) {
      this.$nextTick(() => {
        this.$refs.form && this.$refs.form.clearValidate()
      })
    },

    form(val) {
      this.$emit('input', val)
    }
  },

  methods: {
    handleSubmit() {
      this.$refs.form.validate(valid => {
        if (!valid) return
        this.$emit('submit')
      })
    }
  }
}
