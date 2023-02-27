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
          onFilterValueChange={(filter, value) =>
            console.log('Filter value changed', filter, value)
          }
        />
        <FilterField
          type="text"
          locale="en"
          onFilterChange={(filter) => console.log('Ehh filter changed', filter)}
          onFilterValueChange={(filter, value) =>
            console.log('Filter value changed', filter, value)
          }
        />
      </div>
    </div>
  );
}

export default App;
