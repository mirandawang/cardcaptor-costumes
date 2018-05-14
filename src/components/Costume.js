import React from 'react'
import PropTypes from 'prop-types'

const Costume = props => (
  <div>
    {props.name} <br />
    {props.description} <br />
    Episode: {props.episode}
  </div>
)

Costume.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  episode: PropTypes.string
}

export default Costume
