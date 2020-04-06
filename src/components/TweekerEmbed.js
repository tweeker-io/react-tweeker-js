import { Component } from "react"
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

export default TweekerEmbed