<script setup lang="ts" generic="T extends Record<string, unknown>">
import { computed, ref, watch } from "vue";
import GenericCompactButton from "../GenericCompactButton/GenericCompactButton.vue";
import GenericPagination from "../GenericPagination/GenericPagination.vue";
import type {
  TableRender,
  TableHeader,
  TableProps,
  TableAction,
} from "../../types";
import GenericTooltip from "../GenericTooltip/GenericTooltip.vue";
import GenericIcon from "../GenericIcon/GenericIcon.vue";

const {
  columns,
  data,
  itemsPerPage,
  totalItems,
  page,
  actions = [],
  loading = false,
  emptyText = "Nenhum resultado encontrado",
} = defineProps<TableProps<T>>();

const emit = defineEmits<{
  (e: "update:page", value: number): void;
  (e: "changePage", value: number): void;
}>();

function changePage(value: number) {
  emit("changePage", value);
}

const _page = ref(page ?? 1);

watch(
  () => page,
  (newValue) => {
    if (newValue) {
      _page.value = newValue;
    }
  },
);

function updatePage(value: number) {
  _page.value = value;
  emit("update:page", value);
}

const itemsOfPage = computed(() => {
  if (itemsPerPage && totalItems) {
    const product = itemsPerPage * _page.value;
    if (product < totalItems) {
      return product;
    } else {
      return totalItems;
    }
  }
});

type CellName = `cell-${string}`;
function getCellName(col: TableHeader<T>): CellName {
  return `cell-${col.key}`;
}

function actionWithDefaults(action: TableAction<T>) {
  return {
    icon:
      action.type === "custom"
        ? action.icon
        : action.type === "view"
          ? "visibility"
          : action.type,
    variant: action.variant ?? "default",
    ...action,
  };
}

const _actions = computed(() => {
  return actions.map((action) => {
    return actionWithDefaults(action);
  });
});

const someRowsHaveActions = computed(() => {
  return data.some((row) => row.hasOwnProperty("actions"));
});

const _rows = computed(() => {
  return data.map((row) => {
    if (row.hasOwnProperty("render") && typeof row.render !== "function") {
      throw new TypeError(
        `Linha de dados passados a GenericTable possui 'render' que não é função:\n` +
          JSON.stringify(row),
      );
    }
    const rowHasActions = row.hasOwnProperty("actions");
    if (rowHasActions && !Array.isArray(row.actions)) {
      throw new TypeError(
        `Linha de dados passados a GenericTable possui 'actions' que não é array:\n` +
          JSON.stringify(row),
      );
    }
    const actions: typeof _actions.value | undefined = someRowsHaveActions.value
      ? rowHasActions
        ? (row.actions as TableAction<T>[]).map((action) =>
            actionWithDefaults(action),
          )
        : []
      : _actions.value.length > 0
        ? _actions.value
        : undefined;
    return {
      ...row,
      render: row.render as TableRender<T> | undefined,
      actions,
    };
  });
});

const tooltips = ref(
  Object.fromEntries(columns.map((col) => [col.key, false])),
);

const colspan = computed(() => {
  let nColumns = columns.length
  if (someRowsHaveActions.value || _actions.value.length > 0) {
    nColumns = nColumns + 1
  }
  return nColumns
})

defineSlots<
  {
    row: (_: { rowData: T; rowIndex: number }) => unknown;
    cell: (_: { rowData: T; rowIndex: number }) => unknown;
  } & {
    [K in CellName]: (_: {
      rowData: T;
      rowIndex: number;
      cellData: unknown;
    }) => unknown;
  }
>();
</script>

<template>
  <table
    class="border border-zinc-300 rounded-lg border-separate border-spacing-0 w-full"
  >
    <td v-if="loading" :colspan>
      <div class="flex items-center justify-center py-12">
        <div class="text-gray-500 font-inter">Carregando...</div>
      </div>
    </td>

    <template v-else>
      <thead>
        <tr
          class="bg-zinc-100 *:border-b *:border-zinc-300 gap-x-2 text-zinc-800 leading-tight"
        >
          <th
            v-for="column in columns" :key="column.key"
            class="px-5 py-4 text-left font-semibold text-base font-inter break-normal"
            @mouseover="tooltips[column.key] = true"
            @mouseout="tooltips[column.key] = false"
          >
            <template v-if="column.tooltip">
              {{ column.title }}&nbsp;

              <GenericTooltip
                :text="column.tooltip"
                class="inline p-1"
                v-model="tooltips[column.key]"
              >
                <GenericIcon
                  class="text-primary-500 leading-none relative top-1"
                  name="info"
                />
              </GenericTooltip>
            </template>

            <template v-else>
              {{ column.title }}
            </template>
          </th>
          <th
            v-if="someRowsHaveActions || _actions.length > 0"
            class="px-5 py-4 text-left font-semibold text-base rounded-t-lg font-inter"
          >
            Ações
          </th>
        </tr>
      </thead>

      <td :colspan v-if="data.length === 0" class="border-b border-zinc-300">
        <div

          class="sticky flex items-center justify-center py-12 left-0 lg:static"
        >
          <span class="text-sm text-gray-500 lg:text-base">{{
            emptyText
          }}</span>
        </div>
      </td>

      <tbody v-else>
        <template v-for="(row, index) in _rows" :key="index">
          <slot name="row" :rowData="row" :rowIndex="index">
            <tr class="*:border-b *:border-zinc-300">
              <slot name="cell" :rowData="row" :rowIndex="index">
                <td
                  v-for="(col, colIndex) in columns"
                  :key="colIndex"
                  class="text-zinc-600 leading-relaxed text-sm px-5 py-4 bg-white font-inter"
                >
                  <component
                    v-if="col.render"
                    :is="col.render(row[col.key], row, col.key, index)"
                  />

                  <slot
                    v-else
                    :name="getCellName(col)"
                    :rowData="row"
                    :rowIndex="index"
                    :cellData="row[col.key]"
                  >
                    <component
                      v-if="row.render"
                      :is="
                        (row.render as TableRender<T>)(
                          row[col.key],
                          row,
                          col.key,
                          index,
                        )
                      "
                    />

                    <template v-else>
                      {{ row[col.key] }}
                    </template>
                  </slot>
                </td>
              </slot>

              <td
                v-if="someRowsHaveActions"
                class="bg-white rounded-lg px-5 py-4"
              >
                <div class="flex gap-x-2 items-center justify-start">
                  <template
                    v-for="(action, index) in row.actions"
                    :key="index"
                  >
                    <GenericTooltip
                      v-if="action.tooltip"
                      :text="action.tooltip"
                    >
                      <GenericCompactButton
                        :icon="action.icon"
                        :variant="action.variant"
                        @click="action.onClick(row)"
                      />
                    </GenericTooltip>

                    <GenericCompactButton
                      v-else
                      :icon="action.icon"
                      :variant="action.variant"
                      @click="action.onClick(row)"
                    />
                  </template>
                </div>
              </td>
              <td
                v-else-if="_actions.length > 0"
                class="bg-white rounded-lg px-5 py-4"
              >
                <div class="flex gap-x-2 items-center justify-start">
                  <template
                    v-for="(action, index) in _actions"
                    :key="index"
                  >
                    <GenericTooltip
                      v-if="action.tooltip"
                      :text="action.tooltip"
                    >
                      <GenericCompactButton
                        :icon="action.icon"
                        :variant="action.variant"
                        @click="action.onClick(row)"
                      />
                    </GenericTooltip>

                    <GenericCompactButton
                      v-else
                      :icon="action.icon"
                      :variant="action.variant"
                      @click="action.onClick(row)"
                    />
                  </template>
                </div>
              </td>
            </tr>
          </slot>
        </template>
      </tbody>

      <tfoot>
        <tr
          v-if="itemsPerPage && totalItems"
        >
        <td :colspan>
          <div
            class="flex flex-col gap-3 items-center py-4 px-5 lg:flex-row lg:justify-between"
          >
            <span class="text-sm text-zinc-700 leading-tight font-inter">
              <strong>{{ itemsOfPage }}</strong> de
              <strong>{{ totalItems }}</strong> resultados
            </span>

            <GenericPagination
              :total-items="totalItems"
              :items-per-page="itemsPerPage"
              :model-value="_page"
              @update:model-value="updatePage"
              @change="changePage"
            />
          </div>
          </td>
        </tr>
      </tfoot>
    </template>
  </table>
</template>
