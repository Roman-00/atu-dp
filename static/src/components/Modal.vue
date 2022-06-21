<script setup>
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
// eslint-disable-next-line no-undef
const emit = defineEmits(['close']);
const data = [
    {
        id: 1,
        title: 'Приветствуем',
        description: 'Листай дальше, узнаешь все что тебя здесь ждет',
        src: 'https://firebasestorage.googleapis.com/v0/b/atu-edu.appspot.com/o/images2.jpg?alt=media&token=3a8f1a84-6a0b-4ac7-8bd3-c6ceba243e8b',
    },
    {
        id: 2,
        title: 'Новости',
        description: 'Будь в крусе предстоящмх событий.Конкурсы, Мероприятия, измение в программе!',
        src: 'https://firebasestorage.googleapis.com/v0/b/atu-edu.appspot.com/o/images1.jpg?alt=media&token=7f073473-51be-4035-bbc1-590c54c5b630',
    },
    {
        id: 3,
        title: 'Расписание',
        description: 'Расписание всегда под рукой.Только актуальное расписание занятий!',
        src: 'https://firebasestorage.googleapis.com/v0/b/atu-edu.appspot.com/o/images4.jpg?alt=media&token=bedeb52a-2353-448d-9bf2-1afe9eeef753',
    },
];
</script>

<template>
    <div class="preview-modal">
        <div
            class="preview-modal__content"
            @click.stop=""
        >
            <button
                type="button"
                class="preview-modal__close"
                @click="emit('close')"
            >
                Закрыть
            </button>

            <Carousel
                :wrap-around="true"
            >
                <Slide
                    v-for="item in data"
                    :key="item.id"
                >
                    <div class="preview-modal__content-card">
                        <img
                            :src="item.src"
                            :alt="item.title"
                        />

                        <h2 class="preview-modal__content-card-title">
                            {{ item.title }}
                        </h2>

                        <p class="preview-modal__content-card-description">
                            {{ item.description }}
                        </p>
                    </div>
                </Slide>

                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </div>
    </div>
</template>

<style lang="scss">
.preview-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background: $white;
    &__content-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 500px;
    }
    &__content-card-title {
        width: 100%;
        max-width: 240px;
        margin: 20px 0;
        font-size: 18px;
        font-weight: $font-semi-bold;
        line-height: 26px;
        color: $black-primary;
    }
    &__content-card-description {
        width: 100%;
        max-width: 300px;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        color: rgba($black-primary, 0.5);
    }
    &__content {
        position: relative;
        .carousel {
            &__prev {
                display: none;
            }
            &__next {
                top: 115%;
                left: 50%;
                right: 0;
                width: 60px;
                height: 60px;
                transform: translate(-50%, -50%);
                background: rgba($black-primary, 0.1);
                &::before {
                    content: '';
                    position: absolute;
                    width: 80px;
                    height: 80px;
                    border: 2px solid $blue-primary;
                    border-radius: $radius-full;
                }
            }
            &__icon {
                fill: $black-primary;
            }
        }
    }
    &__close {
        @include reset-button;
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 30px;
        margin: 12px;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        background: $light-blue;
        border-radius: 16px;
        z-index: 1;
    }
}
</style>
