<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isShow = computed(() => route.path !== '/index');
// eslint-disable-next-line no-undef
defineProps({
    isScroll: Boolean,
    title: {
        type: String,
        default: '',
    },
});
/**
 * Вернуться назад
 */
function goBack() {
    window.history.back();
}
</script>

<template>
    <header
        class="header"
        :class="{ 'header--scroll' : isScroll}"
    >
        <button
            v-if="isShow"
            class="header__go-back"
            @click="goBack"
        >
            назад
        </button>

        <h2 class="header__title">
            {{ title }}
        </h2>
    </header>
</template>

<style scoped lang="scss">
.header {
    position:  sticky;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 44px;
    background: $white;
    z-index: 99;
    &__title {
        font-size: 0.875rem;
        font-weight: $font-regular;
        line-height: 24px;
        color: $text-color;
    }
    &__go-back {
        @include reset-button;
        position: absolute;
        left: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 30px;
        font-size: 14px;
        line-height: 20px;
        border-radius: $radius-large;
        background: $light-blue;
    }
    &--scroll {
        box-shadow: 0 2px 4px rgba($black-primary, 0.1);
    }
}
</style>
