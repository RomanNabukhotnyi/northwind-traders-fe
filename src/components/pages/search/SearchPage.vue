<template>
  <section class="section main-section">
    <div class="card">
      <div class="card-content">
        <div class="field">
          <label class="label">Search Database</label>
          <div class="field-body">
            <div class="field">
              <div class="control icons-left">
                <input
                  placeholder="Enter keyword..."
                  class="input w-1/2"
                  value=""
                /><span class="icon left material-icons">search</span>
              </div>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Tables</label>
          <div class="field-body">
            <div class="field grouped multiline">
              <div class="control">
                <label class="radio"
                  ><input
                    type="radio"
                    name="table-radio"
                    value="one"
                    checked
                  /><span class="check"></span
                  ><span class="control-label">Products</span></label
                >
              </div>
              <div class="control">
                <label class="radio"
                  ><input type="radio" name="table-radio" value="two" /><span
                    class="check"
                  ></span
                  ><span class="control-label">Customers</span></label
                >
              </div>
            </div>
          </div>
        </div>
        <p class="text-black font-bold text-lg">Search results</p>
        <p class="mt-6">No results</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useSuppliersStore } from '@/stores/suppliers';
const suppliersStore = useSuppliersStore();
const router = useRouter();
const suppliers = computed(() => suppliersStore.suppliersByPage);
const page = ref(0);
const getAvatarUrl = (name: string) => {
  const initials = name.split(' ');
  return `https://avatars.dicebear.com/v2/initials/${initials[0]}-${
    initials[initials.length - 1]
  }.svg`;
};
const openSupplier = (id: number) => {
  router.push(`/suppliers/${id}`);
};
const selectPage = (num: number) => {
  page.value = num;
};
</script>

<style scoped>
.main-section {
  padding: 1.5rem;
}

.card {
  background-color: rgb(255, 255, 255);
  border-color: rgb(243, 244, 246);
  border-radius: 0.25rem;
  border-width: 1px;
}
.mt-6 {
  margin-top: 1.5rem;
}
.card-content {
  padding: 1.5rem;
}
.main-section {
  padding: 1.5rem;
}
.card {
  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  border-color: rgb(243 244 246 / var(--tw-border-opacity));
  border-radius: 0.25rem;
  border-width: 1px;
}
.label {
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.control,
.control.icons-left,
.control.icons-right {
  position: relative;
}
.control.icons-left .input,
.control.icons-left .select select {
  padding-left: 2.5rem;
}
.w-1\/2 {
  width: 50%;
}
.input:focus,
.select select:focus,
.textarea:focus {
  --tw-ring-offset-shadow: 0 0 0 0px #fff;
  --tw-ring-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
  border-color: rgb(243 244 246);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 #0000;
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.file-cta,
.file-name,
.input,
.select select {
  height: 2.5rem;
}
.file-cta,
.file-name,
.input,
.select select,
.textarea {
  --tw-border-opacity: 1;
  border-color: rgb(156 163 175 / var(--tw-border-opacity));
  border-radius: 0.25rem;
  border-width: 1px;
  padding: 0.5rem 0.75rem;
}
button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  margin: 0;
  padding: 0;
}
.control.icons-left .icon.left {
  left: 0;
}
.control.icons-left .icon,
.control.icons-right .icon {
  height: 2.5rem;
  position: absolute;
  top: 0;
  width: 2.5rem;
  z-index: 10;
}
.material-icons {
  align-items: center;
  display: inline-flex;
  height: 1.5rem;
  justify-content: center;
  width: 1.5rem;
}
.field.grouped.multiline {
  flex-wrap: wrap;
}
.field.grouped {
  display: flex;
  justify-content: flex-start;
}
.field.grouped > .control:not(:last-child) {
  margin-right: 0.75rem;
}
.control,
.control.icons-left,
.control.icons-right {
  position: relative;
}
.checkbox,
.radio,
.switch {
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  position: relative;
}
.checkbox input[type='checkbox'],
.radio input[type='radio'],
.switch input[type='checkbox'] {
  left: 0;
  opacity: 0;
  position: absolute;
}
button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  margin: 0;
  padding: 0;
}
.radio input[type='radio']:checked + .check {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2Z'/%3E%3C/svg%3E");
}
.checkbox input[type='checkbox']:checked + .check,
.radio input[type='radio']:checked + .check {
  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
  background-position: 50%;
  background-repeat: no-repeat;
  border-color: rgb(59 130 246 / var(--tw-border-opacity));
  border-width: 4px;
}
.radio input[type='radio'] + .check,
.switch input[type='checkbox'] + .check,
.switch input[type='checkbox'] + .check:before {
  border-radius: 9999px;
}
.checkbox input[type='checkbox'] + .check,
.radio input[type='radio'] + .check {
  display: block;
  height: 1.25rem;
  width: 1.25rem;
}
.checkbox .control-label,
.radio .control-label,
.switch .control-label {
  padding-left: 0.5rem;
}
.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}
.font-bold {
  font-weight: 700;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.field:not(:last-child) {
  margin-bottom: 0.75rem;
}
.card-header {
  align-items: stretch;
  border-bottom-width: 1px;
  border-color: rgb(243, 244, 246);
  display: flex;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
.checkbox,
.radio,
.switch {
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  position: relative;
}
.checkbox input[type='checkbox'],
.radio input[type='radio'],
.switch input[type='checkbox'] {
  left: 0;
  opacity: 0;
  position: absolute;
}
button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  margin: 0;
  padding: 0;
}
.radio input[type='radio'] + .check,
.switch input[type='checkbox'] + .check,
.switch input[type='checkbox'] + .check:before {
  border-radius: 9999px;
}
.checkbox input[type='checkbox'] + .check,
.radio input[type='radio'] + .check {
  display: block;
  height: 1.25rem;
  width: 1.25rem;
}
.checkbox input[type='checkbox'] + .check,
.radio input[type='radio'] + .check,
.switch input[type='checkbox'] + .check {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
  border-width: 1px;
}

.card-header-title {
  flex-grow: 1;
  font-weight: 700;
}

.card-header-title,
.card-header-icon {
  align-items: center;
  display: flex;
  padding: 0.75rem 1rem;
}

.card-header-icon {
  justify-content: center;
}

table {
  width: 100%;
  border-collapse: collapse;
  border-color: inherit;
  text-indent: 0;
}

thead {
  display: table-header-group;
}

tr {
  display: table-row;
  border-color: rgb(243, 244, 246);
  max-width: 100%;
  position: relative;
}

th {
  padding: 0.5rem 0.75rem;
  text-align: left;
}

tr:nth-child(odd) td {
  background-color: rgb(249, 250, 251);
}

tbody tr:hover td {
  background-color: rgb(243 244 246);
}

td {
  display: table-cell;
  padding: 0.5rem 0.75rem;
  text-align: left;
  vertical-align: middle;
}

td.image-cell {
  width: 1.5rem;
  border-bottom-width: 0;
}

td.image-cell .image {
  width: 1.5rem;
  height: 1.5rem;
  margin-left: auto;
  margin-right: auto;
}

.link {
  color: rgb(37 99 235);
  text-decoration: inherit;
  cursor: pointer;
}

.rounded-full {
  border-radius: 9999px;
}

img {
  height: auto;
  max-width: 100%;
}

.table-pagination {
  border-color: rgb(243, 244, 246);
  border-top-width: 1px;
  padding: 0.75rem 1.5rem;
}

.pagination {
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.buttons {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.buttons .button {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

.button.active {
  border-color: rgb(209, 213, 219);
}

.button {
  background-color: rgb(255, 255, 255);
  border-radius: 0.25rem;
  border-color: rgb(249, 250, 251);
  border-width: 1px;
  color: rgb(0, 0, 0);
  cursor: pointer;
  display: inline-flex;
  padding: 0.5rem 1rem;
  text-align: center;
  white-space: nowrap;
  justify-content: center;
}

button {
  text-transform: none;
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  margin: 0;
}

small {
  font-size: 80%;
}
</style>
