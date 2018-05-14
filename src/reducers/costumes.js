import { combineReducers } from 'redux'
import { RECEIVE_COSTUMES } from '../constants/ActionTypes'

const costumes = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_COSTUMES:
      return {
        ...state,
        ...action.costumes.reduce((obj, costume) => {
          obj[costume.id] = costume
          return obj
        }, {})
      }
    default:
      const { costumeId } = action
      if (costumeId) {
        return {
          ...state,
          [costumeId]: costumes(state[costumeId], action)
        }
      }
      return state
  }
}

const costumeIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_COSTUMES:
      return action.costumes.map(costume => costume.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  costumeIds
})

export const getCostume = (state, id) =>
  state.byId[id]

export const getAllCostumes = state =>
  state.costumeIds.map(id => getCostume(state, id))
