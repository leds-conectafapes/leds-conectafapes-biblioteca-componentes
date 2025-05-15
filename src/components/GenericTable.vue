<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import GenericStatusTag from './GenericStatusTag.vue'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc.js';
dayjs.extend(utc);

const props = withDefaults(defineProps<{
  headers: { [key: string]: { title: string, type: string, sortable?: boolean} },
  items: Array<{ [key: string]: string | Array<string> | number }>,
  totalRecords?: number,
  itemsPerPage?: number,
  totalPages?: number
}>(), {
  itemsPerPage: 15,
  totalRecords: ({ items }) => items.length,
  totalPages: ({ items, itemsPerPage }) => Math.ceil(items.length / itemsPerPage!),
});


const emit = defineEmits<{
  (e: 'action', action: string, itemKey: number): void;
}>();

const actionOnClick = (action: string, itemKey: number) => {
  emit('action', action, itemKey)
};

const pageNumber = defineModel('page', { required: true, type: Number });

const items_paginados = ref<Array<{ [key: string]: string | Array<string> | number }>>([]);
const nao_paginados = props.totalRecords === props.items.length && props.itemsPerPage < props.totalRecords;
onMounted(() => {
  if(nao_paginados) {
    items_paginados.value = props.items.slice((pageNumber.value -1) * props.itemsPerPage, pageNumber.value * props.itemsPerPage)
  } else {
    items_paginados.value = props.items
  }
});

watch(pageNumber, () => {
  if(nao_paginados) {
    items_paginados.value = props.items.slice((pageNumber.value -1) * props.itemsPerPage, pageNumber.value * props.itemsPerPage)
  } else {
    items_paginados.value = props.items
  }
})

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
  return [...items_paginados.value].sort((a: { [key: string]: string | string[] | number }, b: { [key: string]: string | string[] | number }) => {
    const modifier = sortDirection.value === 'asc' ? 1 : -1;
    if (sortKey.value === 'date') {
      return compareData(a[sortKey.value] as string, b[sortKey.value] as string) ? modifier : -modifier;
    }
    return a[sortKey.value] > b[sortKey.value] ? modifier : -modifier;
  })
});

const visiblePages = computed(() => {
  const currentPage = pageNumber.value;
  const pagesToShow = 3;

  const startPage = Math.max(1, currentPage - pagesToShow);
  const endPage = Math.min(props.totalPages, currentPage + pagesToShow);

  return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
});

function goToPage(page: number) {
  pageNumber.value = page;
}

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
};

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
  open_in_new: {
    icon: 'open_in_new',
    color: 'text-primary-500',
  },
}
</script>

<template>
  <div class="flex flex-col border-gray-300 border rounded-lg">
    <table
      class="table-auto"
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
              class="gap-2 flex"
            >
              <div v-for="(action, actionIndex) in row[colKey]" :key="actionIndex">
                <button
                  v-if="typeof action === 'string'"
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
            </div>
            <div v-else-if="props.headers[colKey].type === 'status' && typeof row[colKey] === 'string'">
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
              {{ dayjs(Array.isArray(row[colKey]) ? row[colKey][0] : row[colKey]).utc().format('DD/MM/YYYY') }}
            </div>
            <div v-else-if="props.headers[colKey].type === 'currency'">
              {{ formatCurrency(row[colKey] as number) }}
            </div>
            <div v-else>
              {{ row[colKey] }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="relative flex pt-2 items-center justify-center font-inter" v-if="props.totalRecords === 0">
        <span>Nenhum resultado encontrado</span>
    </div>
    <div class="py-4 px-5  text-right flex items-center justify-between">
      <span class="ml-1"><span class="font-semibold">{{ items_paginados.length + ((pageNumber - 1) * props.itemsPerPage ) }}</span> de <span class="font-semibold">{{ props.totalRecords }}</span> resultados</span>
      <div class="flex items-center justify-center h-9 border border-primary-200 rounded-lg align-middle">
        <button @click="pageNumber--" :disabled="!hasPreviousPage" class="cursor-pointer w-9 flex items-center justify-center">
          <span class="material-symbols-outlined text-primary-500">chevron_left</span>
        </button>
        
        <div class="flex items-center cursor-pointer">
          <span 
            v-for="page in visiblePages" 
            :key="page"
            :class="{ 
              'text-primary-500 bg-primary-100/44': page === pageNumber,
            }"
            class="w-9 h-9 flex items-center justify-center"
            @click="goToPage(page)"
          >
            {{ page }}
          </span>
        </div>
        
        <button @click="pageNumber++" :disabled="!hasNextPage" class="cursor-pointer w-9 flex items-center justify-center">
          <span class="material-symbols-outlined text-primary-500">chevron_right</span>
        </button>
      </div>
    </div>
    
  </div>
</template>
