import React from 'react';
import ReactDOM from 'react-dom';
import pool from './data/poolEntries.json';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

class Pool extends React.Component {
    getWildcard(entry) {
        return entry.wildcard;
    }
    render() {
      return (
        <Table className="table">
            <thead>
                <tr>
                    <th scope="col">Entry Name</th>
                    <th scope="col">Wild Card</th>
                    <th scope="col">Divisional</th>
                    <th scope="col">Conference Championship</th>
                    <th scope="col">Super Bowl</th>
                    <th scope="col">Tie</th>
                </tr>
            </thead>
            <tbody>
                {
                    pool.poolEntries.map((entry, i) => {
                        return (
                            <tr key={i}>
                                <td>{entry.name}</td>
                                <td>
                                    {
                                        entry.wildcard.map((team) => {
                                            return (<img key={team} src={pool.teamLogos[team]}></img>);
                                        })
                                    }
                                </td>
                                <td>
                                    {
                                        entry.divisional.map((team) => {
                                            return (<img key={team} src={pool.teamLogos[team]}></img>);
                                        })
                                    }
                                </td>
                                <td>
                                    {
                                        entry.conference.map((team) => {
                                            return (<img key={team} src={pool.teamLogos[team]}></img>);
                                        })
                                    }
                                </td>
                                <td>
                                    <img src={pool.teamLogos[entry.superbowl]}></img>
                                </td>
                                <td>
                                    {entry.tie}
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </Table>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Pool />,
    document.getElementById('root')
  );
  