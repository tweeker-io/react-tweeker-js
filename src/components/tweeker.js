import React, { Component } from "react"
import PropTypes from 'prop-types'
import { embedTweeker } from "tweeker-js"

class Tweeker extends Component {
  componentDidMount () {
    const { businessId, embedVersion } = this.props

    embedTweeker({ businessId, embedVersion })
  }

  render() {
    return null
  }
}

Embed.defaultProps = {
  businessId: null,
  embedVersion: 'latest',
}

Embed.propTypes = {
  businessId: PropTypes.string.isRequired,
  embedVersion: PropTypes.string.isRequired,
}

export default Tweeker