import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { clearFavorites } from '../actions'
import { getFavorites } from '../reducers'
import FavoritesList from '../components/FavoritesList'

const FavoritesContainer = props => (
  <FavoritesList
    costumes={props.costumes}
    clearFavorites={() => props.clearFavorites(props.costumes)} />
)

FavoritesContainer.propTypes = {
  costumes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    episode: PropTypes.string.isRequired
  })).isRequired,
  clearFavorites: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  costumes: getFavorites(state)
})

export default connect(
  mapStateToProps,
  { clearFavorites }
)(FavoritesContainer)
