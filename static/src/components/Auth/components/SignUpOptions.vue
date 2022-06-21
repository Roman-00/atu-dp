<script setup>
import { FORM_VIEW_STATUS } from '@/helpers/constants';

// eslint-disable-next-line no-undef
const emit = defineEmits(['nextStep']);

const options = {
    state: FORM_VIEW_STATUS.OPTIONS,
    name: '',
    firstName: '',
};
</script>

<template>
    <div class="sign-up-options">
        <div class="sign-up-options__group">
            <label for="input-name" class="sign-up-options__label">
                Ваше Имя
            </label>
            <input
                v-model="options.name"
                id="input-name"
                type="text"
                class="sign-up-options__input sign-up-options__input-name"
                placeholder="Имя"
            />
        </div>

        <div class="sign-up-options__group">
            <label for="input-first-name" class="sign-up-options__label">
                Ваша Фамилия
            </label>
            <input
                v-model="options.firstName"
                id="input-first-name"
                type="text"
                class="sign-up-options__input sign-up-options__input-first-name"
                placeholder="Фамилия"
            />
        </div>

        <button
            class="sign-up-options__button"
            @click="emit('nextStep', options)"
        >
            Далее
        </button>
    </div>
</template>

<style lang="scss" scoped>
.sign-up-options {
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
}
</style>
