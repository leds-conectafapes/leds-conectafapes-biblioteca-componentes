<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { tableHeader } from '../../types';

type TableProps = {
  columns: tableHeader[];
  data: unknown[];
  loading?: boolean;
  emptyText?: string
}

const props = withDefaults(defineProps<TableProps>(), {
  loading: false,
  emptyText: 'Nenhum resultado encontrado',
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
  <div class="flex flex-col border-gray-300 border rounded-lg">
    <!-- Loading -->
    <div
      v-if="loading"
      class="flex items-center justify-center py-12"
    >
      <div class="text-gray-500">
        Carregando...
      </div>
    </div>

    <!-- Tabela -->
    <div v-else>
      <table class="table-auto w-full">
        <thead>
          <tr class="border-b border-gray-300">
            <th
              v-for="column in columns"
              :key="column.key"
              class="px-6 py-4 text-left font-semibold"
            >
              {{ column.title }}
              <span v-if="column.tooltip">
                
              </span>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="rowData in processedTableData"
            :key="rowData.rowIndex"
            class="border-b hover:bg-gray-50"
          >
            <td
              v-for="cellData in rowData.cells"
              :key="cellData.columnIndex"
              class="px-6 py-4"
            >
              <component
                :is="cellData.content"
                v-if="cellData.isComponent"
              />
              <span v-else>
                {{ cellData.content }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>

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