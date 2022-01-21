import React from 'react';
import ReactDOM from 'react-dom';
import pool from './data/poolSettings.json';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

class Pool extends React.Component {
    getWildcard(entry) {
        return entry.wildcard;
    }
    render() {
      return (
        <Table className="table">
            <tbody>
                {
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
