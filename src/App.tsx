import React from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import '@progress/kendo-theme-default/dist/all.css';
import './App.scss';

const App = () => {
  const data = [
    { id: 1, name: 'کاربر 1', age: 30 },
    { id: 2, name: 'کاربر 2', age: 25 },
    { id: 3, name: 'کاربر 3', age: 35 },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>نمونه ای از Grid</h1>
        <Grid
          style={{ height: '400px' }}
          data={data}
        >
          <GridColumn field="id" title="ID" width="50px" />
          <GridColumn field="name" title="نام" />
          <GridColumn field="age" title="سن" width="100px" />
        </Grid>
      </header>
    </div>
  );
}

export default App;
