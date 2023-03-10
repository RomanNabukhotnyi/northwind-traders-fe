<template>
  <div>
    <Transition name="fade">
      <div class="modal-overlay" v-if="show" @click="hideDialog"></div>
    </Transition>
    <Transition name="pop">
      <div class="modal" v-if="showDialog()">
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useEventListener } from '@/use/eventListener';
const props = withDefaults(
  defineProps<{
    show: boolean;
  }>(),
  {
    show: false,
  }
);
const emit = defineEmits<{
  (e: 'update:show', value: boolean): void;
}>();
const showDialog = () => {
  if (props.show) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }
  return props.show;
};
const hideDialog = () => {
  emit('update:show', false);
};
useEventListener(window, 'keyup', (event) => {
  if (event.code === 'Escape') {
    hideDialog();
  }
});
</script>

<style scoped>
.modal {
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  min-width: 300px;
  margin: auto;
  width: fit-content;
  height: fit-content;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  background: #fff;
  z-index: 999;
  transform: none;
}
.modal-overlay {
  content: '';
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: #2c3e50;
  opacity: 0.6;
  cursor: pointer;
}

/* ---------------------------------- */
.fade-enter-active {
  transition: opacity 0.4s linear;
}

.fade-enter-from {
  opacity: 0;
}

.pop-enter-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter-from {
  opacity: 0;
  transform: scale(0.3);
}
</style>
