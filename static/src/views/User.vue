<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import UserModal from '@/components/user/UserModal.vue';

const store = useStore();

onMounted(() => {
    store.dispatch('getUserInfo');
});

const user = computed(() => store.getters.userInfo);
</script>

<template>
    <div class="user">
        <UserModal>
            <div class="user-info">
                <div class="user-info-wrapper">
                    <span class="user-avatar__text">
                        {{ user.initial }}
                    </span>

                    <span class="user-name">
                        {{ user.firstName }}  {{ user.lastName }}
                    </span>
                </div>

                <div class="user-info-education">
                    <span>
                         Специальность:
                    </span>
                    <span>
                        {{ user.specialization }}
                    </span>
                </div>

                <div class="user-info-education">
                    <span>
                         Курс:
                    </span>
                    <span>
                        {{ user.course }}
                    </span>
                </div>

                <div class="user-info-education">
                    <span>
                         Степень:
                    </span>
                    <span>
                        {{ user.stepEducation }}
                    </span>
                </div>
            </div>
        </UserModal>
    </div>
</template>

<style scoped lang="scss">
.user-avatar {
    &__text {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        margin: 20px;
        font-weight: $font-semi-bold;
        border-radius: $radius-full;
        background: rgba($gray, 0.3);
    }
}

.user-info-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}

.user-info-education {
    display: flex;
    margin-bottom: 20px;

    span {
        display: block;

        &:first-child {
            margin-right: 12px;
        }

    }
}
</style>
