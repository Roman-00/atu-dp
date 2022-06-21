<script setup>
import { ref, watch } from 'vue';
import { ALERT_STATE } from '@/helpers/alert';
import AuthLoginForm from '@/components/Auth/LoginForm.vue';
import Alert from '@/components/Alert.vue';

const state = ref(ALERT_STATE.DEFAULT);
const errors = ref(null);
const isShowAlert = ref(false);
const closeTimeout = ref(null);

const ALERT_SHOW_DURATION = 5000;
/**
 * Обновляем state или view для alert
 */
const updateState = (event) => {
    state.value = event.state;
    errors.value = event.errors;
    isShowAlert.value = true;
};
/**
 * Сбрасываем TimeOut
 */
const clear = () => {
    if (closeTimeout.value) {
        clearTimeout(closeTimeout);
        closeTimeout.value = null;
    }
};
/**
 * Показываем и через время скрываем Alert
 */
watch(isShowAlert, (currentValue) => {
    if (currentValue) {
        closeTimeout.value = setTimeout(() => {
            isShowAlert.value = false;
            errors.value = null;
            state.value = ALERT_STATE.DEFAULT;
            clear();
        }, ALERT_SHOW_DURATION);
    }
});
</script>

<template>
    <div class="sign-in">
        <img src="@/assets/images/auth-previews.jpg" alt="Auth Images" />

        <AuthLoginForm
            @update-state="updateState"
        />

        <Alert
            :state="state"
            :errors-list="errors"
            :is-show-alert="isShowAlert"
        />

        <p class="sign-in__text">
            Если у вас нет еще аккаунта
            <router-link to="/signup" class="sign-in__link-sign-up">
                Зарегистрируйтесь
            </router-link>
        </p>
    </div>
</template>

<style lang="scss" scoped>
.sign-in {
    position: relative;
    padding: 30px 20px;

    img {
        display: block;
        max-width: 280px;
        margin: 0 auto;
    }

    &__text {
        margin-top: 12px;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
    }

    &__link-sign-up {
        display: block;
        font-weight: $font-semi-bold;
        text-decoration: none;
        color: $blue-primary;
    }
}
</style>
