<script setup lang="ts">
import { ref, computed } from 'vue';
import GenericStatusTag from './GenericStatusTag.vue'
import dayjs from 'dayjs'

const props = withDefaults(defineProps<{
    headers: { [key: string]: { title: string, type: string, sortable?: boolean} },
    items: Array<{ [key: string]: string | Array<string> }>,
    totalPages: number
}>(), {

});

const pageNumber = defineModel('page', { required: true, type: Number });
const itemsPerPage = defineModel('items-per-page', { required: true, type: Number });

const actionsIcon = {
  view: {
    icon: 'visibility',
    color: 'text-primary-500',
  },
  delete: {
    icon: 'dangerous',
    color: 'text-error-300',
  },
  edit: {
    icon: 'border_color',
    color: 'text-primary-500',
  },
}

const emit = defineEmits<{
  (e: 'action', action: string, itemKey: number): void;
}>();


const actionOnClick = (action: string, itemKey: number) => {
  emit('action', action, itemKey)
};

const hasNextPage = computed(() => pageNumber.value < props.totalPages);
const hasPreviousPage = computed(() => pageNumber.value > 1);

const sortKey = ref('');
const sortDirection = ref('asc');

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

function compareData(data1: string, data2: string) {
  return dayjs(data1).isAfter(dayjs(data2));
}

const sortedData = computed(() => {
  return [...props.items].sort((a: { [key: string]: string | string[] }, b: { [key: string]: string | string[] }) => {
    const modifier = sortDirection.value === 'asc' ? 1 : -1;
    if (sortKey.value === 'date') {
      return compareData(a[sortKey.value] as string, b[sortKey.value] as string) ? modifier : -modifier;
    }
    return a[sortKey.value] > b[sortKey.value] ? modifier : -modifier;
  })
});
</script>

<template>
  <table
    class="table-auto border-gray-300 border rounded-lg"
  >
    <thead>
      <tr class="border-b border-gray-300 font-inter">
        <th
          v-for="(header, key) in props.headers"
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
      <tr
        v-for="(row, rowIndex) in sortedData"
        :key="rowIndex"
        class="border-b border-table-line"
      >
        <td
          v-for="colKey in Object.keys(props.headers)"
          :key="colKey"
          class="px-6 py-4 font-inter text-gray-600"
        >
          <div
            v-if="props.headers[colKey].type === 'actions'"
            class="gap-2"
          >
            <button
              v-for="(action, actionIndex) in row[colKey]"
              :key="actionIndex"
              @click="actionOnClick(action, rowIndex)"
            >
              <span
                class="material-symbols-outlined p-2 cursor-pointer !text-xl"
                :class="actionsIcon[action as keyof typeof actionsIcon].color"
              >
                {{ actionsIcon[action as keyof typeof actionsIcon].icon }}
              </span>
            </button>
          </div>
          <div v-else-if="props.headers[colKey].type === 'status'">
            <GenericStatusTag
              :text="Array.isArray(row[colKey]) ? row[colKey][0] : row[colKey]"
              variant="success"
            />
          </div>
          <div v-else-if="props.headers[colKey].type === 'link'">
            <button
              class="text-primary-500 font-bold underline underline-offset-4 cursor-pointer"
              @click="actionOnClick(colKey + '-link', rowIndex)"
            >
              {{ row[colKey] }}
            </button>
          </div>
          <div v-else-if="props.headers[colKey].type === 'date'">
            {{ dayjs(Array.isArray(row[colKey]) ? row[colKey][0] : row[colKey]).format('DD/MM/YYYY') }}
          </div>
          <div v-else>
            {{ row[colKey] }}
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="mt-4 text-right flex items-center justify-end">
      <span class="whitespace-nowrap text-sm mr-2">Itens por página: </span>
      <!-- <GenericSelect class="relative w-[60px] mr-4" :height="'h-8'" :options="pageSizes" v-model="pageSize"/> -->
      <button 
        :disabled="!hasPreviousPage"
        @click="pageNumber == 1"  
        class="h-8 w-8 rounded hover:bg-gray-100 disabled:opacity-50 ml-6"
      >
        <span class="material-symbols-outlined">first_page</span>
      </button>
      
      
      <button
        @click="pageNumber--"
        :disabled="!hasPreviousPage"
        class="h-8 w-8 rounded hover:bg-gray-100 disabled:opacity-50"
      >
        <span class="material-symbols-outlined">chevron_left</span>
      </button>
      
      <span class="px-2 text-sm">Página {{ pageNumber }} de {{ props.totalPages? props.totalPages : 1 }}</span>
      
      <button
        @click="pageNumber++"
        :disabled="!hasNextPage"
        class="h-8 w-8 rounded hover:bg-gray-100 disabled:opacity-50"
      >
        <span class="material-symbols-outlined">chevron_right</span>
      </button>
      
      <button
        @click="pageNumber = totalPages"
        :disabled="!hasNextPage"
        class="h-8 w-8 rounded hover:bg-gray-100 disabled:opacity-50"
      >
        <span class="material-symbols-outlined">last_page</span>
      </button>
      
    </div>
</template>
