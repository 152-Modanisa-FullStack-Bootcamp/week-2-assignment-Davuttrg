import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        favoriteVideos: []
        //initial value is empty
    },
    mutations: {
        removeFromFavoritesById(state, id) {
            const index = state.favoriteVideos.findIndex((item) => item.id == id);
            //index of favoriteVideos 
            if (index !== -1) state.favoriteVideos.splice(index, 1)
        },
        addVideoToFavorite(state, video) {
            state.favoriteVideos.push(video)
        },
    },
    actions: {
        handleFavorites({ commit }, payload) {
            //check add or remove
            this.state.favoriteVideos.some((item) => item.id == payload.id) ?
                commit('removeFromFavoritesById', payload.id) :
                commit('addVideoToFavorite', payload)
        },
    }
})
export default store;