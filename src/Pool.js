import React from 'react';
import poolSettings from './data/poolSettings.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import PoolEntriesTable from './PoolEntriesTable';
import PoolSettingsTable from './PoolSettingsTable';

class Pool extends React.Component {
    render() {
      return (
        <React.Fragment>
            <h1>{poolSettings.poolName}</h1>
            <PoolEntriesTable></PoolEntriesTable>
            <PoolSettingsTable></PoolSettingsTable>
        </React.Fragment>
        
      );
    }
  }

  export default Pool;