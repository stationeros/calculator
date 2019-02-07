import React from 'react';

class CalculatorTitle extends React.Component {
  render() {
    return(
      <div className="calculator-title">
       { this.props.value }
      </div>
    );
  }
}

export default CalculatorTitle;
