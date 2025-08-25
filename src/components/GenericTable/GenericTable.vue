<script setup lang="ts" generic="T extends Record<string, unknown>">
import { computed, ref, watch } from 'vue';
import GenericCompactButton from '../GenericCompactButton/GenericCompactButton.vue';
import GenericPagination from '../GenericPagination/GenericPagination.vue';
import type { TableRender, TableHeader, TableProps, TableAction } from '../../types';
import GenericTooltip from '../GenericTooltip/GenericTooltip.vue';


const {
  columns,
  data,
  itemsPerPage,
  totalItems,
  page,
  actions = [],
  loading = false,
  emptyText = 'Nenhum resultado encontrado',
} = defineProps<TableProps<T>>()


const emit = defineEmits<{
  (e: 'update:page', value: number): void
  (e: 'changePage', value: number): void
}>()

function changePage(value: number) {
  emit('changePage', value)
}

const _page = ref(page ?? 1)

watch(() => page, (newValue) => {
  if (newValue) {
    _page.value = newValue
  }
})

function updatePage(value: number) {
  _page.value = value
  emit('update:page', value)
}

const itemsOfPage = computed(() => {
  if (itemsPerPage && totalItems) {
    const product = itemsPerPage * _page.value
    if (product < totalItems) {
      return product
    } else {
      return totalItems
    }
  }
})

type CellName = `cell-${keyof T & string}`
function getCellName(col: TableHeader<T>): CellName {
  return `cell-${col.key}`
}

function actionWithDefaults(action: TableAction<T>) {
  return {
    icon: action.type === 'custom'
      ? action.icon
      : action.type === 'view'
        ? 'visibility'
        : action.type,
    variant: action.variant ?? 'default',
    ...action,
  }
}

const _actions = computed(() => {
  return actions.map((action) => {
    return actionWithDefaults(action)
  })
})

const someRowsHaveActions = computed(() => {
  return data.some((row) => row.hasOwnProperty('actions'))
})

const _rows = computed(() => {
  return data.map((row) => {
    if (row.hasOwnProperty('render') && typeof row.render !== 'function') {
      throw new TypeError(
        `Linha de dados passados a GenericTable possui 'render' que não é função:\n`
        + JSON.stringify(row)
      )
    }
    const rowHasActions = row.hasOwnProperty('actions')
    if (rowHasActions && !Array.isArray(row.actions)) {
      throw new TypeError(
        `Linha de dados passados a GenericTable possui 'actions' que não é array:\n`
        + JSON.stringify(row)
      )
    }
    const actions: typeof _actions.value | undefined = someRowsHaveActions.value
      ? rowHasActions
        ? (row.actions as TableAction<T>[]).map((action) => actionWithDefaults(action))
        : []
      : _actions.value.length > 0 ? _actions.value : undefined
    return {
      ...row,
      render: row.render as TableRender<T> | undefined,
      actions
    }
  })
})

defineSlots<
{
  row: (_: { rowData: T, rowIndex: number }) => unknown,
  cell: (_: { rowData: T, rowIndex: number }) => unknown
} & {
  [K in CellName]: (_: { rowData: T, rowIndex: number, cellData: T[keyof T] }) => unknown
}>()
</script>

<template>
  <div class="flex flex-col border-zinc-300 border rounded-lg">
    <!-- Loading -->
    <div
      v-if="loading"
      class="flex items-center justify-center py-12"
    >
      <div class="text-gray-500 font-inter">
        Carregando...
      </div>
    </div>

    <!-- Tabela -->
    <div v-else>
      <table class="table-auto w-full">
        <thead>
          <tr class="border-b bg-zinc-100 border-zinc-300 gap-x-2 text-zinc-800 leading-tight rounded-t-lg">
            <th
              v-for="column in columns"
              :key="column.key"
              class="px-5 py-4 text-left font-semibold text-base rounded-t-lg font-inter"
            >
              {{ column.title }}
              <span v-if="column.tooltip" />
            </th>
            <th
              v-if="someRowsHaveActions || _actions.length > 0"
              class="px-5 py-4 text-left font-semibold text-base rounded-t-lg font-inter"
            >
              Ações
            </th>
          </tr>
        </thead>

        <tbody>
          <template
            v-for="(row, index) in _rows"
            :key="index"
          >
            <slot name="row" :rowData="row" :rowIndex="index">
              <tr
                class="border-b border-zinc-300"
              >
                <slot name="cell" :rowData="row" :rowIndex="index">
                  <td
                    v-for="(col, colIndex) in columns"
                    :key="colIndex"
                    class="text-zinc-600 leading-relaxed text-sm px-2 py-3 bg-white rounded-lg font-inter"
                  >
                    <component v-if="col.render" :is="col.render(row[col.key], row, col.key, index)" />

                    <slot v-else :name="getCellName(col)" :rowData="row" :rowIndex="index" :cellData="row[col.key]">
                      <component v-if="row.render" :is="(row.render as TableRender<T>)(row[col.key], row, col.key, index)" />

                      <template v-else>
                        {{ row[col.key] }}
                      </template>
                    </slot>
                  </td>
                </slot>

                <td
                  v-if="someRowsHaveActions"
                  class="flex gap-x-2 bg-white items-center justify-start rounded-lg px-2 py-3"
                >
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
                </td>
                <td
                  v-else-if="_actions.length > 0"
                  class="flex gap-x-2 bg-white items-center justify-start rounded-lg px-2 py-3"
                >
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
                </td>
              </tr>
            </slot>
          </template>
        </tbody>
      </table>

      <!-- Estado vazio -->
      <div
        v-if="data.length === 0"
        class="flex items-center justify-center py-12"
      >
        <span class="text-gray-500">{{ emptyText }}</span>
      </div>

      <div
        v-if="itemsPerPage && totalItems"
        class="flex items-center justify-between py-4 px-5"
      >
        <span class="text-sm text-zinc-700 leading-tight font-inter">
          <a class="font-bold">{{ itemsOfPage }}</a> de <a class="font-bold">{{ totalItems }}</a> resultados
        </span>

        <GenericPagination
          :total-items="totalItems"
          :items-per-page="itemsPerPage"
          :model-value="_page"
          @update:model-value="updatePage"
          @change="changePage"
        />
      </div>
    </div>
  </div>
</template>