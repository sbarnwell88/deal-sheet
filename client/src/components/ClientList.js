import React from 'react';
import Client from './Client'

const ClientList = ({clients}) => {
    console.log(clients)
    return (
        <div>
            { clients.map(client => <div
                                    key={client.id}>
                                    {client.name}</div>)}
        </div>
    );
};

export default ClientList;