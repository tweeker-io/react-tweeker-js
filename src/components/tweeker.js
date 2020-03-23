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

Tweeker.defaultProps = {
  businessId: null,
  embedVersion: 'latest',
}

Tweeker.propTypes = {
  businessId: PropTypes.string.isRequired,
  embedVersion: PropTypes.string.isRequired,
}

export default Tweeker