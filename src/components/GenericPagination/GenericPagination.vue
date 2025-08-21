<script setup lang="ts">
import { computed } from 'vue'
import GenericButton from '../GenericButton/GenericButton.vue'

type PaginationProps = {
  totalItems: number
  itemsPerPage: number
  modelValue: number
}

const {
  totalItems,
  itemsPerPage,
  modelValue,
} = defineProps<PaginationProps>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
  (e: 'change', value: number): void
}>()


function updateModelValue(value: number) {
  emit('update:modelValue', value)
  emit('change', value)
}

const totalPages = computed(() => Math.ceil(totalItems / itemsPerPage) || 1)

function goToPage(page: number | string) {
  if (typeof page === 'number' && page !== modelValue) {
    updateModelValue(page)
  }
}

function prevPage() {
  if (modelValue > 1) {
    updateModelValue(modelValue - 1)
  }
}

function nextPage() {
  if (modelValue < totalPages.value) {
    updateModelValue(modelValue + 1)
  }
}

function getPages(current: number): (number | string)[] {
  const total = totalPages.value
  const pages: (number | string)[] = []

  if (total <= 5) {
    for (let i = 1; i <= total; i++) pages.push(i)
  } else if (current <= 3) {
    pages.push(1, 2, 3, 4, 5, '...', total)
  } else if (current >= total - 2) {
    pages.push(1, '...', total - 4, total - 3, total - 2, total - 1, total)
  } else {
    pages.push(1, '...', current - 1, current, current + 1, '...', total)
  }

  return pages
}

const visiblePages = computed(() =>
  getPages(modelValue)
)
</script>

<template>
  <div class="flex w-fit border border-gray-300 rounded-lg overflow-hidden">
    <GenericButton
      :variant="modelValue > 1 ? 'secondary' : 'disabled'"
      class="h-10 w-10 rounded-none"
      aria-label="Página anterior"
      @click="prevPage"
    >
      <template #label>
        <span class="material-symbols-outlined">arrow_back_ios</span>
      </template>
    </GenericButton>

    <GenericButton
      v-for="(item, index) in visiblePages"
      :key="index"
      :label="item.toString()"
      :variant="item === modelValue ? 'primary' : 'secondary'"
      class="h-10 w-10 rounded-none"
      :disabled="item === '...'"
      @click="goToPage(item)"
    />

    <GenericButton
      :variant="modelValue < totalPages ? 'secondary' : 'disabled'"
      class="h-10 w-10 rounded-none"
      aria-label="Próxima página"
      @click="nextPage"
    >
      <template #label>
        <span class="material-symbols-outlined">arrow_forward_ios</span>
      </template>
    </GenericButton>
  </div>
</template>
