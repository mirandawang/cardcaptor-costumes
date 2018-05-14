import closet from '../api/closet'
import * as types from '../constants/ActionTypes'

const receiveCostumes = costumes => ({
  type: types.RECEIVE_COSTUMES,
  costumes
})

export const getAllCostumes = () => dispatch => {
  closet.getCostumes(costumes => {
    dispatch(receiveCostumes(costumes))
  })
}

export const addToFavorites = costumeId => ({
  type: types.ADD_TO_FAVORITES,
  costumeId
})

export const clearFavorites = costumes => (dispatch, getState) => {
  const { favorites } = getState()

  dispatch({
    type: types.CLEAR_REQUEST
  })
  closet.clearFavoriteCostumes(costumes, () => {
    dispatch({
      type: types.CLEAR_SUCCESS,
      favorites
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}
