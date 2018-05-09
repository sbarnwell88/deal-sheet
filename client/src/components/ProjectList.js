import React, { Component } from 'react';

class ProjectList extends Component {
    render(props) {
        return (
            <div>
                {this.props.project_name}
            </div>
        );
    }
}

export default ProjectList;