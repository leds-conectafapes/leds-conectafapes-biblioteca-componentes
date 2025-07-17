<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import GenericCompactButton from '../GenericCompactButton/GenericCompactButton.vue';
import GenericPagination from '../GenericPagination/GenericPagination.vue';
import type { tableHeader, headerActionType } from '../../types';

type TableProps = {
  columns: tableHeader[];
  data: unknown[];
  totalPages: number;
  totalRecords: number;
  itemsPerPage: number;
  currentPage: number;
  actions?: headerActionType[];
  loading?: boolean;
  emptyText?: string
}

const props = withDefaults(defineProps<TableProps>(), {
  loading: false,
  emptyText: 'Nenhum resultado encontrado',
  actions: () => [],
})

const page = ref(props.currentPage)

const emit = defineEmits<{
  (e: 'update:currentPage', value: number): void
}>()

watch(() => props.currentPage, (value) => {
  page.value = value
})

watch(page, (newPage) => {
  if (newPage !== props.currentPage) {
    emit('update:currentPage', newPage)
  }
})

const internalData = ref<unknown[]>([])

watch(
  () => props.data,
  (newData) => {
    internalData.value = [...newData]
  },
  { immediate: true },
)

function isVueComponent(content: unknown): boolean {
  if (!content || typeof content !== 'object') {
    return false
  }
  try {
    return (
      ('__v_isVNode' in content && content.__v_isVNode === true)
      || ('type' in content && typeof content.type === 'object')
      || ('render' in content && typeof content.render === 'function')
    )
  } catch {
    return false
  }
}

const processedTableData = computed(() => {
  return internalData.value.map((row, rowIndex) => ({
    row: row as Record<string, unknown>,
    rowIndex,
    cells: props.columns.map((column, columnIndex) => {
      const rawValue = (row as Record<string, unknown>)[column.key]
      if (column.render) {
        try {
          const renderedContent = column.render(rawValue, row as Record<string, unknown>, rowIndex)
          return {
            content: renderedContent,
            isComponent: isVueComponent(renderedContent),
            columnIndex,
          }
        } catch (error) {
          console.warn('Erro ao renderizar célula:', error)
          return {
            content: rawValue,
            isComponent: false,
            columnIndex,
          }
        }
      }
      return {
        content: rawValue,
        isComponent: false,
        columnIndex,
      }
    }),
  }))
})
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
              v-if="actions.length > 0"
              class="px-5 py-4 text-left font-semibold text-base rounded-t-lg font-inter"
            >
              Ações
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="rowData in processedTableData"
            :key="rowData.rowIndex"
            class="border-b border-zinc-300"
          >
            <td
              v-for="cellData in rowData.cells"
              :key="cellData.columnIndex"
              class="text-zinc-600 leading-relaxed text-sm px-2 py-3 bg-white rounded-lg font-inter"
            >
              <component
                :is="cellData.content"
                v-if="cellData.isComponent"
              />
              <span v-else>
                {{ cellData.content }}
              </span>
            </td>
            <td
              v-if="actions.length > 0"
              class="flex gap-x-2 bg-white items-center justify-start rounded-lg px-2 py-3"
            >
              <GenericCompactButton
                v-for="action in actions"
                :key="action"
                :icon="action"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div class="flex items-center justify-between py-4 px-5">
        <span class="text-sm text-zinc-700 leading-tight font-inter">
          <a class="font-bold">{{ itemsPerPage * currentPage }}</a> de <a class="font-bold">{{ totalRecords }}</a> resultados
        </span>
        <GenericPagination
          v-model="page"
          :length="totalPages"
        />
      </div>

      <!-- Estado vazio -->
      <div
        v-if="internalData.length === 0"
        class="flex items-center justify-center py-12"
      >
        <span class="text-gray-500">{{ emptyText }}</span>
      </div>
    </div>
  </div>
</template>