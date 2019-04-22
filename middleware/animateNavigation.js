export default (context) => new Promise(
  (resolve) => {
    if (process.client) {
      context.store.dispatch('triggerAnimation')
      // TODO: implement nav animation
      // setTimeout(resolve, 400)
      resolve()
    } else {
      resolve()
    }
  }
)
