// TODO: import the right dependencies
import React, { Component } from 'react';
// TODO: code the Article component
class Article extends Component {
  render() {
    return (
      <div className="article">
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
      </div>
    )
  }
}




// TODO: export your Article component for tests
export default Article
