import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToFavorites } from '../actions'
import { getAllCostumes } from '../reducers/costumes'
import CostumeCard from '../components/CostumeCard'
import CostumesList from '../components/CostumesList'

const CostumesContainer = props => (
  <CostumesList title="Cardcaptor Costumes">
    {props.costumes.map(costume =>
      <CostumeCard
        key={costume.id}
        costume={costume}
        addToFavorites={() => props.addToFavorites(costume.id)} />
    )}
  </CostumesList>
)

CostumesContainer.propTypes = {
  costumes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    episode: PropTypes.string.isRequired
  })).isRequired,
  addToFavorites: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  costumes: getAllCostumes(state.costumes)
})

export default connect(
  mapStateToProps,
  { addToFavorites }
)(CostumesContainer)
