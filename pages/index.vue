<template>
  <div class="page-wrapper">
    Home page component placeholder
  </div>
</template>

<script>
import demoMixin from '~/mixins/demoMixin'

export default {
  mixins: [
    demoMixin,
  ],
  head() {
    return {
      title: 'Nuxt bolierplate homepage',
    }
  },
  data() {
    return {
    }
  },
  async asyncData({ store, error }) {
    // TODO: make some sense with it
    const usersList = store.getters.immutableUsersList
    if (!usersList) {
      error({ statusCode: 404, message: 'page not found: ' })
    }
    return {
      usersList
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.prevRoute = from
    })
  },
  methods: {
  },
}
</script>
