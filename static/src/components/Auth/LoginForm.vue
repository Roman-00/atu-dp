<script setup>
import axios from 'axios';

const data = {
    email: '',
    password: '',
};

/**
 *  Отправляем данные для входа
 */
function handleSubmit() {
    axios.post('/api/auth/login', data)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}
</script>

<template>
    <div class="login">
        <h1 class="login__title">
            Авторизоваться в системе
            Универ
        </h1>
        <form
            class="login__form"
            @submit.prevent="handleSubmit"
        >
            <div class="login__form-group">
                <label for="login-form-email" class="login__form-label">
                    Ваш E-mail
                </label>
                <input
                    v-model="data.email"
                    id="login-form-email"
                    type="email"
                    class="login__form-input"
                    placeholder="example@mail.ru"
                >
            </div>

            <div class="login__form-group">
                <label for="login-form-password" class="login__form-label">
                    Ваш пароль
                </label>
                <input
                    v-model="data.password"
                    id="login-form-password"
                    type="password"
                    class="login__form-input"
                    placeholder="введите пароль"
                >
            </div>

            <button
                type="submit"
                class="login__form-button"
            >
                Войти
            </button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.login {
    position: relative;

    &__title {
        max-width: 240px;
        margin: 0 auto 20px;
        font-size: 16px;
        font-weight: $font-semi-bold;
        line-height: 24px;
        text-align: center;
        color: $black-primary;
    }

    &__form-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 28px;
    }

    &__form-label {
        margin-bottom: 4px;
        font-size: 14px;
        line-height: 20px;
        color: $gray;
    }

    &__form-input {
        width: 100%;
        padding: 10px;
        border: 1px solid rgba($black-primary, 0.2);
        border-radius: $radius-small;

        &::placeholder {
            color: rgba($black-primary, 0.3);
        }
    }

    &__form-button {
        @include reset-button;

        width: 100%;
        padding: 12px 0;
        font-size: 14px;
        line-height: 20px;
        border-radius: $radius-small;
        background: $blue-primary;
        box-shadow: 0 2px 4px rgba($black-primary, 0.2);
        color: $white;
    }
}
</style>
