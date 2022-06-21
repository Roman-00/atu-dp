<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { months, days } from '@/helpers/date';
import ScheduleList from '@/components/schedule/ScheduleList.vue';

const store = useStore();

const date = new Date();
const fullDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

const currentDay = computed(() => days[date.getDay()]);
const currentTime = computed(() => date.getHours() < 15);

onMounted(() => {
    store.dispatch('getSchedule');
});

const schedule = computed(() => store.getters.allSchedule);
</script>

<template>
    <div class="schedule">
        <div class="schedule__block-date">
            <div class="schedule__block-date-wrapper">
                 <span class="schedule__block-date-full">
                    {{ fullDate }}
                 </span>
                 <span class="schedule__block-date-cur-day">
                    {{ currentDay }}
                 </span>
            </div>

            <img
                v-if="currentTime"
                src="@/assets/icons/sun.svg"
                alt="Добрый день!"
                class="schedule__block-date-images"
            />
            <img
                v-else
                src="@/assets/icons/moon.svg"
                alt="Добрый вечер!"
                class="schedule__block-date-images"
            />
        </div>

        <div class="schedule__block">
            <div class="row">
                <div class="col-30">
                     <span class="schedule__block-time">
                        Время
                     </span>
                </div>

                <div class="col-70">
                     <span class="schedule__block-sh">
                        Занятие
                     </span>
                </div>
            </div>
        </div>

        <ScheduleList
            :schedule="schedule"
        />
    </div>
</template>

<style scoped lang="scss">
.schedule {
    position: relative;
    padding: 20px 20px 60px;

    &__block {
        margin-bottom: 20px;
    }

    &__block-date {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 22px;
    }

    &__block-date-wrapper {
        display: flex;
        flex-direction: column;
    }

    &__block-date-full {
        display: block;
        margin-bottom: 14px;
        font-size: 14px;
        font-weight: $font-regular;
        line-height: 20px;
        color: rgba($black-primary, 0.5);
    }

    &__block-date-cur-day {
        display: block;
        font-size: 16px;
        font-weight: $font-semi-bold;
        line-height: 24px;
    }

    &__block-date-images {
        width: 60px;
        height: 60px;
        object-fit: contain;
    }

    &__block-time,
    &__block-sh {
       display: block;
        font-size: 16px;
        font-weight: $font-regular;
        line-height: 24px;
    }

    .row {
        display: flex;
    }

    .col-30 {
        width: 100%;
        max-width: 30%;
    }

    .col-70 {
        width: 100%;
        max-width: 70%;
    }
}
</style>
