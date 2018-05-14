import React from 'react'
import PropTypes from 'prop-types'

const CostumesList = props => (
  <div>
    <h3>{props.title}</h3>
    <div>{props.children}</div>
  </div>
)

CostumesList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default CostumesList
