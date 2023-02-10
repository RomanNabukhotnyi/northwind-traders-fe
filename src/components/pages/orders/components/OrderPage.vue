<template>
  <section class="section main-section">
    <div class="card mb-6">
      <header class="card-header">
        <p class="card-header-title">
          <span class="icon material-icons">ballot</span
          ><span class="ml-2">Order information</span>
        </p>
      </header>
      <div class="card-content">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <div class="field">
              <label class="label">Customer Id</label>
              <div class="field-body">
                <div class="field">
                  <div class="control icons-left">
                    <a class="link" @click="openCustomer(order!.customerId!)">{{
                      order!.customerId
                    }}</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Ship Name</label>
              <div class="field-body">
                <div class="field">
                  <div class="control icons-left">
                    {{ order!.shipName }}
                  </div>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Total Products</label>
              <div class="field-body">
                <div class="field">
                  <div class="control icons-left">
                    {{ order?.totalProducts }}
                  </div>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Total Quantity</label>
              <div class="field-body">
                <div class="field">
                  <div class="control icons-left">{{ order?.totalItems }}</div>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Total Price</label>
              <div class="field-body">
                <div class="field">
                  <div class="control icons-left">
                    ${{ Number(order?.totalPrice).toFixed(2) }}
                  </div>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Total Discount</label>
              <div class="field-body">
                <div class="field">
                  <div class="control icons-left">
                    ${{ Number(order?.totalDiscount).toFixed(2) }}
                  </div>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Ship Via</label>
              <div class="field-body">
                <div class="field">
                  <div class="control icons-left">{{ order?.shipVia }}</div>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Freight</label>
              <div class="field-body">
                <div class="field">
                  <div class="control icons-left">
                    ${{ Number(order?.freight).toFixed(2) }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="field">
              <label class="label">Order Date</label>
              <div class="field-body">
                <div class="field">
                  <div class="control icons-left">
                    {{
                      new Date(order?.orderDate!).toLocaleDateString('en-CA')
                    }}
                  </div>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Required Date</label>
              <div class="field-body">
                <div class="field">
                  <div class="control icons-left">
                    {{
                      new Date(order?.requiredDate!).toLocaleDateString('en-CA')
                    }}
                  </div>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Shipped Date</label>
              <div class="field-body">
                <div class="field">
                  <div class="control icons-left">
                    {{
                      new Date(order?.shippedDate!).toLocaleDateString('en-CA')
                    }}
                  </div>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Ship City</label>
              <div class="field-body">
                <div class="field">
                  <div class="control icons-left">{{ order?.shipCity }}</div>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Ship Region</label>
              <div class="field-body">
                <div class="field">
                  <div class="control icons-left">{{ order?.shipRegion }}</div>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Ship Postal Code</label>
              <div class="field-body">
                <div class="field">
                  <div class="control icons-left">
                    {{ order?.shipPostalCode }}
                  </div>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Ship Country</label>
              <div class="field-body">
                <div class="field">
                  <div class="control icons-left">{{ order?.shipCountry }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card has-table">
        <header class="card-header">
          <p class="card-header-title">Products in Order</p>
        </header>
        <div class="card-content">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Order Price</th>
                <th>Total Price</th>
                <th>Discount</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in order?.products" :key="product.id">
                <td data-label="Product">
                  <a class="link" @click="openProduct(product.id)">{{
                    product.name
                  }}</a>
                </td>
                <td data-label="Quantity">{{ product.quantity }}</td>
                <td data-label="OrderPrice">
                  ${{ Number(product.orderUnitPrice).toFixed(2) }}
                </td>
                <td data-label="TotalPrice">
                  ${{
                    (product.quantity! * product.orderUnitPrice!).toFixed(2)
                  }}
                </td>
                <td data-label="Discount">{{ product.discount! * 100 }}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card-content">
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
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useOrdersStore } from '@/stores/orders';
const ordersStore = useOrdersStore();
const router = useRouter();
const openCustomer = (id: string) => {
  router.push(`/customers/${id}`);
};
const openProduct = (id: number) => {
  router.push(`/products/${id}`);
};
const order = computed(() =>
  ordersStore.orders.find(
    (p) => p.id === Number(router.currentRoute.value.params.id)
  )
);
</script>

<style scoped>
.main-section {
  padding: 1.5rem;
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
