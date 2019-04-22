<template>
  <div class="page-wrapper">
    _slug page component placeholder
  </div>
</template>

<script>

export default {
  head() {
    return {
      title: 'Nuxt bolierplate slug page',
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
