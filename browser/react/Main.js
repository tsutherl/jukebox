const React = require('react');
const Sidebar = require('./Sidebar');
const Footer = require('./Footer');
const Album = require('./Album');
const log = console.log.bind(console);
const logError = console.error.bind(console);
const audio = document.createElement('audio');



class Main extends React.Component {
    constructor () {
        super(); //this is used to call functions on the objs parent
        this.state = {
            album: { songs: []}, //this just like mimics what it is in db
            activeSong: {}
        };
        this.start = this.start.bind(this);
    }
    componentDidMount(){
        fetch('api/albums/1')
          .then((res) => {
            return res.json();
          })
          .then((returnedAlbum) => {
            returnedAlbum.imageUrl = `/api/albums/${returnedAlbum.id}/image`;
            this.setState({
                album: returnedAlbum //this replaces the whole album prop

            })
          })
          .then(log)
          .catch(logError);
    }

    start (song) {
        audio.src = song.url
        audio.load();
        audio.play();
        this.setState({
            activeSong: song
        });
    }

    toggle(){
        
    } 




      // <audio src='https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3' ref={(self) => this.audioPlayer = self} />

    //this.audioPlayer.play() (refs is a built in thing)

    render () {
        return (
            <div>
            <Sidebar />
            <Album album={this.state.album}
                    start={this.start.bind(this)}
                    activeSong={this.state.activeSong}
                    toggle={this.toggle.bind(this)}
                        /> 
            <Footer nowPlaying={this.state.activeSong} start={this.start} />
            </div>
        );
    }
}


module.exports = Main;
