<script setup>
import { computed } from 'vue';
import { ALERT_STATE } from '@/helpers/alert';
import AlertWarning from './alert/AlertWarning.vue';
// eslint-disable-next-line no-undef
const props = defineProps({
    state: Number,
    errorsList: {
        type: Object,
        default: () => {},
    },
    isShowAlert: Boolean,
});
const isShowWarning = computed(() => props.state === ALERT_STATE.ERROR);
</script>

<template>
    <div
        class="alert"
        :class="{ 'alert--active' : isShowAlert }"
    >
        <AlertWarning
            v-if="isShowWarning"
            :errors-list="errorsList"
        />
    </div>
</template>

<style scoped lang="scss">
.alert {
    position: fixed;
    top: 0;
    right: -100%;
    margin: 20px;
    transition: right 0.5s ease;
    &--active {
        right: 0;
    }
}
</style>
