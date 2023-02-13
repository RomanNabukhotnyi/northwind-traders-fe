<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  position: relative;
  display: flex;
  color: white;
  background-color: #419bf9;
  font-size: 15px;
  min-height: 30px;
  border-radius: 2px;
  padding: 5px 10px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
}

.btn:hover {
  opacity: 0.9;
}
</style>
