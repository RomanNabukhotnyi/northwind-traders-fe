<template>
  <MyDialog v-model:show="editVisible">
    <EditSupplier
      :supplier="supplier!"
      :loading="editLoading"
      @update="updateSupplier"
    />
  </MyDialog>
  <section class="section main-section">
    <div class="card mb-6">
      <header class="card-header">
        <p class="card-header-title">
          <span class="icon material-icons">ballot</span>
          <span class="ml-2">Supplier information</span>
        </p>
        <MyButton v-if="isAdmin" class="editBtn" @click="openEdit"
          >Edit</MyButton
        >
        <MyButton v-if="isAdmin" class="deleteBtn" @click="deleteSupplier"
          >Delete</MyButton
        >
      </header>
      <div class="card-content">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <div class="field">
              <label class="label">Company Name</label>
              <div class="field-body">
                <div class="field">
                  <div class="control icons-left">
                    {{ supplier!.companyName }}
                  </div>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Contact Name</label>
              <div class="field-body">
                <div class="field">
                  <div class="control icons-left">
                    {{ supplier!.contactName }}
                  </div>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Contact Title</label>
              <div class="field-body">
                <div class="field">
                  <div class="control icons-left">
                    {{ supplier!.contactTitle }}
                  </div>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Address</label>
              <div class="field-body">
                <div class="field">
                  <div class="control icons-left">{{ supplier!.address }}</div>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">City</label>
              <div class="field-body">
                <div class="field">
                  <div class="control icons-left">{{ supplier!.city }}</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="field">
              <label class="label">Region</label>
              <div class="field-body">
                <div class="field">
                  <div class="control icons-left">{{ supplier!.region }}</div>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Postal Code</label>
              <div class="field-body">
                <div class="field">
                  <div class="control icons-left">
                    {{ supplier!.postalCode }}
                  </div>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Country</label>
              <div class="field-body">
                <div class="field">
                  <div class="control icons-left">{{ supplier!.country }}</div>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Phone</label>
              <div class="field-body">
                <div class="field">
                  <div class="control icons-left">{{ supplier!.phone }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="field grouped">
          <div class="control">
            <button type="reset" class="button red" @click="router.back()">
              Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useSuppliersStore } from '@/stores/suppliers';
import { useUsersStore } from '@/stores/users';
import MyDialog from '@/components/common/MyDialog.vue';
import EditSupplier from './components/EditSupplier.vue';
import MyButton from '@/components/common/MyButton.vue';
const suppliersStore = useSuppliersStore();
const usersStore = useUsersStore();
const isAdmin = computed(() => usersStore.isAdmin);
const router = useRouter();
const editLoading = computed(() => suppliersStore.loading);
const supplier = computed(() =>
  suppliersStore.suppliers.find(
    (s) => s.id === Number(router.currentRoute.value.params.id)
  )
);
const editVisible = ref(false);
const openEdit = () => {
  editVisible.value = true;
};
const updateSupplier = (supplier: {
  id: number;
  companyName: string;
  contactName: string | null;
  contactTitle: string | null;
  address: string | null;
  city: string | null;
  region: string | null;
  postalCode: string | null;
  country: string | null;
  phone: string | null;
  fax: string | null;
  homePage: string | null;
}) => {
  suppliersStore.update(supplier);
  editVisible.value = false;
};
const deleteSupplier = () => {
  suppliersStore.delete(supplier.value!.id);
  router.push('/suppliers');
};
</script>

<style scoped>
.main-section {
  padding: 1.5rem;
}
.editBtn {
  background-color: #ffc038;
  width: 75px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
.deleteBtn {
  background-color: #ff4747;
  width: 75px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.card {
  background-color: rgb(255, 255, 255);
  border-color: rgb(243, 244, 246);
  border-radius: 0.25rem;
  border-width: 1px;
}

.card-header {
  align-items: stretch;
  border-bottom-width: 1px;
  border-color: rgb(243, 244, 246);
  display: flex;
}

.card-content {
  padding: 1.5rem;
}

.card-header-title {
  flex-grow: 1;
  font-weight: 700;
}

.grid {
  display: grid;
}

.gap-4 {
  gap: 1rem;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.field.grouped {
  display: flex;
  justify-content: flex-start;
}

.field:not(:last-child) {
  margin-bottom: 0.75rem;
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

.card-content hr {
  margin: 1.5rem -1.5rem;
}

hr {
  border-top-width: 1px;
  color: inherit;
  height: 0;
}

.button {
  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;
  --tw-text-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  border-color: rgb(249 250 251 / var(--tw-border-opacity));
  border-radius: 0.25rem;
  border-width: 1px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  text-align: center;
  white-space: nowrap;
}

.button.red {
  --tw-border-opacity: 1;
  --tw-bg-opacity: 1;
  --tw-text-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity));
  border-color: rgb(239 68 68 / var(--tw-border-opacity));
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.card-header-title,
.card-header-icon {
  align-items: center;
  display: flex;
  padding: 0.75rem 1rem;
}

.ml-2 {
  margin-left: 0.5rem;
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
