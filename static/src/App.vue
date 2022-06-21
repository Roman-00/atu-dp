<script setup>
import {
    computed,
    onBeforeUnmount, onMounted, onUnmounted, ref, watch,
} from 'vue';
import { useRoute } from 'vue-router';
import debounce from 'lodash/debounce';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Modal from '@/components/Modal.vue';

const route = useRoute();
const isShow = ref(false);
const isScroll = ref(false);
const closeTimeout = ref(null);
const showModal = ref(false);

const LOADER_SHOW_DURATION = 3000;
/**
 * Получаем title роутов, для перехода
 */
const title = computed(() => route.name);
/**
 * Отображаем header & footer только на страницах
 */
const hidden = computed(() => route.path !== '/');
/**
 * Добавляем тень для header при скролле
 */
const scrollHeader = debounce(() => {
    isScroll.value = window.scrollY > 5;
}, 16);
/**
 * Сбрасываем TimeOut
 */
const clear = () => {
    if (closeTimeout.value) {
        clearTimeout(closeTimeout);
        closeTimeout.value = null;
    }
};
watch(isShow, (currentValue) => {
    if (currentValue) {
        closeTimeout.value = setTimeout(() => {
            isShow.value = false;
            clear();
        }, LOADER_SHOW_DURATION);
    }
});
onMounted(() => {
    window.addEventListener('scroll', scrollHeader);
    isShow.value = true;
});
onBeforeUnmount(() => {
    clear();
});
onUnmounted(() => {
    window.removeEventListener('scroll', scrollHeader);
});

/**
 * Обновляем состояние модального окна точнеее его view
 */
function updateStateModal() {
    showModal.value = !showModal.value;
}
</script>

<template>
    <Header
        v-if="hidden"
        :is-scroll="isScroll"
        :title="title"
    />
    <router-view/>
    <Footer
        v-if="hidden"
    />

    <Modal v-if="!showModal" @close="updateStateModal"/>
</template>

<style lang="scss">
#app {
    min-height: 100vh;
}
</style>
