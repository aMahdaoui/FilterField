import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { getAllFiltersByType, getFilterPropertiesByType } from './helpers';
import { IconButton, ListItemIcon, ListItemText } from '@mui/material';
import { FilterMenuProps } from '../types';

export default function FilterMenu(props: FilterMenuProps) {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { filterType, filter, onChange } = props;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleItemClick = (itemFilter: string) => {
    filter !== itemFilter && onChange(itemFilter);
    handleClose();
  };

  const icone = getFilterPropertiesByType(filterType, filter)?.icon;
  const allFilters = getAllFiltersByType(filterType);

  return (
    <div>
      <IconButton
        className="mui-filterField-icon"
        aria-haspopup="true"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {icone}
      </IconButton>
      <Menu
        className="mui-filterField-menu"
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {allFilters.map((filterOption, index) => (
          <MenuItem
            key={index}
            className="mui-filterField-menuItem"
            onClick={() => handleItemClick(filterOption.filter)}
          >
            <ListItemIcon>{filterOption.icon}</ListItemIcon>
            <ListItemText>{t(`filters.${filterOption.filter}`)}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
