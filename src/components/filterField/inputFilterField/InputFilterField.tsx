import { useTranslation } from 'react-i18next';
import { Input } from '@mui/material'

import { extractFilterValueFromRangeValues } from './helpers';

import { FILTER_NUMBER, ID_RANGE_FILTER_1, ID_RANGE_FILTER_2, RANGE_FILTER } from '../config/constants';
import { InputFilterFieldProps } from '../types';

function InputFilterField(props: InputFilterFieldProps) {
    const {
        filterType,
        filter,
        filterValue,
    } = props

    const { t } = useTranslation();



    const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, id } = event.target;
        if (props.onChange) {
            if (RANGE_FILTER.includes(filter)) {
                const isFirstValue = id === ID_RANGE_FILTER_1;
                const rangeValue = extractFilterValueFromRangeValues(value, isFirstValue, filterValue)
                props.onChange && props.onChange(rangeValue);
            }
            else props.onChange && props.onChange([value]);
        }
    }

    if (filterType === FILTER_NUMBER && RANGE_FILTER.includes(filter)) {
        return <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <Input
                id={ID_RANGE_FILTER_1}
                type={filterType as string}
                // placeholder={t('input.placeholderVal1') || ''}
                placeholder={'val 1'}
                value={filterValue[0]}
                onChange={onValueChange}
            />
            <span style={{ margin: '0px 20px' }}>{'&'}</span>
            <Input
                id={ID_RANGE_FILTER_2}
                type={filterType as string}
                placeholder={'val 2'}
                value={filterValue[1] || ''}
                onChange={onValueChange}
            />
        </div>
    }
    return (
        <Input
            id={'filterinput'}
            type={filterType as string || 'text'}
            placeholder={t('input.placeholder') || ''}
            value={filterValue[0]}
            onChange={onValueChange}
        />
    )
}

export default InputFilterField   