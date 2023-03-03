![alt FilterField](https://raw.githubusercontent.com/aMahdaoui/FilterField/main/.github/assets/filterFiled.png)

### 📑 Installation

Install via NPM:

```shell
npm install react-mui-filter
```

Or via YARN:

```shell
yarn add react-mui-filter
```

### 📖 Usage

#### Basic Text Filter

The `FilterField` component uses **type** props (which can take: _text_ or _number_ for now ) to display filters according to the specified type.

When the filter icon is clicked, a menu will appear letting the user pick the filter he needs.

##### -> FilterField props:

- `type`: whether 'text' or 'number' default is 'text'
- `locale`: to choose the FilterField language default is 'en' (see supported languages below)
- `onFilterChange`: callback takes the filter (e.g: 'EE', 'NE', 'CONTAINS',... see filters list below) as an argument, fired once the user changes the filter
- `onChangeFilterValue`: callback takes the filter and the value as arguments, fired once the user types a character in the Filter input field.
- `onFilterValueChanged`: callback takes the filter and the value as arguments, fired once the user press the 'Enter' key or the Filter input field is blurred.

```javascript
import { FilterField } from "react-mui-filter";

const MyApp = () => (
  <FilterField
    type='number' // default 'text'
    locale='fr' // default 'en'
    onFilterChange={(filter) => {
        console.log(`The filter has been changed,
            filter: ${filter}`)
    }}
    onFilterValueChanged={(filter, value) => {
        console.log(`Filter value has been changed,
            filter : ${filter}
            value: ${value}`
        )
    }}
  </FilterField>
);
```

##### Demo

![alt simple](https://raw.githubusercontent.com/aMahdaoui/FilterField/main/.github/assets/FilterField-basic.gif)

#### Filters list

The list of filters depends on the selected filter type.
Since react-mui-filter support currently only text and number input types, the list is restricted as the following :

##### -> text

| filter code  | filter name  | description                                                                                    |
| ------------ | ------------ | ---------------------------------------------------------------------------------------------- |
| CONTAINS     | Contains     | To get values where what the user has entered in the input field is a sub-string of each value |
| NOT_CONTAINS | Not contains | The inverse of CONTAINS filter                                                                 |
| EE           | Equal        | To get values equal to the user has entered in the input field                                 |
| NE           | Not Equal    | To get values NOT equal to what the user has entered in the input field                        |

##### -> number

| filter code | filter name           | description                                                                       |
| ----------- | --------------------- | --------------------------------------------------------------------------------- |
| EE          | Equal                 | To get values equal to the user has entered in the input field                    |
| NE          | Not Equal             | To get values NOT equal to what the user has entered in the input field           |
| LT          | Less than             | To get values less than the entered value                                         |
| LTE         | Less than or equal    | To get values less than or equal to the entered value                             |
| GT          | Greater than          | To get values great than the entered value                                        |
| GTE         | Greater than or equal | To get values great than or equal to the entered value                            |
| BETWEEN     | Between               | To get values between the range specified by the user (between value 1 & value 2) |

<br />

### ✨ Useful use cases

##### Can be used to perform filtrable requests from the server.

The values and the filter selected by the user can be used to formulate the request, by adding them properly to the payload or injecting them in the query-string parameters to retrieve filtrable data.

##### Example

A user can filter a table based on the chosen value and filter :

![alt useful use case](https://raw.githubusercontent.com/aMahdaoui/FilterField/main/.github/assets/FilterField-useful.gif)

<br />
### 🌐 Languages

Currently react-mui-filter support 3 languages :

- 🇺🇸 English (English - en), Default
- 🇫🇷 French (Français - fr)
- 🇲🇦 Arabic (العربية - ar)

<br />
### 💻 Technologies

react-mui-filter has been built using the [viteJS](https://vitejs.dev/) and basically with the following tools & libs :

- Typescript
- Material Design : using Material-ui to create better ui components:
- I18n : using react-i18next library
- Testing : using vitest and react-testing-library (unit testing)
- Linting & code formatting : ESlint & prettier

<br />
### 🚧 Next steps

- Add new filter type : **date** to be implemented using material date-picker.
- Add 'pattern' props to the FilterField component (some commonly used pattern email, url, upperCase only, ...)
- Add 'inputProps' props to customize material Input field from the FilterField component
- validate value according to patterns
- Enhance unit test coverage
- ...

<br />
## License

[MIT]
