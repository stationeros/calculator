import React from 'react';
import OutputScreenRow from './outputScreenRow.js';

class OutputScreen extends React.Component {
  render() {
      return(
        <div className="screen">
          <OutputScreenRow value = {this.props.question} />
          <OutputScreenRow value = {this.props.answer} />
        </div>
    );
  }
}

export default OutputScreen;
