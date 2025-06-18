<script setup lang="ts">
import { computed, useAttrs } from 'vue';
import type { HTMLAttributes } from 'vue';
import type { tableItemType, tableHeaderType } from '../../types';
import GenericStatusTag from '../GenericStatusTag/GenericStatusTag.vue';
import dayjs from 'dayjs'
import * as utc from 'dayjs/plugin/utc';
dayjs.extend(utc.default ?? utc);

defineOptions({ inheritAttrs: false })

type NativeHTMLAttributes = /* @vue-ignore */ HTMLAttributes

type rowProps= {
  header?: tableHeaderType<string>,
  item?: tableItemType<tableHeaderType>
} & NativeHTMLAttributes

const props = withDefaults(defineProps<rowProps>(), {
  item: () => ({} as tableItemType<tableHeaderType>),
  header: () => ({} as tableHeaderType<string>),
  itemKey: undefined
})

const emit = defineEmits<{
  (e: 'action', action: string, itemKey: number | undefined): void;
}>();

const actionOnClick = (action: string, itemKey: number | undefined) => {
  emit('action', action, itemKey)
};

const attrs = useAttrs()

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

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
};

const forwarded = computed(() => {
  const { ...rest } = attrs
  return rest
})
</script>

<template>
  <tr
    class="border-b border-table-line"
    v-bind="forwarded"
  >
    <td
      v-for="colKey in Object.keys(props.header)"
      :key="colKey"
      class="px-6 py-4 font-inter text-gray-600"
    >
      <!-- Actions -->
      <div
        v-if="props.header[colKey].type === 'actions'"
        class="gap-2 flex"
      >
        <div
          v-for="(action, actionIndex) in props.header[colKey].actions"
          :key="actionIndex"
        >
          <button
            v-if="typeof action === 'string'"
            @click="actionOnClick(action, attrs.id)"
          >
            <slot
              name="actions"
              :item="props.item"
            >
              <span
                class="material-symbols-outlined p-2 cursor-pointer !text-xl"
                :class="actionsIcon[action as keyof typeof actionsIcon].color"
              >
                {{ actionsIcon[action as keyof typeof actionsIcon].icon }}
              </span>
            </slot>
          </button>
        </div>
      </div>
      <!-- Status -->
      <div v-else-if="props.header[colKey].type === 'status' && typeof props.item[colKey] === 'string'">
        <slot
          :name="colKey"
          :item="props.item"
        >
          <GenericStatusTag
            :text="Array.isArray(props.item[colKey]) ? props.item[colKey][0] : props.item[colKey]"
            variant="success"
          />
        </slot>
      </div>
      <!-- Link -->
      <div v-else-if="props.header[colKey].type === 'link'">
        <button
          class="text-primary-500 font-bold underline underline-offset-4 cursor-pointer"
          @click="actionOnClick(colKey + '-link', attrs.id)"
        >
          <slot
            :name="colKey"
            :item="props.item"
          >
            {{ props.item[colKey] }}
          </slot>
        </button>
      </div>
      <!-- Date -->
      <div v-else-if="props.header[colKey].type === 'date'">
        <slot
          :name="colKey"
          :item="props.item"
        >
          {{ dayjs(Array.isArray(props.item[colKey]) ? props.item[colKey][0] : props.item[colKey]).utc().format('DD/MM/YYYY') }}
        </slot>
      </div>
      <!-- Currency -->
      <div v-else-if="props.header[colKey].type === 'currency'">
        <slot
          :name="colKey"
          :item="props.item"
        >
          {{ formatCurrency(props.item[colKey] as number) }}
        </slot>
      </div>
      <!-- Default -->
      <div v-else>
        <slot
          :name="colKey"
          :item="props.item"
        >
          {{ props.item[colKey] }}
        </slot>
      </div>
    </td>
  </tr>
</template>