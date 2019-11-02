import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming'
import themes from '../../themes'
import { Checkbox } from '..'

class SimpleCheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      checked2: true,
    };
  }

  onChange = (checked) => this.setState({ checked });
  onChange2 = (checked2) => this.setState({ checked2 });

  render() {
    const { checked, checked2 } = this.state;
    return (
      <ThemeProvider theme={themes.light}>
        <Checkbox label="Checkbox" checked={checked} onChange={this.onChange} />
        <br />
        <Checkbox label="Disabled" checked={checked2} onChange={this.onChange2} disabled />
      </ThemeProvider>
    );
  }
}

storiesOf('Inputs', module)
  .add('Checkbox', () => (
    <SimpleCheckBox />
  ))
