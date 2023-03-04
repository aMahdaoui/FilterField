import './App.css';
import FilterField from './components/filterField/FilterField';

function App() {
  return (
    <div className="App">
      <h1>React mui filters</h1>

      <div className="card">
        <FilterField
          type="number"
          locale="en"
          onFilterChange={(filter) => console.log('Ehh filter changed', filter)}
          onChangeFilterValue={(filter, value) =>
            console.log('On change Filter value', filter, value)
          }
          onFilterValueChanged={(filter, value) =>
            console.log('Filter value has been changed', filter, value)
          }
        />
        <FilterField
          type="text"
          locale="en"
          onFilterChange={(filter) => console.log('Ehh filter changed', filter)}
          onChangeFilterValue={(filter, value) =>
            console.log('On change Filter value', filter, value)
          }
          onFilterValueChanged={(filter, value) =>
            console.log('Filter value has been changed', filter, value)
          }
        />
      </div>
    </div>
  );
}

export default App;
