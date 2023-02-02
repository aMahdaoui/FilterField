import { useState } from 'react'
// import { useTranslation } from 'react-i18next';
import { Input, TextField } from '@mui/material'

import { InputFilterFieldProps } from '../types';


function InputFilterField(props: InputFilterFieldProps) {
    const {
        type,
        filterValue,
        locale,
        onChange,
    } = props


    const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        onChange && onChange(value);
    }

    return (
        <Input
            type={type}
            placeholder="Filter value"
            value={filterValue}
            onChange={onValueChange}
        />
    )
}

export default InputFilterField   