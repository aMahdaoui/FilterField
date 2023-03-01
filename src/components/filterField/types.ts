export type Filter = string; // ! To extract filter op types later
export type FilterType = 'text' | 'number' | 'date';
export type FilterOption = {
  // text: string;
  filter: string;
  filterName: string;
  icon: React.ReactElement;
  withTime?: boolean;
  withRange?: boolean;
};

export type FilterFieldProps = {
  type: FilterType;
  onFilterChange?: (filter: string) => void;
  onChangeFilterValue?: (filter: string, filterValue: (string | number)[]) => void;
  onFilterValueChanged?: (filter: string, filterValue: (string | number)[]) => void;
  locale?: string;
};
export type FilterMenuProps = {
  filter: string;
  lang?: string;
  filterType: FilterType;
  onChange: (filter: string) => void; // TODO : handle filter type
};

export type InputFilterFieldProps = {
  // type: Omit<FilterType, 'date'>;
  // type: 'text' | 'number' | ;
  filterType: Omit<FilterType, 'date'>;
  filter: string;
  filterValue: (string | number)[];
  onChange?: (filterValue: (string | number)[]) => void;
  onBlur?: (filterValue: (string | number)[]) => void;
  // translator?: any;
  // locale?: string;
  // dataType?: 'json' | 'xml'
};
