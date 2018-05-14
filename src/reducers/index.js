import { combineReducers } from 'redux'
import favorites, * as fromFavorites from './favorites'
import costumes, * as fromCostumes from './costumes'

export default combineReducers({
  favorites,
  costumes
})

const getAddedIds = state => fromFavorites.getAddedIds(state.favorites)
const getCostume = (state, id) => fromCostumes.getCostume(state.costumes, id)


export const getFavorites = state =>
  getAddedIds(state).map(id => ({
    ...getCostume(state, id)
  }))
