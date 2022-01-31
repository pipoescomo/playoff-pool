import React from 'react';
import poolSettings from './data/poolSettings.json';
import Table from 'react-bootstrap/Table';

class PoolSettingsTable extends React.Component {
    render() {
      return (
        <React.Fragment>
          <h2>Pool Settings</h2>
            <Table>
                <tbody>
                    <tr>
                        <th>Pool type</th>
                        <td>{poolSettings.poolType}</td>
                    </tr>
                    <tr>
                        <th>Commissioner</th>
                        <td>{poolSettings.poolCommissioner}</td>
                    </tr>
                    <tr>
                        <th>Pick deadline</th>
                        <td>{poolSettings.pickDeadline}</td>
                    </tr>
                    <tr>
                        <th>Points for each win</th>
                        <td>
                            <Table size="sm">
                                <tbody>
                                    <tr>
                                        <td>Wild card:</td>
                                        <td>{poolSettings.pointMultipliers.wildcard} point</td>
                                    </tr>
                                    <tr>
                                        <td>Divisional:</td>
                                        <td>{poolSettings.pointMultipliers.divisional} points</td>
                                    </tr>
                                    <tr>
                                        <td>Conference:</td>
                                        <td>{poolSettings.pointMultipliers.conference} points</td>
                                    </tr>
                                    <tr>
                                        <td>Super Bowl:</td>
                                        <td>{poolSettings.pointMultipliers.superbowl} points</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </td>
                    </tr>
                    <tr>
                        <th>Tiebreaker</th>
                        <td>{poolSettings.tiebreaker}</td>
                    </tr>
                </tbody>
            </Table>
        </React.Fragment>
      );
    }
  }

export default PoolSettingsTable;
