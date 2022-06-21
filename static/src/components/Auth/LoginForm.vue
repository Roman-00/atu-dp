<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { ALERT_STATE } from '@/helpers/alert';

const router = useRouter();

// eslint-disable-next-line no-undef
const emit = defineEmits(['update-state']);

const email = ref('');
const password = ref('');
const errorList = ref([]);

/**
 * Валидация полей формы
 */
function isValid() {
    if (email.value === '' && password.value === '') {
        errorList.value = [];
        errorList.value.push('Поля Email* и Пароль не заполнены!');
        emit('update-state', {
            state: ALERT_STATE.ERROR,
            errors: errorList,
        });
        return false;
    }
    if (email.value === '') {
        errorList.value = [];
        errorList.value.push('Поле Email* пустое');
        emit('update-state', {
            state: ALERT_STATE.ERROR,
            errors: errorList,
        });
        return false;
    }
    if (password.value === '') {
        errorList.value = [];
        errorList.value.push('Поле Пароль* пустое');
        emit('update-state', {
            state: ALERT_STATE.ERROR,
            errors: errorList,
        });
        return false;
    }
    return true;
}
/**
 * Отправляем данные с формы, для авторизации пользователя
 */
function handleSubmit() {
    if (!isValid()) return;
    try {
        axios.post('/api/auth/login', {
            email: email.value,
            password: password.value,
        })
            .then((response) => {
                if (response.status === 200) {
                    router.push('/index');
                }
            })
            .catch((e) => {
                console.log(e);
            });
    } catch (e) {
        console.log(e);
    }
}
</script>

<template>
    <form
        class="login-form"
        @submit.prevent="handleSubmit"
    >
        <h2 class="login-form__title">
            Войти в свой аккаунт
        </h2>

        <div class="login-form__group">
            <label for="input-email" class="login-form__label">
                Ваш E-mail
            </label>

            <input
                v-model="email"
                type="email"
                id="input-email"
                class="login-form__input login-form__email"
                placeholder="example@mail.ru"
            />
        </div>

        <div class="login-form__group">
            <label for="input-password" class="login-form__label">
                Ваш пароль
            </label>

            <input
                v-model="password"
                type="password"
                id="input-password"
                class="login-form__input login-form__password"
                placeholder="введите пароль"
            />
        </div>

        <button class="login-form__button">
            Войти
        </button>
    </form>
</template>

<style lang="scss" scoped>
.login-form {
    position: relative;

    &__title  {
        max-width: 240px;
        margin: 0 auto 20px auto;
        font-size: 18px;
        font-weight: $font-semi-bold;
        line-height: 26px;
        text-align: center;
    }

    &__group {
        margin-bottom: 20px;
    }

    &__label {
        display: block;
        width: 100%;
        margin-bottom: 8px;
        font-size: 14px;
        line-height: 20px;
        color: $gray;
    }

    &__input {
        display: block;
        width: 100%;
        padding: 10px 12px;
        font-size: 14px;
        line-height: 20px;
        border-radius: $radius-small;
        border: 1px solid rgba($black-primary, 0.3);
        color: $black-primary;

        &:placeholder {
            color: rgba($black-primary, 0.2);
        }
    }

    &__button {
        @include reset-button;

        width: 100%;
        padding: 10px 12px;
        font-size: 14px;
        line-height: 20px;
        border-radius: $radius-small;
        background: $blue-primary;
        color: $white;
    }
}
</style>
