export { default as GenericButton } from './components/GenericButton.vue';
export { default as GenericDatePicker } from './components/GenericDatePicker.vue';
export { default as GenericInput } from './components/GenericInput.vue';
export { default as GenericSelect } from './components/GenericSelect.vue';
export { default as GenericStatusTag } from './components/GenericStatusTag.vue';
export { default as GenericSubtitle } from './components/GenericSubtitle.vue';
export { default as GenericTitle } from './components/GenericTitle.vue';
export { default as GenericTable } from './components/GenericTable.vue';

export type buttonVariant = 'primary' | 'danger' | 'warning' | 'secondary' | 'secondaryDanger' | 'disabled';
export type datePickerState = 'default' | 'error' | 'warning' | 'disabled'
export type inputType = 'text' | 'search' | 'number' | 'email' | 'password' | 'tel' | 'url'
export type inputState = 'default' | 'disabled' | 'error' | 'warning'
export type selectState = 'default' | 'error' | 'warning' | 'disabled'
export type statusTagVariant = 'success' | 'successOutline' | 'warning' | 'secondary' | 'secondaryDanger' | 'disabled'
export type subtitleState = 'default' | 'error'
export type headerColumnType = 'text' | 'date' | 'currency' | 'link' | 'status' | 'actions'
export type titleType = 'h1' | 'h2' | 'h3' | 'title' | 'subtitle' | 'body' | 'caption'