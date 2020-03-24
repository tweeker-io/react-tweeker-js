import { Component } from "react"
import PropTypes from 'prop-types'
import { embedTweeker } from "tweeker-js"

class TweekerEmbed extends Component {
  componentDidMount () {
    const { businessId, embedVersion } = this.props

    embedTweeker({ businessId, embedVersion })
  }

  render() {
    return null
  }
}

TweekerEmbed.defaultProps = {
  businessId: null,
  embedVersion: 'latest',
}

TweekerEmbed.propTypes = {
  businessId: PropTypes.string.isRequired,
  embedVersion: PropTypes.string.isRequired,
}

export default TweekerEmbed