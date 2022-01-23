import React from 'react';
import ReactDOM from 'react-dom';
import pool from './data/poolEntries.json';
import poolResults from './data/poolResults.json';
import poolSettings from './data/poolSettings.json';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

class Pool extends React.Component {
    getPoints(entry) {
        let points = entry.wildcard.filter(team => poolResults.wildcard.includes(team)).length * 1;
        points += entry.divisional.filter(team => poolResults.divisional.includes(team)).length * 2;
        points += entry.conference.filter(team => poolResults.conference.includes(team)).length * 4;
        if(entry.superbowl === poolResults.superbowl) {
            points +=  8;
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
        // sortedEntries =
        return entries.sort(function (a, b) {
            return b.points - a.points;
          })
    }
    render() {
      return (
        <React.Fragment>
            <h1>NFL Playoffs Pool</h1>
            <h2>Pool Entries</h2>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Entry Name</th>
                        <th>Wild Card</th>
                        <th>Divisional</th>
                        <th>Conference Championship</th>
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
                                    <td>
                                        {this.getPoints(entry)}
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
            <h2>Pool Settings</h2>
            <Table>
                <tr>
                    <td>Pool name</td>
                    <td>{poolSettings.basicInformation.poolName}</td>
                </tr>
                <tr>
                    <td>Comissioner</td>
                    <td>{poolSettings.basicInformation.poolCommissioner}</td>
                </tr>
                <tr>
                    <td>Pick deadline</td>
                    <td>{poolSettings.pickSettings.pickDeadline}</td>
                </tr>
                <tr>
                    <td>Points for each win</td>
                    <td>
                        <table>
                            <tr>
                                <td>Wild card:</td>
                                <td>{poolSettings.scoringSettings.postSeasonMultipliers.wildcard} points</td>
                            </tr>
                            <tr>
                                <td>Divisional:</td>
                                <td>{poolSettings.scoringSettings.postSeasonMultipliers.divisional} points</td>
                            </tr>
                            <tr>
                                <td>Conference:</td>
                                <td>{poolSettings.scoringSettings.postSeasonMultipliers.conference} points</td>
                            </tr>
                            <tr>
                                <td>Super Bowl:</td>
                                <td>{poolSettings.scoringSettings.postSeasonMultipliers.superbowl} points</td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td>Tiebreaker</td>
                    <td>{poolSettings.pickSettings.tiebreaker}</td>
                </tr>
            </Table>
        </React.Fragment>
        
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Pool />,
    document.getElementById('root')
  );
  