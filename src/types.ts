import type { VNode } from "vue";

// Exportação de componentes da biblioteca
export { default as GenericButton } from "./components/GenericButton/GenericButton.vue";
export { default as GenericDatePicker } from "./components/GenericDatePicker/GenericDatePicker.vue";
export { default as GenericInput } from "./components/GenericInput/GenericInput.vue";
export { default as GenericSelect } from "./components/GenericSelect/GenericSelect.vue";
export { default as GenericStatusTag } from "./components/GenericStatusTag/GenericStatusTag.vue";
export { default as GenericSubtitle } from "./components/GenericSubtitle/GenericSubtitle.vue";
export { default as GenericTitle } from "./components/GenericTitle/GenericTitle.vue";
export { default as GenericTable } from "./components/GenericTable/GenericTable.vue";
export { default as GenericCheckbox } from "./components/GenericCheckbox/GenericCheckbox.vue";
export { default as GenericRadioGroup } from "./components/GenericRadioGroup/GenericRadioGroup.vue";
export { default as GenericTextArea } from "./components/GenericTextArea/GenericTextArea.vue";
export { default as GenericSnackBar } from "./components/GenericSnackBar/GenericSnackBar.vue";
export { default as GenericCompactButton } from "./components/GenericCompactButton/GenericCompactButton.vue";
export { default as GenericPagination } from "./components/GenericPagination/GenericPagination.vue";
export { default as GenericTooltip } from "./components/GenericTooltip/GenericTooltip.vue";
export { default as GenericIcon } from "./components/GenericIcon/GenericIcon.vue";

// Exportação de types da biblioteca
export type IconVariant = "outlined" | "rounded" | "sharp";
export type buttonVariant =
  | "primary"
  | "danger"
  | "warning"
  | "secondary"
  | "secondaryDanger"
  | "disabled";
export type CardVariant = "default" | "success" | "error";
export type GenericCardProps = {
  title?: string;
  titleClass?: string;
  text?: string;
  caption?: string;
  captionClass?: string;
  tooltip?: string;
  tooltipIcon?: string;
} & ({
  textVariant: CardVariant;
  captionVariant?: "default";
} | {
  textVariant?: "default";
  captionVariant: CardVariant;
} | {
  textVariant?: "default";
  captionVariant?: "default";
})
export type compactButtonVariant = "default" | "danger";
export type snackBarVariant = "informative" | "success" | "warning" | "error";
export type inputState = "default" | "disabled" | "error" | "warning";
export type selectOption<T> = { id: string | number; value: T; label: string };
export type StatusTagVariant =
  | "info"
  | "infoStrong"
  | "success"
  | "warn"
  | "warnStrong"
  | "critical"
  | "custom";
export type subtitleState = "default" | "error";

export type TableRender<T extends Record<string, unknown>> = (
  value: T[keyof T],
  row: T,
  col: keyof T,
  index: number,
) => VNode | (() => VNode) | (() => VNode[]);

export type TableHeaderColumnType =
  | "text"
  | "date"
  | "currency"
  | "link"
  | "status"
  | "actions";
export type TableProps<T extends Record<string, unknown>> = {
  columns: TableHeader<T>[];
  data: T[];
  page?: number;
  itemsPerPage?: number;
  totalItems?: number;
  actions?: TableAction<T>[];
  loading?: boolean;
  emptyText?: string;
};
export type TableHeader<T extends Record<string, unknown>> = {
  key: keyof T & string;
  title: string;
  sortable?: boolean;
  tooltip?: string;
  render?: TableRender<T>;
};
export type TableAction<T extends Record<string, unknown>> =
  | {
      type: "edit";
      icon?: "edit";
      variant?: compactButtonVariant;
      tooltip?: string;
      onClick: (row: T) => void;
    }
  | {
      type: "delete";
      icon?: "delete";
      variant?: compactButtonVariant;
      tooltip?: string;
      onClick: (row: T) => void;
    }
  | {
      type: "view";
      icon?: "visibility";
      variant?: compactButtonVariant;
      tooltip?: string;
      onClick: (row: T) => void;
    }
  | {
      type: "open_in_new";
      icon?: "open_in_new";
      variant?: compactButtonVariant;
      tooltip?: string;
      onClick: (row: T) => void;
    }
  | {
      type: "custom";
      icon: string;
      tooltip?: string;
      variant?: compactButtonVariant;
      onClick: (row: T) => void;
    };

export type textAreaState = "default" | "error" | "warning" | "disabled";
export type titleType =
  | "h1"
  | "h2"
  | "h3"
  | "title"
  | "subtitle"
  | "body"
  | "caption";
export type radioGroupOptions<T> = { id: string; label: string; value: T };
export type RadioGroupDirection = "column" | "row";
