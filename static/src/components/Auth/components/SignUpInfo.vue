<script setup>
import { FORM_VIEW_STATUS } from '@/helpers/constants';

// eslint-disable-next-line no-undef
const emit = defineEmits(['nextStep']);

const options = {
    state: FORM_VIEW_STATUS.SUCCESS,
    phone: '',
    group: '',
};
</script>

<template>
    <div class="sign-up-info">
        <div class="sign-up-info__group">
            <label for="input-phone" class="sign-up-info__label">
                Телефон
            </label>

            <input
                id="input-phone"
                type="text"
                class="sign-up-info__input sign-up-info__input-phone"
                placeholder="Ваш телефон"
            />
        </div>

        <div class="sign-up-info__group">
            <label for="input-spec" class="sign-up-info__label">
                Группа
            </label>

            <input
                id="input-spec"
                type="text"
                class="sign-up-info__input sign-up-info__input-spec"
                placeholder="ИС-302"
            />
        </div>

        <button
            class="sign-up-info__button"
            @click="emit('nextStep', options)"
        >
            Далее
        </button>

        <p class="sign-up-info__text">
            <span>*</span> Группа указывается сокращенно
        </p>
    </div>
</template>

<style lang="scss" scoped>
.sign-up-info {
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
    }

    &__text {
        margin-top: 20px;
        font-size: 14px;
        line-height: 20px;
        color: $gray;

        span {
            color: red;
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
