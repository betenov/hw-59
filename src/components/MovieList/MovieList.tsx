import React, {Component} from 'react';

interface Props {
  movie:string;
  id:string;
}

class MovieList extends Component<Props> {
  render() {
    return (
      <div>
        <div>
          {this.props.movie}
        </div>
      </div>
    );
  }
}

export default MovieList;