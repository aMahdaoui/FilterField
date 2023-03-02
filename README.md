# FilterField![alt FilterField](https://raw.githubusercontent.com/aMahdaoui/FilterField/R0.0.1/.github/assets/filterFiled.png)

## 📑 Installation

Install via NPM:

```shell
npm install react-mui-filter
```

Or via YARN:

```shell
yarn add react-mui-filter
```

## 📖 Usage

### Basic Text Filter

The `FilterField` component uses a type props (wich can takes : 'text'|'number' ) to display filters according to specified type.

When filter icone clicked, a menu will appear to change the filter.

`FilterField` provides also :

- onFilterValueChanged : triggred when the user click 'Enter' key or when the input text field blur
- onFilterChange : triggred when the user change the filter after clicking the filter icone.

```javascript
import { FilterField } from "react-mui-filter";

const MyApp = () => (
  <FilterField
    type='number' // default 'text'
    locale='fr' // default 'en'
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

![alt simple](https://raw.githubusercontent.com/aMahdaoui/FilterField/R0.0.1/.github/assets/FilterField-basic.gif)

##### FilterField props:

- `type` default is 'text'
- `locale` default is 'en'
- onFilterChange
- onChangeFilterValue
- onFilterValueChanged

#### Filters list

The list of filters depends on the selected filter type.
Since react-mui-filter support currently only text and number input types, the list is restricted as the following :

##### - text

| filter code  | filter name  | description                                                                                    |
| ------------ | ------------ | ---------------------------------------------------------------------------------------------- |
| CONTAINS     | CONTAINS     | To get values where what the user has entered in the input field is a sub-string of each value |
| NOT_CONTAINS | Not contains | The inverse of CONTAINS filter                                                                 |
| EE           | Equa         | To get values equal to the user has entered in the input field                                 |
| NE           | Not Equal    | To get values NOT equal to what the user has entered in the input field                        |

##### - number

| filter code | filter name           | description                                                                       |
| ----------- | --------------------- | --------------------------------------------------------------------------------- |
| EE          | Equa                  | To get values equal to the user has entered in the input field                    |
| NE          | Not Equal             | To get values NOT equal to what the user has entered in the input field           |
| LT          | Less than             | To get values less than the entered value                                         |
| LTE         | Less than or equal    | To get values less than or equal to the entered value                             |
| GT          | Greater than          | To get values great than the entered value                                        |
| GTE         | Greater than or equal | To get values great than or equal to the entered value                            |
| BETWEEN     | Between               | To get values between the range specified by the user (between value 1 & value 2) |

## ✨ Useful use cases

Combined with requests retrieve data from the server the values and the filter selected by the user can be used to update the endpoint url using filter and values in the request.  
A user can filter a table based on value and filter he chose :
![alt useful use case](https://raw.githubusercontent.com/aMahdaoui/FilterField/R0.0.1/.github/assets/FilterField-useful.gif)

## 🌐 Languages Support

Currently react-mui-filter support 3 languages :

- 🇺🇸 English (English - en), Default
- 🇫🇷 French (Français - fr)
- 🇲🇦 Arabic (العربية - ar)

## 💻 Technologies

react-mui-filter has been built using the [viteJS](https://vitejs.dev/) and using basically the following technologies :

- Typescript
- Material Design : using Material-ui to create better ui components:
- I18n : using react-i18next library
- Testing : using vitest (unit testing)
- Linting & code formatting : ESlint & prettier

## 🚧 Next steps

- Implement Date type using date picker
- Enhance unit test coverage
- Add pattern props to FilterField component
- validate value according to patterns
- ...

## License

[MIT]
