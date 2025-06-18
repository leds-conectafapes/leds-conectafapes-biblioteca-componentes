<script setup lang="ts">
import { ref, computed } from 'vue';
import GenericRow from '../GenericRow/GenericRow.vue';
import dayjs from 'dayjs'
import * as utc from 'dayjs/plugin/utc';
import type { tableHeaderType, tableItemType } from '../../types';
dayjs.extend(utc.default ?? utc);

const props = withDefaults(defineProps<{
  header: tableHeaderType<string>,
  items: tableItemType<tableHeaderType>[],
  itemsPerPage?: number,
  totalRecords?: number,
  totalPages?: number
  currentPageNumber?: number
}>(), {
  totalRecords: 0,
  totalPages: 0,
  currentPageNumber: 1,
  itemsPerPage: 15,
});

const emit = defineEmits<{
  (e: 'action', action: string, itemKey: number | undefined): void;
  (e: 'pageChange', page: number): void;
}>();

const actionOnClick = (action: string, itemKey: number | undefined) => {
  emit('action', action, itemKey)
};

const goToPage = (page: number) => {
  emit('pageChange', page)
}

const hasNextPage = computed(() => props.currentPageNumber < props.totalPages);
const hasPreviousPage = computed(() => props.currentPageNumber > 1);

const sortKey = ref('');
const sortDirection = ref('');

const visiblePagesNumbers = computed(() => {
  const pagesToShow = 3;

  const startPage = Math.max(1, props.currentPageNumber - pagesToShow);
  const endPage = Math.min(props.totalPages, props.currentPageNumber + pagesToShow);

  return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
});

function sortTable(header: { title: string, type: string, sortable?: boolean}, key: string) {
  if (!header.sortable) {
    return
  }
  if (sortKey.value === key) {
    if (sortDirection.value === 'desc') {
      sortKey.value = '';
      sortDirection.value = '';
    } else {
      sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    }
  } else {
    sortKey.value = key;
    sortDirection.value = 'asc';
  }
}

function compareDate(data1: string, data2: string) {
  return dayjs(data1).isAfter(dayjs(data2));
}

const sortedData = computed(() => {
  return [...props.items].sort((a: { [key: string]: string | string[] | number | Array<number> }, b: { [key: string]: string | string[] | number | Array<number> }) => {
    const modifier = sortDirection.value === 'asc' ? 1 : -1;
    if (sortKey.value === 'date') {
      return compareDate(a[sortKey.value] as string, b[sortKey.value] as string) ? modifier : -modifier;
    }
    return a[sortKey.value] > b[sortKey.value] ? modifier : -modifier;
  }).slice((props.currentPageNumber -1) * props.itemsPerPage, props.currentPageNumber * props.itemsPerPage)
});
</script>

<template>
  <div class="flex flex-col border-gray-300 border rounded-lg">
    <table
      class="table-auto"
    >
      <thead>
        <tr class="border-b border-gray-300 font-inter">
          <th
            v-for="(header, key) in props.header"
            :key="key"
            class="px-6 py-4 text-gray-700 font-semibold"
            :class="{
              'cursor-pointer': header.sortable,
            }"
            @click="sortTable(header, key as string)"
          >
            <div class="flex items-center gap-2">
              {{ header.title }}
              <span
                v-if="header.sortable && sortKey === key"
                class="material-symbols-outlined"
              >
                {{ sortDirection === 'asc' ? 'arrow_downward' : 'arrow_upward' }}
              </span>
            </div>
          </th>
        </tr>
      </thead>
      
      <tbody>
        <GenericRow
          v-for="(rowItem, rowIndex) in sortedData"
          :key="rowIndex"
          :item="rowItem"
          :header="props.header"
          @action="actionOnClick"
        />
      </tbody>
    </table>
    <div
      v-if="totalRecords === 0"
      class="relative flex pt-2 items-center justify-center font-inter"
    >
      <span>Nenhum resultado encontrado</span>
    </div>
    <div class="py-4 px-5  text-right flex items-center justify-between">
      <span class="ml-1"><span class="font-semibold">{{ sortedData.length + ((currentPageNumber - 1) * props.itemsPerPage ) }}</span> de <span class="font-semibold">{{ totalRecords }}</span> resultados</span>
      <div class="flex items-center justify-center h-9 border border-primary-200 rounded-lg align-middle">
        <button
          :disabled="!hasPreviousPage"
          class="cursor-pointer w-9 flex items-center justify-center"
          @click="goToPage(props.currentPageNumber - 1)"
        >
          <span class="material-symbols-outlined text-primary-500">chevron_left</span>
        </button>
        
        <div class="flex items-center cursor-pointer">
          <span 
            v-for="pageNumber in visiblePagesNumbers" 
            :key="pageNumber"
            :class="{ 
              'text-primary-500 bg-primary-100/44': pageNumber === currentPageNumber,
            }"
            class="w-9 h-9 flex items-center justify-center"
            @click="goToPage(pageNumber)"
          >
            {{ pageNumber }}
          </span>
        </div>
        
        <button
          :disabled="!hasNextPage"
          class="cursor-pointer w-9 flex items-center justify-center"
          @click="goToPage(props.currentPageNumber + 1)"
        >
          <span class="material-symbols-outlined text-primary-500">chevron_right</span>
        </button>
      </div>
    </div>
  </div>
</template>
