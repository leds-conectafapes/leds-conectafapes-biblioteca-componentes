<script setup lang="ts">
import { computed } from 'vue'
import GenericButton from '../GenericButton/GenericButton.vue'

type PaginationProps = {
  length: number
  modelValue: number
}

const props = defineProps<PaginationProps>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

function goToPage(page: number) {
  if (typeof page === 'number' && page !== props.modelValue) {
    emit('update:modelValue', page)
  }
}

function prevPage() {
  if (props.modelValue > 1) {
    emit('update:modelValue', props.modelValue - 1)
  }
}

function nextPage() {
  if (props.modelValue < props.length) {
    emit('update:modelValue', props.modelValue + 1)
  }
}

function getPages(current: number, total: number): (number | string)[] {
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
  getPages(props.modelValue, props.length)
)
</script>

<template>
  <div class="flex w-fit border border-gray-300 rounded-lg overflow-hidden">
    <GenericButton
      variant="secondary"
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
      :variant="item === props.modelValue ? 'primary' : 'secondary'"
      class="h-10 w-10 rounded-none"
      :disabled="item === '...'"
      @click="goToPage(item as number)"
    />

    <GenericButton
      variant="secondary"
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
