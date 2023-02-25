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
import './filterField.css';

function TextFilter(props: FilterFieldProps) {
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
  const onValueChange = (value: (string | number)[]) => {
    setFilterValue(value);
    props.onFilterValueChange && props.onFilterValueChange(filter, value);
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
        onChange={onValueChange}
      />

      {/* 
            // TODO : Will be handled when supporting Date filter
            
            {type === FILTER_DATE
                ? <DateFilterField />
                : <InputFilterField
                    type={type}
                    filterValue={filterValue}
                    onChange={onValueChange}
                />
            } */}
    </div>
  );
}

export default TextFilter;
