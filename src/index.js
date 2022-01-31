import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
// import poolSettings from './data/poolSettings.json';
// import PoolEntriesTable from './PoolEntriesTable';
// import PoolSettingsTable from './PoolSettingsTable';

// class Pool extends React.Component {
//     render() {
//       return (
//         <React.Fragment>
//             <h1>{poolSettings.poolName}</h1>
//             <PoolEntriesTable></PoolEntriesTable>
//             <PoolSettingsTable></PoolSettingsTable>
//         </React.Fragment>
//
//       );
//     }
//   }
  
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
  