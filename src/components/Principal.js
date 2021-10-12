import { useState, useEffect } from 'react';
import '../App.css';

const URI = process.env.REACT_APP_URI;

export const Principal = () => {
    const [peers, setPeers] = useState([])

    const getPeers = async () => {
        const res = await fetch(`${URI}getPeers`)
        const data = await res.json();
        setPeers(data)
    }

    useEffect(() => {
        getPeers();
    }, [])

    return (
        <div>
            <div>
            <nav className="navbar navbar-light bg-noteapp">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1"><strong>Peer app</strong></span>
                </div>
            </nav>
        </div>
        <div className="col-8 pt-4">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Host</th>
                        <th>File</th>
                    </tr>
                </thead>
                <tbody>
                    {peers.map(peer => (
                        <tr key={peer.id_peer}>
                            <td>{peer.host}</td>
                            <td>{peer.file}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    )
}