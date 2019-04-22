

const getters = {
  immutableUsersList:
    (state) => JSON.parse(
      JSON.stringify(
        state.usersList
      )
    ),
}

export default getters
