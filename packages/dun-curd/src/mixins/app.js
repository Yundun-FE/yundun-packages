import { mapMutations, mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    router: state => state.app.router,
    menus: state => state.app.menus
  })
}
