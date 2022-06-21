<template>
    <div class="sign-up-end">
        <div class="sign-up-end__group">
            <label for="input-email" class="sign-up-end__label">
                Ваш Email
            </label>
            <input
                type="email"
                id="input-email"
                class="sign-up-end__input sign-up-end__input-email"
                placeholder="Ваш Email"
            />
        </div>

        <div class="sign-up-end__group">
            <label for="input-password" class="sign-up-end__label">
                Введите пароль
            </label>
            <input
                type="password"
                id="input-password"
                class="sign-up-end__input sign-up-end__input-password"
                placeholder="Введите пароль"
            />
        </div>

        <button class="sign-up-end__button">
            Зарегистрироваться
        </button>

        <p class="sign-up-end__text">
            Вы на этапе завершения регистрации
        </p>
    </div>
</template>

<style lang="scss" scoped>
.sign-up-end {
    position: relative;

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
            color: $gray;
        }
    }

    &__button {
        @include reset-button;

        display: block;
        width: 100%;
        padding: 10px 12px;
        border-radius: $radius-small;
        background: $blue-primary;
        color: $white;
    }

    &__text {
        max-width: 200px;
        margin: 20px auto 0;
        font-size: 14px;
        font-weight: $font-semi-bold;
        color: rgba($black-primary, 0.4);
        text-align: center;
    }
}
</style>
