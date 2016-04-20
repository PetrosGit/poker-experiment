/* @flow */
import React, { PropTypes } from 'react';

// We can use Flow (http://flowtype.org/) to type our component's props
// and state. For convenience we've included both regular propTypes and
// Flow types, but if you want to try just using Flow you'll want to
// disable the eslint rule `react/prop-types`.
// NOTE: You can run `npm run flow:check` to check for any errors in your
// code, or `npm i -g flow-bin` to have access to the binary globally.
// Sorry Windows users :(.
type Props = {
  counter: number,
  doubleAsync: Function,
  increment: Function,
};

import { Card, Hand } from 'components/cards';

export class HomeView extends React.Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    doubleAsync: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired,
  };

  render () {
    return (
      <Hand cards={[
          { rank:'10', suit:'diams' },
          { rank:'9', suit:'diams' },
          { rank:'8', suit:'diams' },
        ]}/>
    );
  }
}
