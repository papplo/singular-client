import React, { Component } from 'react';

const STATUS_NO_DATA = 'unloaded';
const STATUS_LOADING = 'loading';
const STATUS_FAILURE = 'failure';
const STATUS_OK = 200;

export default class AsyncList extends React.Component {
	renderAsyncList = (status, arr, render) => {
      switch (status) {
        case STATUS_NO_DATA:
          return <span>No Data</span>;
        case STATUS_LOADING:
          return <span className="button is-loading is-rounded">Loading</span>;
        case STATUS_FAILURE:
          return <span>Not able to connect to server</span>;
        case STATUS_OK:
          return arr.map(el => render(el));
      }
    }
}
