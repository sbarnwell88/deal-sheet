import React, { Component } from 'react';
import axios from 'axios';
import ProjectList from './ProjectList';

var clientId;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: {
                projects: []
            }
        }
        this.getProjects=this.getProjects.bind(this);
    }

    componentDidMount() {
        this.getProjects();
    }

    getProjects () {
        axios.get(`/api/clients/`)
            .then((res) => {
                console.log(res.data)
                this.setState({clients: res.data})
        })
    }

    render() {
        const projectComponent = this.state.clients.projects.map((project, index) => {
            return <ProjectList {...project} key={index}/>
        })
        return (
            <div>
                {projectComponent}
            </div>
        );
    }
}

export default Home;