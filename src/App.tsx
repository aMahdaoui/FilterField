import { useState } from 'react'
import './App.css'
import FilterField from './components/filterField/FilterField'

function App() {
  // TODO : 
  /*
  ! TODOS : 
  * Todo 1 - Add locales i18next - done
  * Todo 2 - styles - Done
    Todo 4 - unit tests
    Todo 5 - Add tslint and prettier
    Todo 3 - Implment mui-date picker component

  */
  // const [filter, setFilter] = useState('text')
  return (
    <div className="App">
      <h1>React mui filters</h1>

      <div className="card">
        <FilterField
          type='number'
          locale='en'
          onFilterChange={(filter) => console.log('Ehh filter changed', filter)}
          onFilterValueChange={(filter, value) => console.log('Filter value changed', filter, value)}
        />
        <FilterField
          type='text'
          locale='en'
          onFilterChange={(filter) => console.log('Ehh filter changed', filter)}
          onFilterValueChange={(filter, value) => console.log('Filter value changed', filter, value)}
        />
        {/*
        <FilterField
          type='date'
          locale='en'
          onFilterChange={(filter) => console.log('Ehh filter changed', filter)}
          onFilterValueChange={(filter, value) => console.log('Filter value changed', filter, value)}
        /> */}
      </div>
      {/* 
        example of use
        <div>
            <h3>{`Filer Result Data : ${filter} - ${filterValue}`}</h3>
            {props.data && props.data.filter((elt: any) => elt.id > 4 && elt.id < 8).map((elt: any, index: number) => {
                return <p key={index}>{`item - ${elt.id} : ${elt}`} </p>

            })}
        </div> */}
    </div>
  )
}

export default App
