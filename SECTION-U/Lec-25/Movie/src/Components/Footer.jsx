import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div>Footer</div>
    )
  }
}

export default Footer

import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Footer extends Component {
  static propTypes = {second: third}

  render() {
    return (
      <div>Footer</div>
    )
  }
}
