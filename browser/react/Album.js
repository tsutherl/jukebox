const React = require('react');
const toJson = response => response.json();


class Album extends React.Component {

    constructor () {
        super(); //this is used to call functions on the objs parent (ES6)
    }

    render(){
        return (
            <div className="album col-xs-10">
                  <div>
                    <h3>{this.props.album.name}</h3>
                    <img src={this.props.album.imageUrl}
                    className="img-thumbnail" />
                  </div>
                  <table className='table'>
                    <thead>
                      <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Artists</th>
                        <th>Genre</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.props.album.songs.map((song, idx) => (
                      <tr key={idx} className={this.props.activeSong.id === song.id ? 'active' : ''}> 
                        <td>
                          <button className="btn btn-default btn-xs" onClick={() => {
                                this.props.start(song);
                            }}>
                            
                            <span className="glyphicon glyphicon-play"></span>
                          </button>

                        </td>
                        <td>{song.name}</td>
                        <td>{song.artists.map((artist) => artist.name).join(" ")}</td>
                        <td>{song.genre}</td>
                         </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
            );
    }
}

module.exports = Album;