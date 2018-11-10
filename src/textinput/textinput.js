import React, { Component } from 'react'
import styled from 'styled-components'

const Input = styled.input.attrs({
  type: props => (props.type),
})`
  ::placeholder {
    color: gray;
  }
`

export class TextInput extends Component {
  render() {
    return (
      <Input {...this.props} />
    )
  }
}
