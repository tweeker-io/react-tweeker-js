import React, { Component } from "react"
import { embedTweeker } from "tweeker-js"

class Embed extends Component {
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

export default Embed