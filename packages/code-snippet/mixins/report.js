import { mapMutations, mapState, mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState({
      domainId: state => state.domain.id,
      domainInfo: state => state.domain.info
    })
  },

  methods: {
    ...mapMutations({
      'DOMAIN_SET_ID': 'domain/SET_ID'
    }),
    ...mapActions({
      'domainFetchInfo': 'domain/fetchInfo'
    })
  }
}
