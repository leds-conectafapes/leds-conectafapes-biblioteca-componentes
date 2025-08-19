// Exportação de componentes da biblioteca
export { default as GenericButton } from './components/GenericButton/GenericButton.vue';
export { default as GenericDatePicker } from './components/GenericDatePicker/GenericDatePicker.vue';
export { default as GenericInput } from './components/GenericInput/GenericInput.vue';
export { default as GenericSelect } from './components/GenericSelect/GenericSelect.vue';
export { default as GenericStatusTag } from './components/GenericStatusTag/GenericStatusTag.vue';
export { default as GenericSubtitle } from './components/GenericSubtitle/GenericSubtitle.vue';
export { default as GenericTitle } from './components/GenericTitle/GenericTitle.vue';
export { default as GenericTable } from './components/GenericTable/GenericTable.vue';
export { default as GenericCheckbox } from './components/GenericCheckbox/GenericCheckbox.vue';
export { default as GenericRadioGroup } from './components/GenericRadioGroup/GenericRadioGroup.vue';
export { default as GenericTextArea } from './components/GenericTextArea/GenericTextArea.vue';
export { default as GenericSnackBar } from './components/GenericSnackBar/GenericSnackBar.vue';
export { default as GenericCompactButton } from './components/GenericCompactButton/GenericCompactButton.vue';
export { default as GenericPagination } from './components/GenericPagination/GenericPagination.vue';


// Exportação de types da biblioteca
export type buttonVariant = 'primary' | 'danger' | 'warning' | 'secondary' | 'secondaryDanger' | 'disabled';
export type compactButtonVariant = 'default' | 'danger'
export type datePickerState = 'default' | 'error' | 'warning' | 'disabled'
export type snackBarVariant = 'informative' | 'success' | 'warning' | 'error';
export type inputState = 'default' | 'disabled' | 'error' | 'warning'
export type selectState = 'default' | 'error' | 'warning' | 'disabled'
export type selectOption<T> = { id: string | number, value: T, label: string }
export type statusTagVariant = 'success' | 'successOutline' | 'warning' | 'secondary' | 'secondaryDanger' | 'disabled'
export type subtitleState = 'default' | 'error'

export type TableHeaderColumnType = 'text' | 'date' | 'currency' | 'link' | 'status' | 'actions'
export type TableProps<T extends Record<string, unknown>> = {
  columns: TableHeader<T>[];
  data: T[];
  page?: number;
  itemsPerPage?: number;
  actions?: TableAction<T>[];
  loading?: boolean;
  emptyText?: string
}
export type TableHeader<T extends Record<string, unknown>> = {
  key: keyof T & string;
  title: string;
  sortable?: boolean;
  tooltip?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (value: any, row: T, index: number) => unknown
}
export type TableAction<T extends Record<string, unknown>> = {
  type: 'edit',
  icon?: 'edit',
  variant?: compactButtonVariant,
  onClick: (row: T) => void;
} | {
  type: 'delete',
  icon?: 'delete',
  variant?: compactButtonVariant,
  onClick: (row: T) => void;
} | {
  type: 'view',
  icon?: 'view',
  variant?: compactButtonVariant,
  onClick: (row: T) => void;
} | {
  type: 'open_in_new',
  icon?: 'open_in_new',
  variant?: compactButtonVariant,
  onClick: (row: T) => void;
} | {
  type: 'custom',
  icon: string,
  variant?: compactButtonVariant,
  onClick: (row: T) => void;
}

export type textAreaState = 'default' | 'error' | 'warning' | 'disabled'
export type titleType = 'h1' | 'h2' | 'h3' | 'title' | 'subtitle' | 'body' | 'caption'
export type radioGroupOptions<T> = { id: string, label: string, value: T }