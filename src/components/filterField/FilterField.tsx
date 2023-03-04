import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import FilterMenu from './filterMenu/FilterMenu';
import InputFilterField from './inputFilterField/InputFilterField';

import { FILTER_TEXT } from './config/constants';
import { getDefaultFilterByType } from './filterMenu/helpers';
import { FilterFieldProps, FilterType } from './types';

/* for handling Date Filter fields */
// import DateFilterField from './dateFilterField/DateFilterField';

import '../../config/i18n/i18n';
import './styles/filterField.css';

function FilterField(props: FilterFieldProps) {
  const { type, locale } = props;

  const [lang, setLang] = useState('en');
  const [filter, setFilter] = useState('CONTAINS');
  const [filterValue, setFilterValue] = useState<(string | number)[]>(['', '']);
  const { i18n } = useTranslation();

  useEffect(() => {
    const defaultFilter = getDefaultFilterByType(type as FilterType);
    setFilter(defaultFilter);
  }, [type]);

  if (locale && locale !== lang) {
    setLang(locale);
    i18n.changeLanguage(locale);
  }

  const onFilterChange = (filter: string) => {
    setFilter(filter);
    props.onFilterChange && props.onFilterChange(filter);
  };
  const onChangeValue = (value: (string | number)[]) => {
    props.onChangeFilterValue && props.onChangeFilterValue(filter, value);
  };
  const onValueChanged = (value: (string | number)[]) => {
    setFilterValue(value);
    props.onFilterValueChanged && props.onFilterValueChanged(filter, value);
  };

  return (
    <div className="mui-filterField">
      <FilterMenu
        filter={filter}
        filterType={(type as FilterType) || FILTER_TEXT}
        onChange={onFilterChange}
      />
      <InputFilterField
        filterType={type}
        filter={filter}
        filterValue={filterValue}
        onChange={onChangeValue}
        onBlur={onValueChanged}
      />

      {/* 
            // TODO : Will be handled when supporting Date filter
            
            {type === FILTER_DATE
                ? <DateFilterField />
                : <InputFilterField
                    type={type}
                    filterValue={filterValue}
                    onChange={onChangeValue}
                />
            } */}
    </div>
  );
}

export default FilterField;
