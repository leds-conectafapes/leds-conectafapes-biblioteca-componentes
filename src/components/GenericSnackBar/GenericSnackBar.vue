<script lang="ts" setup>
import { computed, watch, ref, useAttrs, onMounted } from "vue";
import type { HTMLAttributes } from "vue";
import type { snackBarVariant } from "../../types";
import { cn } from "../../utils/cn";
import GenericIcon from "../GenericIcon/GenericIcon.vue";

type NativeFlagAttributes = /* @vue-ignore */ HTMLAttributes;

type flagProps = {
  variant?: snackBarVariant;
  title?: string;
  description?: string;
  timeout?: number;
} & NativeFlagAttributes;

const props = withDefaults(defineProps<flagProps>(), {
  variant: "informative",
  title: "",
  description: "",
  timeout: 8000,
});

const attrs = useAttrs();

const FLAG_VARIANTS: Record<
  snackBarVariant,
  {
    style: { card: string; icon: string; title: string; description: string };
    icon: string;
  }
> = {
  informative: {
    style: {
      card: "border-slate-200 bg-white",
      icon: "text-gray-500",
      title: "text-gray-900",
      description: "text-gray-600",
    },
    icon: "info",
  },
  success: {
    style: {
      card: "border-slate-200 bg-white",
      icon: "text-emerald-500",
      title: "text-gray-900",
      description: "text-gray-600",
    },
    icon: "check_circle",
  },
  warning: {
    style: {
      card: "border-transparent bg-amber-300",
      icon: "text-zinc-900",
      title: "text-zinc-900",
      description: "text-zinc-900",
    },
    icon: "warning",
  },
  error: {
    style: {
      card: "border-transparent bg-red-700",
      icon: "text-white",
      title: "text-white",
      description: "text-white",
    },
    icon: "error",
  },
};

const flagVariant = computed(() => FLAG_VARIANTS[props.variant]);

const showSnackBar = ref<boolean>(true);

const close = () => {
  showSnackBar.value = false;
};

const startTimeout = () => {
  setTimeout(() => {
    showSnackBar.value = false;
  }, props.timeout);
};

watch(
  () => props.timeout,
  () => {
    showSnackBar.value = true;
    if (props.timeout <= 0) return;
    startTimeout();
  },
);

onMounted(() => {
  showSnackBar.value = true;
  if (props.timeout <= 0) return;
  startTimeout();
});

const forwarded = computed(() => {
  const { ...rest } = attrs;
  return rest;
});
</script>

<template>
  <Teleport to="body">
    <div class="fixed bottom-1 right-0.5 m-2 z-50 flex flex-col items-end space-y-2 lg:bottom-4 lg:right-4 lg:m-0">
      <Transition
        appear
        enter-active-class="transition duration-300"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-300"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-4"
      >
        <div
          v-show="showSnackBar"
          v-bind="forwarded"
          :class="
            cn(
              'flex flex-row justify-between gap-x-4 w-full py-5 px-6 border rounded-lg shadow-lg shadow-zinc-600/10 text-base md:min-w-105 md:max-w-175 font-inter',
              flagVariant.style.card,
            )
          "
        >
          <GenericIcon
            id="icon"
            :name="flagVariant.icon"
            :class="cn(flagVariant.style.icon)"
            filled
          />
          <div
            class="flex flex-col justify-start w-full h-full text-base leading-normal"
          >
            <span :class="cn('font-bold', flagVariant.style.title)">
              <slot name="title">
                {{ props.title }}
              </slot>
            </span>
            <span :class="cn('font-normal', flagVariant.style.description)">
              <slot name="description">
                {{ props.description }}
              </slot>
            </span>
          </div>
          <GenericIcon
            :class="
              cn('text-xl cursor-pointer select-none', flagVariant.style.title)
            "
            name="close"
            @click="close"
          />
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<style scoped>
#icon {
  font-variation-settings:
    "FILL" 1,
    "wght" 400,
    "GRAD" 0,
    "opsz" 22;
}
</style>
