import { useTranslation } from 'react-i18next';
import { Input } from '@mui/material';

import { extractFilterValueFromRangeValues, revealValueBasedOnFilter } from './helpers';

import {
  FILTER_NUMBER,
  ID_RANGE_FILTER_1,
  ID_RANGE_FILTER_2,
  RANGE_FILTER,
} from '../config/constants';
import { InputFilterFieldProps } from '../types';

function InputFilterField(props: InputFilterFieldProps) {
  const { filterType, filter, filterValue } = props;

  const { t } = useTranslation();

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = event.target;
    if (props.onChange) {
      const isRangeFilter = RANGE_FILTER.includes(filter)
      const isFirstValue = id === ID_RANGE_FILTER_1;
      const finalValue = extractFilterValueFromRangeValues(
        value,
        isFirstValue,
        isRangeFilter,
        filterValue
      );
      props.onChange(finalValue);
    }
  };

  const onValueBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { value, id } = event.target;
    if (props.onBlur) {
      const isFirstValue = id === ID_RANGE_FILTER_1;
      const finalValue = revealValueBasedOnFilter(value, filter,
        isFirstValue,
        filterValue
      );

      props.onBlur(finalValue);
    }
  };

  if (filterType === FILTER_NUMBER && RANGE_FILTER.includes(filter)) {
    return (
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <Input
          id={ID_RANGE_FILTER_1}
          type={filterType as string}
          // placeholder={t('input.placeholderVal1') || ''}
          placeholder={'val 1'}
          onChange={onValueChange}
          onBlur={onValueBlur}
        />
        <span style={{ margin: '0px 20px' }}>{'&'}</span>
        <Input
          id={ID_RANGE_FILTER_2}
          type={filterType as string}
          placeholder={'val 2'}
          onChange={onValueChange}
          onBlur={onValueBlur}
        />
      </div>
    );
  }
  return (
    <Input
      id={'filterinput'}
      type={(filterType as string) || 'text'}
      placeholder={t('input.placeholder') || ''}
      onChange={onValueChange}
      onBlur={onValueBlur}
    />
  );
}

export default InputFilterField;
