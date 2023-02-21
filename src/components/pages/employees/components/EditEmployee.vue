<template>
  <div class="form">
    <div class="field">
      <MyInput
        class="input"
        name="lastName"
        placeholder="Last name"
        v-model="form.lastName.value"
      />
      <div v-if="!form.lastName.errors.required">
        <p v-if="form.lastName.errors.maxLength" class="error">
          Last name length can't be more then 20. Now it is
          {{ form.lastName.value.length }}.
        </p>
      </div>
      <p v-else class="error">Field is required.</p>
    </div>
    <div class="field">
      <MyInput
        class="input"
        name="firstName"
        placeholder="First name"
        v-model="form.firstName.value"
      />
      <div v-if="!form.firstName.errors.required">
        <p v-if="form.firstName.errors.maxLength" class="error">
          First name length can't be more then 10. Now it is
          {{ form.firstName.value.length }}.
        </p>
      </div>
      <p v-else class="error">Field is required.</p>
    </div>
    <div class="field">
      <MyInput
        class="input"
        name="title"
        placeholder="Title"
        v-model="form.title.value"
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
        name="titleOfCourtesy"
        placeholder="Title of courtesy"
        v-model="form.titleOfCourtesy.value"
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
        name="birthDate"
        placeholder="Birth date"
        v-model="form.birthDate.value"
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
        name="hireDate"
        placeholder="Hire date"
        v-model="form.hireDate.value"
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
        name="address"
        placeholder="Address"
        v-model="form.address.value"
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
        name="city"
        placeholder="City"
        v-model="form.city.value"
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
        name="region"
        placeholder="Region"
        v-model="form.region.value"
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
        name="postalCode"
        placeholder="Postal code"
        v-model="form.postalCode.value"
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
        name="country"
        placeholder="Country"
        v-model="form.country.value"
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
        name="homePhone"
        placeholder="Home phone"
        v-model="form.homePhone.value"
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
        name="extension"
        placeholder="Extension"
        v-model="form.extension.value"
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
        name="notes"
        placeholder="Notes"
        v-model="form.notes.value"
      />
      <!-- <div v-if="form.unitPrice.value.length !== 0">
            <p v-if="form.city.errors.maxLength" class="error">
              City length can't be more then 15. Now it is
              {{ form.unitPrice.value.length }}.
            </p>
          </div> -->
    </div>
    <div class="field">
      <Multiselect
        v-model="form.reportsTo.value"
        :options="employees"
        placeholder="Reports to"
        :custom-label="
            (employee: any) => employee.firstName + ' ' + employee.lastName
          "
        track-by="id"
      ></Multiselect>
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
  employees: {
    id: number;
    firstName: string;
    lastName: string;
    title: string | null;
    titleOfCourtesy: string | null;
    birthDate: Date | null;
    hireDate: Date | null;
    address: string | null;
    city: string | null;
    region: string | null;
    postalCode: string | null;
    country: string | null;
    homePhone: string | null;
    extension: string | null;
    photo: string | null;
    notes: string | null;
    reportsTo: number | null;
    photoPath: string | null;
  }[];
  employee: {
    id: number;
    firstName: string;
    lastName: string;
    title: string | null;
    titleOfCourtesy: string | null;
    birthDate: Date | null;
    hireDate: Date | null;
    address: string | null;
    city: string | null;
    region: string | null;
    postalCode: string | null;
    country: string | null;
    homePhone: string | null;
    extension: string | null;
    photo: string | null;
    notes: string | null;
    reportsTo: number | null;
    photoPath: string | null;
  };
}>();
const emit = defineEmits<{
  (
    e: 'update',
    payload: {
      lastName: string;
      firstName: string;
      title: string | null;
      titleOfCourtesy: string | null;
      birthDate: Date | null;
      hireDate: Date | null;
      address: string | null;
      city: string | null;
      region: string | null;
      postalCode: string | null;
      country: string | null;
      homePhone: string | null;
      extension: string | null;
      photo: string | null;
      notes: string | null;
      reportsTo: number | null;
      photoPath: string | null;
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
  lastName: {
    value: props.employee.lastName ?? '',
    validators: {
      required,
      minLength: minLength(1),
      maxLength: maxLength(20),
    },
  },
  firstName: {
    value: props.employee.firstName ?? '',
    validators: {
      required,
      minLength: minLength(1),
      maxLength: maxLength(10),
    },
  },
  title: {
    value: props.employee.title ?? '',
    validators: {
      optional,
    },
  },
  titleOfCourtesy: {
    value: props.employee.titleOfCourtesy ?? '',
    validators: {
      optional,
    },
  },
  birthDate: {
    value: props.employee.birthDate ?? '',
    validators: {
      optional,
    },
  },
  hireDate: {
    value: props.employee.hireDate ?? '',
    validators: {
      optional,
    },
  },
  address: {
    value: props.employee.address ?? '',
    validators: {
      optional,
    },
  },
  city: {
    value: props.employee.city ?? '',
    validators: {
      optional,
    },
  },
  region: {
    value: props.employee.region ?? '',
    validators: {
      optional,
    },
  },
  postalCode: {
    value: props.employee.postalCode ?? '',
    validators: {
      optional,
    },
  },
  country: {
    value: props.employee.country ?? '',
    validators: {
      optional,
    },
  },
  homePhone: {
    value: props.employee.homePhone ?? '',
    validators: {
      optional,
    },
  },
  extension: {
    value: props.employee.extension ?? '',
    validators: {
      optional,
    },
  },
  notes: {
    value: props.employee.notes ?? '',
    validators: {
      optional,
    },
  },
  reportsTo: {
    value: props.employee.reportsTo
      ? props.employees.find((e) => e.id === props.employee.reportsTo)
      : null,
    validators: {
      optional,
    },
  },
});
const update = () => {
  emit('update', {
    lastName: form.lastName.value,
    firstName: form.firstName.value,
    title: form.title.value.length !== 0 ? form.title.value : null,
    titleOfCourtesy:
      form.titleOfCourtesy.value.length !== 0
        ? form.titleOfCourtesy.value
        : null,
    birthDate: form.birthDate.value.length !== 0 ? form.birthDate.value : null,
    hireDate: form.hireDate.value.length !== 0 ? form.hireDate.value : null,
    address: form.address.value.length !== 0 ? form.address.value : null,
    city: form.city.value.length !== 0 ? form.city.value : null,
    region: form.region.value.length !== 0 ? form.region.value : null,
    postalCode:
      form.postalCode.value.length !== 0 ? form.postalCode.value : null,
    country: form.country.value.length !== 0 ? form.country.value : null,
    homePhone: form.homePhone.value.length !== 0 ? form.homePhone.value : null,
    extension: form.extension.value.length !== 0 ? form.extension.value : null,
    photo: form.photo.value,
    notes: form.notes.value.length !== 0 ? form.notes.value : null,
    reportsTo: form.reportsTo.value ? form.reportsTo.value.id : null,
    photoPath: form.photoPath.value,
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
