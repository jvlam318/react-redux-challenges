import React, { Component } from 'react';
import Gif from './gif.jsx';

// class GifList extends Component {

//   renderlist = () => {
//     return this.props.gifs.map(gif => {
//       return <Gif id={gif.id} key={gif.id} selectGif={this.props.selectGif(gif.id)} />
//     })
//   }

//   render() {
//     return (
//       <div className="gif-list">
//         {this.renderlist()}
//       </div>
//     );
//   }
// }


const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} />)}
    </div>
  );
};

export default GifList;
