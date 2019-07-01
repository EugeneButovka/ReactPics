import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList'

class App extends React.Component {
    state = {images: []};


    /*promise variant*/
    /*
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID 7398cb17eba4571dedb2b240a41f91407f28d01af8b1b46cfa24f837abe4f4ee'
            }
        }).then((response) => {
            console.log(response.data.results);
        });
    }
    */

    /*async await variant*/
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            },
        });

        this.setState({
                images: response.data.results
            }
        );
    };


    render() {
        return (
            <div className={"ui container"} style={{marginTop: '10px'}}>
                <SearchBar
                    onSubmit={this.onSearchSubmit}
                />
                <ImageList
                    images={this.state.images}
                />
            </div>
        )
    };
}


export default App;