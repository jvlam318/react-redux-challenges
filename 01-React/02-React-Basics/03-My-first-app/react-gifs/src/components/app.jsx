import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "QAsBwSjx9zVKoGp9nr"
      // FOo4JKj6TUQuY baby sleeping gif
    }
  }

  search = (query) => {
    giphy("XLDIw37NHYH9ZLSfUG1aiHCUFcnk655h").search({
      q: query,
      rating: 'g',
      limit: 5
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  selectGif = (gifId) => {
    this.setState({
      selectedGifId: gifId
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
