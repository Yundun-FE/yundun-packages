import { mapMutations, mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    utime: state => state.report.utime
  }),
  methods: {
    ...mapMutations(['SET_UTIME'])
  }
}
