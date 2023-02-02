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
  onFilterValueChange?: (filter: string, filterValue: string | number) => void;
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
  type: 'text' | 'number';
  filterValue: string | number;
  locale?: string;
  onChange?: (filterValue: string) => void;
  // dataType?: 'json' | 'xml'
};
