import React from 'react';
import pool from './data/poolEntries.json';
import poolResults from './data/poolResults.json';
import poolSettings from './data/poolSettings.json';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';

class PoolSettingsTable extends React.Component {
    getPoints(entry) {
        let points = entry.wildcard.filter(team => poolResults.wildcard.includes(team)).length * poolSettings.pointMultipliers.wildcard;
        points += entry.divisional.filter(team => poolResults.divisional.includes(team)).length * poolSettings.pointMultipliers.divisional;
        points += entry.conference.filter(team => poolResults.conference.includes(team)).length * poolSettings.pointMultipliers.conference;
        if(entry.superbowl === poolResults.superbowl) {
            points +=  poolSettings.pointMultipliers.superbowl;
        }
        return points;
    }
    getEntriesWithPoints(entries) {
        return entries.map(entry => {
            entry.points = this.getPoints(entry);
            return entry;
        });
    }
    getSortedEntriesByPoints(entries) {
        return entries.sort(function (a, b) {
            return b.points - a.points;
          })
    }
    render() {
      return (
        <React.Fragment>
          <h2>Pool Entries</h2>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Entry Name</th>
                        <th>Wild Card</th>
                        <th>Divisional</th>
                        <th>Conference</th>
                        <th>Super Bowl</th>
                        <th>Tie</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td><b>Results</b></td>
                        <td>
                            {
                                poolResults.wildcard.map((team) => {
                                    return (<img key={team} src={pool.teamLogos[team]}></img>);
                                })
                            }
                        </td>
                        <td>
                            {
                                poolResults.divisional.map((team) => {
                                    return (<img key={team} src={pool.teamLogos[team]}></img>);
                                })
                            }
                        </td>
                        <td>
                            {
                                poolResults.conference.map((team) => {
                                    return (<img key={team} src={pool.teamLogos[team]}></img>);
                                })
                            }
                        </td>
                        <td>
                            <img src={pool.teamLogos[poolResults.superbowl]}></img>
                        </td>
                        <td>
                            {poolResults.score}
                        </td>
                        <td>30</td>
                    </tr>
                    {
                        this.getSortedEntriesByPoints(this.getEntriesWithPoints(pool.poolEntries)).map((entry, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{entry.name}</td>
                                    <td>
                                        {
                                            entry.wildcard.map((team) => {
                                                return (<Image key={team} src={pool.teamLogos[team]} alt={team}></Image>);
                                            })
                                        }
                                    </td>
                                    <td>
                                        {
                                            entry.divisional.map((team) => {
                                                return (<Image key={team} src={pool.teamLogos[team]} alt={team}></Image>);
                                            })
                                        }
                                    </td>
                                    <td>
                                        {
                                            entry.conference.map((team) => {
                                                return (<Image key={team} src={pool.teamLogos[team]} alt={team}></Image>);
                                            })
                                        }
                                    </td>
                                    <td>
                                        <img src={pool.teamLogos[entry.superbowl]}></img>
                                    </td>
                                    <td>
                                        {entry.tie}
                                    </td>
                                    <td>
                                        {this.getPoints(entry)}
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        </React.Fragment>
      );
    }
  }

export default PoolSettingsTable;
