import React from 'react';

// change the return line 
export class MultiLineText extends React.Component {
  render() {
    const renderTexts = () => {
      if (typeof (this.props.children) === "string") {
        return this.props.children.split("\n").map((m, i) => <span key={i}>{m}<br /></span>)
      } else {
        return "";
      }
    }
    return (
      <div className={this.props.className}>
        {renderTexts()}
      </div>
    );
  }
}

// Filter the data 
export function getActiveData(data, filter) {
  if (filter === "all") {
    return data
  }
  return data.filter((d) =>
    d.category.includes(filter)
  )
}