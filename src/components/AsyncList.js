import React, { Component } from 'react';
import config from '../config/config';

export default class AsyncList extends React.Component {
	renderAsyncList = (status, arr, render) => {
      switch (status) {
        case config.STATUS_NO_DATA:
          return <span>No Data</span>;
        case config.STATUS_LOADING:
          return <span className="button is-loading is-rounded">Loading</span>;
        case config.STATUS_FAILURE:
          return <span>Not able to connect to server</span>;
        case config.STATUS_OK:
          return arr.map(el => render(el));
      }
    }
}
