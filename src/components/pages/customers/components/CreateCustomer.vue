<template>
  <div class="form">
    <div class="field">
      <MyInput
        class="input"
        name="companyName"
        placeholder="Company name"
        v-model="form.companyName.value"
      />
      <div v-if="!form.companyName.errors.required">
        <p v-if="form.companyName.errors.maxLength" class="error">
          Company name length can't be more then 40. Now it is
          {{ form.companyName.value.length }}.
        </p>
      </div>
      <p v-else class="error">Field is required.</p>
    </div>
    <div class="field">
      <MyInput
        class="input"
        name="contactName"
        placeholder="Contact name"
        v-model="form.contactName.value"
      />
      <!-- <div v-if="form.contactName.value.length !== 0">
        <p v-if="form.contactName.errors.maxLength" class="error">
          Contact name length can't be more then 30. Now it is
          {{ form.contactName.value.length }}.
        </p>
      </div> -->
    </div>
    <div class="field">
      <MyInput
        class="input"
        name="contactTitle"
        placeholder="Contact title"
        v-model="form.contactTitle.value"
      />
      <!-- <div v-if="form.contactTitle.value.length !== 0">
        <p v-if="form.contactTitle.errors.maxLength" class="error">
          Contact title length can't be more then 30. Now it is
          {{ form.contactTitle.value.length }}.
        </p>
      </div> -->
    </div>
    <div class="field">
      <MyInput
        class="input"
        name="address"
        placeholder="Address"
        v-model="form.address.value"
      />
      <!-- <div v-if="form.address.value.length !== 0">
        <p v-if="form.address.errors.maxLength" class="error">
          Address length can't be more then 60. Now it is
          {{ form.address.value.length }}.
        </p>
      </div> -->
    </div>
    <div class="field">
      <MyInput
        class="input"
        name="city"
        placeholder="City"
        v-model="form.city.value"
      />
      <!-- <div v-if="form.city.value.length !== 0">
        <p v-if="form.city.errors.maxLength" class="error">
          City length can't be more then 15. Now it is
          {{ form.city.value.length }}.
        </p>
      </div> -->
    </div>
    <div class="field">
      <MyInput
        class="input"
        name="region"
        placeholder="Region"
        v-model="form.region.value"
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
        name="postalCode"
        placeholder="Postal code"
        v-model="form.postalCode.value"
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
        name="country"
        placeholder="Country"
        v-model="form.country.value"
      />
      <!-- <div v-if="form.country.value.length !== 0">
        <p v-if="form.country.errors.maxLength" class="error">
          Country length can't be more then 15. Now it is
          {{ form.country.value.length }}.
        </p>
      </div> -->
    </div>
    <div class="field">
      <MyInput
        class="input"
        name="phone"
        placeholder="Phone"
        v-model="form.phone.value"
      />
      <!-- <div v-if="form.phone.value.length !== 0">
        <p v-if="form.phone.errors.maxLength" class="error">
          Phone length can't be more then 24. Now it is
          {{ form.phone.value.length }}.
        </p>
      </div> -->
    </div>
    <div class="field">
      <MyInput
        class="input"
        name="fax"
        placeholder="Fax"
        v-model="form.fax.value"
      />
      <!-- <div v-if="form.fax.value.length !== 0">
        <p v-if="form.fax.errors.maxLength" class="error">
          Fax length can't be more then 24. Now it is
          {{ form.fax.value.length }}.
        </p>
      </div> -->
    </div>
    <MyButton class="button" @click="create" :disabled="!form.valid || loading">
      <p v-if="!loading">Create</p>
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
import MyButton from '@/components/common/MyButton.vue';
import MyInput from '@/components/common/MyInput.vue';
import { useValidators } from '@/use/validators';
import { useEventListener } from '@/use/eventListener';
import { useForm } from '@/use/form';
defineProps<{
  loading: boolean;
}>();
const emit = defineEmits<{
  (
    e: 'create',
    payload: {
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
    }
  ): void;
}>();
useEventListener(window, 'keyup', (event) => {
  if (event.code === 'Enter' && form.valid) {
    create();
  }
});
const { required, minLength, optional, maxLength } = useValidators();
const form = useForm({
  companyName: {
    value: '',
    validators: {
      required,
      minLength: minLength(1),
      maxLength: maxLength(40),
    },
  },
  contactName: {
    value: '',
    validators: {
      optional,
    },
  },
  contactTitle: {
    value: '',
    validators: {
      optional,
    },
  },
  address: {
    value: '',
    validators: {
      optional,
    },
  },
  city: {
    value: '',
    validators: {
      optional,
    },
  },
  region: {
    value: '',
    validators: {
      optional,
    },
  },
  postalCode: {
    value: '',
    validators: {
      optional,
    },
  },
  country: {
    value: '',
    validators: {
      optional,
    },
  },
  phone: {
    value: '',
    validators: {
      optional,
    },
  },
  fax: {
    value: '',
    validators: {
      optional,
    },
  },
});
const create = () => {
  emit('create', {
    companyName: form.companyName.value,
    contactName:
      form.contactName.value.length !== 0 ? form.contactName.value : null,
    contactTitle:
      form.contactTitle.value.length !== 0 ? form.contactTitle.value : null,
    address: form.address.value.length !== 0 ? form.address.value : null,
    city: form.city.value.length !== 0 ? form.city.value : null,
    region: form.region.value.length !== 0 ? form.region.value : null,
    postalCode:
      form.postalCode.value.length !== 0 ? form.postalCode.value : null,
    country: form.country.value.length !== 0 ? form.country.value : null,
    phone: form.phone.value.length !== 0 ? form.phone.value : null,
    fax: form.fax.value.length !== 0 ? form.fax.value : null,
  });
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

<style scoped>
.form {
  margin: 0;
  min-width: 300px;
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
