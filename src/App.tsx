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
    <div className="App" dir="rtl">
      <header className="App-header">
        <h1>لیست کاربران</h1>
        <Grid
          style={{ height: '400px', backgroundColor: '#f4f4f9', borderRadius: '8px' }}
          data={data}
          sortable
          pageable={{ buttonCount: 3, pageSizes: [5, 10, 20] }}
        >
          <GridColumn field="id" title="شناسه" width="70px" />
          <GridColumn field="name" title="نام" width="150px" />
          <GridColumn field="age" title="سن" width="100px" />
        </Grid>
      </header>
    </div>
  );
}

export default App;
