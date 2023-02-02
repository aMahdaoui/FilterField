import { useState } from 'react'
import './App.css'
import FilterField from './components/filterField/FilterField'
import data from '../public/data.json'

function App() {
  // TODO : 
  /*
  ! Todo 1 - Implment mui-date picker component
    TODO 2 - Add locales i18next - done
    TODO 3 - unit tests
  * TODO 4 - styles - Done

  */
  // const [filter, setFilter] = useState('text')
  return (
    <div className="App">
      <h1>React mui filters</h1>

      <div className="card">
        <FilterField
          type='text'
          locale='fr'
          onFilterChange={(filter) => console.log('Ehh filter changed', filter)}
          onFilterValueChange={(filter, value) => console.log('Filter value changed', filter, value)}
        />
        {/* <FilterField
          type='number'
          locale='en'
          onFilterChange={(filter) => console.log('Ehh filter changed', filter)}
          onFilterValueChange={(filter, value) => console.log('Filter value changed', filter, value)}
        />
        <FilterField
          type='date'
          locale='en'
          onFilterChange={(filter) => console.log('Ehh filter changed', filter)}
          onFilterValueChange={(filter, value) => console.log('Filter value changed', filter, value)}
        /> */}
      </div>
      {/* <div>
                <h3>{`Filer Result Data : ${filter} - ${filterValue}`}</h3>
                {props.data && props.data.filter((elt: any) => elt.id > 4 && elt.id < 8).map((elt: any, index: number) => {
                    return <p key={index}>{`item - ${elt.id} : ${elt}`} </p>

                })}
            </div> */}
    </div>
  )
}

export default App
