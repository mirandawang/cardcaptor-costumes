import {
  ADD_TO_FAVORITES,
  CLEAR_REQUEST,
  CLEAR_FAILURE
} from '../constants/ActionTypes'

const initialState = {
  addedIds: []
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      if (state.indexOf(action.costumeId) !== -1) {
        return state
      }
      return [ ...state, action.costumeId ]
    default:
      return state
  }
}

export const getAddedIds = state => state.addedIds

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_REQUEST:
      return initialState
    case CLEAR_FAILURE:
      return action.favorites
    default:
      return {
        addedIds: addedIds(state.addedIds, action)
      }
  }
}

export default favorites
