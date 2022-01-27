import React from 'react';
import pool from './data/poolEntries.json';
import poolResults from './data/poolResults.json';
import poolSettings from './data/poolSettings.json';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';

const imageGreenStyle ={backgroundColor: '#90EE90'};
const imageRedStyle ={backgroundColor: '#EC7063'};

function SuperBowlImage(team) {
    if(poolResults.conference.includes(team)) {
        return (<Image key={team} src={pool.teamLogos[team]} alt={team} style={imageGreenStyle}></Image>); 
    }
    if(poolResults.eliminated.includes(team)) {
        return (<Image key={team} src={pool.teamLogos[team]} alt={team} style={imageRedStyle}></Image>); 
    }
    return <Image src={pool.teamLogos[team]} alt={team}></Image>
}

function BoldTotalPoints(totalPoints, possiblePoints) {
    if(possiblePoints === 0) return <b>{totalPoints}</b>;
    return totalPoints;
}

class PoolSettingsTable extends React.Component {
    getPoints(teams, winners, pointMultiplier) {
        return teams.filter(team => winners.includes(team)).length * pointMultiplier;
    }
    getEntriesWithPoints(entries) {
        return entries.map(entry => {
            entry.wildcardPoints = this.getPoints(entry.wildcard, poolResults.wildcard, poolSettings.pointMultipliers.wildcard);
            entry.divisionalPoints = this.getPoints(entry.divisional, poolResults.divisional, poolSettings.pointMultipliers.divisional);
            entry.conferencePoints = this.getPoints(entry.conference, poolResults.conference, poolSettings.pointMultipliers.conference);
            entry.superbowlPoints = entry.superbowl === poolResults.superbowl ? 8 : 0;
            entry.totalPoints = entry.wildcardPoints + entry.divisionalPoints + entry.conferencePoints + entry.superbowlPoints;
            return entry;
        });
    }
    getSortedEntriesByPoints(entries) {
        return entries.sort(function (a, b) {
            return b.totalPoints - a.totalPoints;
          })
    }
    getPossiblePoints(entry) {
        let possiblePoints = entry.wildcard.filter(team => !poolResults.wildcard.includes(team) && !poolResults.eliminated.includes(team)).length * poolSettings.pointMultipliers.wildcard;
        possiblePoints += entry.divisional.filter(team => !poolResults.divisional.includes(team) && !poolResults.eliminated.includes(team)).length * poolSettings.pointMultipliers.divisional;
        possiblePoints += entry.conference.filter(team => !poolResults.conference.includes(team) && !poolResults.eliminated.includes(team)).length * poolSettings.pointMultipliers.conference;
        possiblePoints += poolResults.superbowl !== entry.superbowl && !poolResults.eliminated.includes(entry.superbowl) ? poolSettings.pointMultipliers.superbowl : 0;
        return possiblePoints;
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
                        <th>Points</th>
                        <th>Divisional</th>
                        <th>Points</th>
                        <th>Conference</th>
                        <th>Points</th>
                        <th>Super Bowl</th>
                        <th>Points</th>
                        <th>Tie</th>
                        <th>Total</th>
                        <th>Possible</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td><b>Results</b></td>
                        <td>
                            {
                                poolResults.wildcard.map((team) => {
                                    return (<Image key={team} src={pool.teamLogos[team]} alt={team}></Image>);
                                })
                            }
                        </td>
                        <td>6</td>
                        <td>
                            {
                                poolResults.divisional.map((team) => {
                                    return (<Image key={team} src={pool.teamLogos[team]} alt={team}></Image>);
                                })
                            }
                        </td>
                        <td>8</td>
                        <td>
                            {
                                poolResults.conference.map((team) => {
                                    return (<Image key={team} src={pool.teamLogos[team]} alt={team}></Image>);
                                })
                            }
                        </td>
                        <td>8</td>
                        <td>
                            <Image src={pool.teamLogos[poolResults.superbowl]} alt={poolResults.superbowl}></Image>
                        </td>
                        <td>8</td>
                        <td>
                            {poolResults.score}
                        </td>
                        <td><b>30</b></td>
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
                                                if(poolResults.wildcard.includes(team)) {
                                                    return (<Image key={team} src={pool.teamLogos[team]} alt={team} style={imageGreenStyle}></Image>); 
                                                }
                                                if(poolResults.eliminated.includes(team)) {
                                                    return (<Image key={team} src={pool.teamLogos[team]} alt={team} style={imageRedStyle}></Image>); 
                                                }
                                                return (<Image key={team} src={pool.teamLogos[team]} alt={team}></Image>);
                                            })
                                        }
                                    </td>
                                    <td>{entry.wildcardPoints}</td>
                                    <td>
                                        {
                                            entry.divisional.map((team) => {
                                                if(poolResults.divisional.includes(team)) {
                                                    return (<Image key={team} src={pool.teamLogos[team]} alt={team} style={imageGreenStyle}></Image>); 
                                                }
                                                if(poolResults.eliminated.includes(team)) {
                                                    return (<Image key={team} src={pool.teamLogos[team]} alt={team} style={imageRedStyle}></Image>); 
                                                }
                                                return (<Image key={team} src={pool.teamLogos[team]} alt={team}></Image>);
                                            })
                                        }
                                    </td>
                                    <td>{entry.divisionalPoints}</td>
                                    <td>
                                        {
                                            entry.conference.map((team) => {
                                                if(poolResults.conference.includes(team)) {
                                                    return (<Image key={team} src={pool.teamLogos[team]} alt={team} style={imageGreenStyle}></Image>); 
                                                }
                                                if(poolResults.eliminated.includes(team)) {
                                                    return (<Image key={team} src={pool.teamLogos[team]} alt={team} style={imageRedStyle}></Image>); 
                                                }
                                                return (<Image key={team} src={pool.teamLogos[team]} alt={team}></Image>);
                                            })
                                        }
                                    </td>
                                    <td>{entry.conferencePoints}</td>
                                    <td>
                                        {SuperBowlImage(entry.superbowl)}
                                    </td>
                                    <td>{entry.superbowlPoints}</td>
                                    <td>
                                        {entry.tie}
                                    </td>
                                    <td>
                                        {BoldTotalPoints(entry.totalPoints, this.getPossiblePoints(entry))}
                                    </td>
                                    <td>
                                        {this.getPossiblePoints(entry) + entry.totalPoints}
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
