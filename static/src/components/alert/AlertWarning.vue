<script setup>
import { computed } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line no-undef
const props = defineProps({
    errorsList: {
        type: Object,
        default: () => {},
    },
});
const errors = computed(() => props.errorsList.value);
</script>

<template>
    <div class="alert-danger">
        <ul class="alert-danger__list">
            <li
                v-for="error in errors"
                :key="error"
                class="alert-danger__list-item"
            >
                {{ error }}
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.alert-danger {
    padding: 16px;
    border-radius: $radius-medium;
    &__list {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    &__list-item {
        font-size: 12px;
        font-weight: $font-regular;
        line-height: 20px;
        text-align: center;
        color: $text-color;
    }
}
</style>
