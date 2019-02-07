import React from 'react';

class OutputScreenRow extends React.Component {
  render() {
    return (
      <div className="screen-row">
        <input type="text" readOnly value={this.props.value}/>
      </div>
    );
  }
}

export default OutputScreenRow;
