<script setup lang="ts" generic="T extends Record<string, unknown>">
import { computed, ref, watch } from 'vue';
import GenericCompactButton from '../GenericCompactButton/GenericCompactButton.vue';
import GenericPagination from '../GenericPagination/GenericPagination.vue';
import type { TableRender, TableHeader, TableProps } from '../../types';


const {
  columns,
  data,
  itemsPerPage,
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

type CellName = `cell-${keyof T & string}`
function getCellName(col: TableHeader<T>): CellName {
  return `cell-${col.key}`
}

const _actions = computed(() => {
  return actions.map((action) => {
    return {
      icon: action.icon ?? action.type,
      variant: action.variant ?? 'default',
      ...action,
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
              v-if="_actions.length > 0"
              class="px-5 py-4 text-left font-semibold text-base rounded-t-lg font-inter"
            >
              Ações
            </th>
          </tr>
        </thead>

        <tbody>
          <template
            v-for="(row, index) in data"
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
                    <component v-if="col.render" :is="col.render(row[col.key], row, index)" />

                    <slot v-else :name="getCellName(col)" :rowData="row" :rowIndex="index" :cellData="row[col.key]">
                      <component v-if="row.render" :is="(row.render as TableRender<T>)(row[col.key], row, index)" />

                      <template v-else>
                        {{ row[col.key] }}
                      </template>
                    </slot>
                  </td>
                </slot>

                <td
                  v-if="_actions.length > 0"
                  class="flex gap-x-2 bg-white items-center justify-start rounded-lg px-2 py-3"
                >
                  <GenericCompactButton
                    v-for="(action, index) in _actions"
                    :key="index"
                    :icon="action.icon"
                    :variant="action.variant"
                    @click="action.onClick(row)"

                  />
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
        v-if="itemsPerPage"
        class="flex items-center justify-between py-4 px-5"
      >
        <span class="text-sm text-zinc-700 leading-tight font-inter">
          <a class="font-bold">{{ itemsPerPage * _page }}</a> de <a class="font-bold">{{ data.length }}</a> resultados
        </span>

        <GenericPagination
          :total-items="data.length"
          :items-per-page="itemsPerPage"
          :model-value="_page"
          @update:model-value="updatePage"
          @change="changePage"
        />
      </div>
    </div>
  </div>
</template>