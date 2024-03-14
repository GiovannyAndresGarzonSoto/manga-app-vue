import { createStore } from 'vuex'
// import auth from '../modules/auth/store'
// import manga from '../modules/manga/store/'

export interface StateInterface {
    // places: PlacesState,
    // map: MapState
  }

const store = createStore<StateInterface>({
    modules: {
        // auth,
        // manga
    }
})

export default store