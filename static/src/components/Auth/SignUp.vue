<script setup>
import { ref } from 'vue';
import { FORM_VIEW_STATUS } from '@/helpers/constants';
import SignUpOptions from '@/components/Auth/components/SignUpOptions.vue';
import SignUpInfo from '@/components/Auth/components/SignUpInfo.vue';
import SignUpEnd from '@/components/Auth/components/SignUpEnd.vue';

const lastName = ref('');
const firstName = ref('');
const group = ref('');
const phoneNumber = ref('');
const email = ref('');
const password = ref('');
const state = ref(FORM_VIEW_STATUS.DEFAULT);

/**
 * Обновляем view блока в форме регистрации
 */
function updateStateForm(event) {
    console.log(event);
    state.value = event.state;
    lastName.value = event.name;
    firstName.value = event.firstName;
    group.value = event.group;
    phoneNumber.value = event.phone;
    email.value = event.email;
    password.value = event.password;
}
</script>

<template>
    <form
        class="sign-up-form"
        @submit.prevent=""
    >
        <h2 class="sign-up-form__title">
            Зарегистрировать аккаунт
        </h2>

        <SignUpOptions
            v-if="state === FORM_VIEW_STATUS.DEFAULT"
            @nextStep="updateStateForm"
        />
        <SignUpInfo
            v-if="state === FORM_VIEW_STATUS.OPTIONS"
            @nextStep="updateStateForm"
        />
        <SignUpEnd
            v-if="state === FORM_VIEW_STATUS.SUCCESS"
        />
    </form>
</template>

<style lang="scss" scoped>
.sign-up-form {
    position: relative;

    &__title {
        max-width: 260px;
        margin: 0 auto 20px auto;
        font-size: 18px;
        line-height: 28px;
        text-align: center;
    }
}
</style>
