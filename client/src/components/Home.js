import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search'

class Home extends Component {
    state = {
        clients: []
    }

    componentDidMount() {
        // this.getClients();
        const clients = axios.get(`/api/clients/`)
        .then((res) => {
            console.log(res.data)
            this.setState({clients: res.data})
        })
    }

    // getClients () {
    //     axios.get(`/api/clients/`)
    //         .then((res) => {
    //             console.log(res.data)
    //             this.setState({clients: res.data})
    //     })
    // }

    searchClients(query){
        console.log(query);
        let clients = this.state.clients.filter((client) => {
            console.log(client)
          return client.name.includes(query)
        });
        console.log(clients);
        this.setState({clients: clients})
    }

    render() {
        return (
          <div className='container'>
            <Search searchClients={this.searchClients.bind(this)}/>
          </div>
        );
      }
    }
export default Home;