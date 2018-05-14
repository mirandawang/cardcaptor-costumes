import React from 'react'
import PropTypes from 'prop-types'
import Costume from './Costume'

const CostumeCard = props => (
  <div style={{ marginBottom: 20 }}>
    <Costume
      name={props.costume.name}
      description={props.costume.description}
      episode={props.costume.episode} />
    <button
      onClick={props.addToFavorites}>
      Add To Favorites
    </button>
  </div>
)

CostumeCard.propTypes = {
  costume: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    episode: PropTypes.string.isRequired
  }).isRequired,
  addToFavorites: PropTypes.func.isRequired
}

export default CostumeCard
