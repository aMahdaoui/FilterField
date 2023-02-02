import { useState } from 'react'
import { useTranslation } from 'react-i18next';

import FilterMenu from './filterMenu/FilterMenu'
import InputFilterField from './inputFilterField/InputFilterField';

import { FILTER_DATE, FILTER_TEXT } from './config/constants'
import { getDefaultFilterByType } from './filterMenu/helpers'
import { FilterFieldProps, FilterType } from './types'

import './config/i18n';
import './filterField.css'


function TextFilter(props: FilterFieldProps) {

    const { type, locale } = props

    // get default filter by type
    const defaultFilter = getDefaultFilterByType(type as FilterType)

    const [lang, setLang] = useState('en')
    const [filter, setFilter] = useState(defaultFilter)
    const [filterValue, setFilterValue] = useState<string | number>('')


    // useTranslation
    const { t, i18n } = useTranslation();
    if (locale && locale !== lang) {
        setLang(locale)
        i18n.changeLanguage(locale)
    }


    const onFilterChange = (filter: string) => {
        // event.preventDefault()
        setFilter(filter)
        props.onFilterChange && props.onFilterChange(filter)
    }
    const onValueChange = (value: string | number) => {
        setFilterValue(value);
        props.onFilterValueChange && props.onFilterValueChange(filter, value)
    }

    return (
        <div className='mui-filterField'>
            <FilterMenu
                filter={filter}
                filterType={(type as FilterType) || FILTER_TEXT}
                onChange={onFilterChange}
                lang={lang}
            />
            {type === FILTER_DATE
                ? <h1>Date</h1>
                : <InputFilterField
                    type={type}
                    filterValue={filterValue}
                    onChange={onValueChange}
                />
            }
        </div>
    )
}

export default TextFilter   