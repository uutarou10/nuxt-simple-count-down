export const state = () => ({
  currentTimer: undefined,
  isCreating: false
});

export const mutations = {
  setCreating (state, isCreating) {
    state.isCreating = isCreating;
  },
  setCurrentTimer (state, timer) {
    state.currentTimer = timer;
  }
}

export const actions = {
  async createTimer ({commit}, payload) {
    commit('setCreating', true);
    const docRef = await this.$db.collection('timers').add(payload);
    commit('setCreating', false);
    commit('setCurrentTimer', {
      id: docRef.id,
      ...payload
    });
    this.app.router.push(`/timers/${docRef.id}`);
  },
  async getTimer ({commit}, id) {
    const docSnapshot = await this.$db.collection('timers').doc(id).get();
    if (docSnapshot.exists) {
      const data = docSnapshot.data();
      commit('setCurrentTimer', {
        id,
        dueDate: data.dueDate.toDate(),
        title: data.title
      });
    } else {
      // 404 Error
      console.log('404 error')
    }
  }
}
