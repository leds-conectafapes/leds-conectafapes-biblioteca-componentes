export { default as GenericButton } from './components/GenericButton/GenericButton.vue';
export { default as GenericDatePicker } from './components/GenericDatePicker/GenericDatePicker.vue';
export { default as GenericInput } from './components/GenericInput/GenericInput.vue';
export { default as GenericSelect } from './components/GenericSelect/GenericSelect.vue';
export { default as GenericStatusTag } from './components/GenericStatusTag/GenericStatusTag.vue';
export { default as GenericSubtitle } from './components/GenericSubtitle/GenericSubtitle.vue';
export { default as GenericTitle } from './components/GenericTitle/GenericTitle.vue';
export { default as GenericTable } from './components/GenericTable/GenericTable.vue';

export type buttonVariant = 'primary' | 'danger' | 'warning' | 'secondary' | 'secondaryDanger' | 'disabled';
export type datePickerState = 'default' | 'error' | 'warning' | 'disabled'
export type inputType = 'text' | 'search' | 'number' | 'email' | 'password' | 'tel' | 'url'
export type inputState = 'default' | 'disabled' | 'error' | 'warning'
export type selectState = 'default' | 'error' | 'warning' | 'disabled'
export type statusTagVariant = 'success' | 'successOutline' | 'warning' | 'secondary' | 'secondaryDanger' | 'disabled'
export type subtitleState = 'default' | 'error'
export type headerColumnType = 'text' | 'date' | 'currency' | 'link' | 'status' | 'actions'
export type titleType = 'h1' | 'h2' | 'h3' | 'title' | 'subtitle' | 'body' | 'caption'
export type radioGroupState = 'default' | 'error' | 'warning' | 'disabled'
export type radioGroupOptions = { text: string, value: string }