<template>
  <div class="form">
    <div class="field">
      <MyInput
        class="input"
        name="name"
        placeholder="Name"
        v-model="form.name.value"
      />
      <div v-if="!form.name.errors.required">
        <p v-if="form.name.errors.maxLength" class="error">
          Name length can't be more then 40. Now it is
          {{ form.name.value.length }}.
        </p>
      </div>
      <p v-else class="error">Field is required.</p>
    </div>
    <div class="field">
      <Multiselect
        v-model="form.supplier.value"
        :options="suppliers"
        placeholder="Supplier"
        label="companyName"
        track-by="id"
      ></Multiselect>
    </div>
    <div class="field">
      <Multiselect
        v-model="form.category.value"
        :options="categories"
        placeholder="Category"
        label="name"
        track-by="id"
      ></Multiselect>
    </div>
    <div class="field">
      <MyInput
        class="input"
        name="quantityPerUnit"
        placeholder="Quantity per unit"
        v-model="form.quantityPerUnit.value"
      />
      <div v-if="form.quantityPerUnit.value.length !== 0">
        <p v-if="form.quantityPerUnit.errors.maxLength" class="error">
          Quantity per unit length can't be more then 20. Now it is
          {{ form.quantityPerUnit.value.length }}.
        </p>
      </div>
    </div>
    <div class="field">
      <MyInput
        class="input"
        name="unitPrice"
        placeholder="Unit price"
        v-model="form.unitPrice.value"
      />
      <!-- <div v-if="form.unitPrice.value.length !== 0">
        <p v-if="form.city.errors.maxLength" class="error">
          City length can't be more then 15. Now it is
          {{ form.unitPrice.value.length }}.
        </p>
      </div> -->
    </div>
    <div class="field">
      <MyInput
        class="input"
        name="unitsInStock"
        placeholder="Units in stock"
        v-model="form.unitsInStock.value"
      />
      <!-- <div v-if="form.region.value.length !== 0">
        <p v-if="form.region.errors.maxLength" class="error">
          Region length can't be more then 15. Now it is
          {{ form.region.value.length }}.
        </p>
      </div> -->
    </div>
    <div class="field">
      <MyInput
        class="input"
        name="unitsOnOrder"
        placeholder="Units on order"
        v-model="form.unitsOnOrder.value"
      />
      <!-- <div v-if="form.postalCode.value.length !== 0">
        <p v-if="form.postalCode.errors.maxLength" class="error">
          Postal code length can't be more then 10. Now it is
          {{ form.postalCode.value.length }}.
        </p>
      </div> -->
    </div>
    <div class="field">
      <MyInput
        class="input"
        name="reorderLevel"
        placeholder="Reorder level"
        v-model="form.reorderLevel.value"
      />
      <!-- <div v-if="form.country.value.length !== 0">
        <p v-if="form.country.errors.maxLength" class="error">
          Country length can't be more then 15. Now it is
          {{ form.country.value.length }}.
        </p>
      </div> -->
    </div>
    <MyButton class="button" @click="update" :disabled="!form.valid || loading">
      <p v-if="!loading">Edit</p>
      <div v-else class="loadingio-spinner-ellipsis-yg3d79y87xd">
        <div class="ldio-bzxhjz25vr">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </MyButton>
  </div>
</template>

<script setup lang="ts">
import Multiselect from 'vue-multiselect';
import MyButton from '@/components/common/MyButton.vue';
import MyInput from '@/components/common/MyInput.vue';
import { useValidators } from '@/use/validators';
import { useEventListener } from '@/use/eventListener';
import { useForm } from '@/use/form';
const props = defineProps<{
  loading: boolean;
  product: {
    id: number;
    name: string;
    supplierId: number | null;
    categoryId: number | null;
    quantityPerUnit: string | null;
    unitPrice: number | null;
    unitsInStock: number | null;
    unitsOnOrder: number | null;
    reorderLevel: number | null;
    discontinued: boolean;
    supplierName: string | null;
  };
  suppliers: {
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
  }[];
  categories: {
    id: number;
    name: string;
    description: string | null;
  }[];
}>();
const emit = defineEmits<{
  (
    e: 'update',
    payload: {
      id: number;
      name: string;
      supplierId: number | null;
      categoryId: number | null;
      quantityPerUnit: string | null;
      unitPrice: number | null;
      unitsInStock: number | null;
      unitsOnOrder: number | null;
      reorderLevel: number | null;
      discontinued: boolean;
    }
  ): void;
}>();
useEventListener(window, 'keyup', (event) => {
  if (event.code === 'Enter' && form.valid) {
    update();
  }
});
const { required, minLength, optional, maxLength } = useValidators();
const form = useForm({
  name: {
    value: props.product.name ?? '',
    validators: {
      required,
      minLength: minLength(1),
      maxLength: maxLength(40),
    },
  },
  supplier: {
    value: props.product.supplierId
      ? props.suppliers.find((s) => s.id === props.product.supplierId)
      : null,
    validators: {
      optional,
    },
  },
  category: {
    value: props.product.categoryId
      ? props.categories.find((c) => c.id === props.product.categoryId)
      : null,
    validators: {
      optional,
    },
  },
  quantityPerUnit: {
    value: props.product.quantityPerUnit ?? '',
    validators: {
      optional,
      maxLength: maxLength(20),
    },
  },
  unitPrice: {
    value: props.product.unitPrice ?? '',
    validators: {
      optional,
    },
  },
  unitsInStock: {
    value: props.product.unitsInStock ?? '',
    validators: {
      optional,
    },
  },
  unitsOnOrder: {
    value: props.product.unitsOnOrder ?? '',
    validators: {
      optional,
    },
  },
  reorderLevel: {
    value: props.product.reorderLevel ?? '',
    validators: {
      optional,
    },
  },
  discontinued: {
    value: props.product.discontinued ?? false,
    validators: {},
  },
});
const update = () => {
  emit('update', {
    id: props.product.id,
    name: form.name.value,
    supplierId: form.supplier.value ? form.supplier.value.id : null,
    categoryId: form.category.value ? form.category.value.id : null,
    quantityPerUnit:
      form.quantityPerUnit.value.length !== 0
        ? form.quantityPerUnit.value
        : null,
    unitPrice:
      form.unitPrice.value.length !== 0 ? Number(form.unitPrice.value) : null,
    unitsInStock:
      form.unitsInStock.value.length !== 0
        ? Number(form.unitsInStock.value)
        : null,
    unitsOnOrder:
      form.unitsOnOrder.value.length !== 0
        ? Number(form.unitsOnOrder.value)
        : null,
    reorderLevel:
      form.reorderLevel.value.length !== 0
        ? Number(form.reorderLevel.value)
        : null,
    discontinued: form.discontinued.value ? form.discontinued.value : false,
  });
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

<style scoped>
.form {
  margin: 0;
  max-width: 248px;
}
.field {
  margin-bottom: 8px;
}
.input {
  padding: 0 12px;
  width: 100%;
}
.error {
  font-size: 10px;
  color: rgb(255, 107, 107);
}
.button {
  position: relative;
  background: transparent none;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
  width: 100%;
  height: 40px;
  margin: 0;
  background-color: #419bf9;
  color: #fff;
  border-radius: 2px;
}
.button:disabled {
  background-color: #a9b5c2;
}
.button:disabled:hover {
  opacity: 1;
  cursor: default;
}
/* loading */
@keyframes ldio-bzxhjz25vr {
  0% {
    transform: translate(3px, 20px) scale(0);
  }
  25% {
    transform: translate(3px, 20px) scale(0);
  }
  50% {
    transform: translate(3px, 20px) scale(1);
  }
  75% {
    transform: translate(20px, 20px) scale(1);
  }
  100% {
    transform: translate(37px, 20px) scale(1);
  }
}
@keyframes ldio-bzxhjz25vr-r {
  0% {
    transform: translate(37px, 20px) scale(1);
  }
  100% {
    transform: translate(37px, 20px) scale(0);
  }
}
.ldio-bzxhjz25vr div {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transform: translate(20px, 20px) scale(1);
  background: white;
  animation: ldio-bzxhjz25vr 1s infinite cubic-bezier(0, 0.5, 0.5, 1);
}
.ldio-bzxhjz25vr div:nth-child(1) {
  transform: translate(37px, 20px) scale(1);
  animation: ldio-bzxhjz25vr-r 0.25s infinite cubic-bezier(0, 0.5, 0.5, 1);
}
.ldio-bzxhjz25vr div:nth-child(2) {
  animation-delay: -0.25s;
}
.ldio-bzxhjz25vr div:nth-child(3) {
  animation-delay: -0.5s;
}
.ldio-bzxhjz25vr div:nth-child(4) {
  animation-delay: -0.75s;
}
.ldio-bzxhjz25vr div:nth-child(5) {
  animation-delay: -1s;
}
.loadingio-spinner-ellipsis-yg3d79y87xd {
  width: 50px;
  height: 50px;
  display: inline-block;
}
.ldio-bzxhjz25vr {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
}
.ldio-bzxhjz25vr div {
  box-sizing: content-box;
}
</style>
