import React from 'react'
import PropTypes from 'prop-types'
import Costume from './Costume'

const FavoritesList  = props => {
  const hasCostumes = props.costumes.length > 0
  const nodes = hasCostumes ? (
    props.costumes.map(costume =>
      <Costume
        name={costume.name}
        description={costume.description}
        episode={costume.episode}
        key={costume.id}
      />
    )
  ) : (
    <em>Please add some costumes to your favorites.</em>
  )

  return (
    <div>
      <h3>Your Favorites</h3>
      <div>{nodes}</div>
      <p>Favorited: {props.costumes.length} costumes</p>
      <button onClick={props.clearFavorites}
        disabled={hasCostumes ? '' : 'disabled'}>
        Clear Favorites
      </button>
    </div>
  )
}

FavoritesList.propTypes = {
  costumes: PropTypes.array,
  clearFavorites: PropTypes.func
}

export default FavoritesList
