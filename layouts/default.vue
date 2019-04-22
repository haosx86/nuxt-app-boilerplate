<template>
  <div class="page-wrapper">
    <AppHeader />
    <div class="content-wrapper">
      <nuxt />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>
