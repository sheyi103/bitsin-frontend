export const state = () => ({
  // items: "are you there",
  items: process.server
    ? ''
    : JSON.parse(localStorage.getItem('featuredHandymen')),
})
// Getter
export const getters = {
  getfeaturedHandymen(state) {
    return state.items
  },
  getfeaturedHandymenById: (state) => (id) => {
    return state.items.find((items) => items.id == id)
  },
}

// Mutations
export const mutations = {
  setContent(state, content) {
    state.items = content
  },
}
// action
export const actions = {
  async getFeaturedHandymen(context) {
    const response = await this.$repositories.featuredHandymen.index()
    const content = response.data
    // console.log(content)
    if (process.client) {
      localStorage.setItem('featuredHandymen', JSON.stringify(content))
    }
    context.commit('setContent', content)
  },
}
