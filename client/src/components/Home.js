import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search'
import ClientList from './ClientList'

class Home extends Component {
    state = {
        clients: [],
        allClients: []
    }

    componentDidMount() {
        // this.getClients();
        const clients = axios.get(`/api/clients/`)
        .then((res) => {
            // console.log(res.data)
            this.setState({clients: res.data, allClients: res.data})
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
        let clients = this.state.allClients.filter((client) => {
            // console.log(client)
          return client.name.includes(query)
        });
        // console.log(clients);
        this.setState({clients: clients})
    }

    render() {
        return (
          <div className='container'>
            <Search searchClients={this.searchClients.bind(this)}/>
            <ClientList clients={this.state.clients}/>
          </div>
        );
      }
    }
export default Home;