<script setup>
const navList = [
    {
        id: 'home',
        to: '/index',
        exact: true,
    },
    {
        id: 'schedule',
        to: '/schedule',
        exact: true,
    },
    {
        id: 'user',
        to: '/user',
        exact: true,
    },
];
</script>

<template>
    <footer class="footer">
        <nav class="nav footer-nav">
            <ul class="nav-list">
                <li
                    v-for="item in navList"
                    :key="item.id"
                    class="nav-list__item"
                >
                    <router-link
                        :to="item.to"
                        :exact="item.exact"
                        :active-class="`nav-list__item-link-${item.id}--active`"
                        class="nav-list__item-link"
                        :class="`nav-list__item-link-${item.id}`"
                    />
                </li>
            </ul>
        </nav>
    </footer>
</template>

<style scoped lang="scss">
.footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    min-height: 66px;
    padding: 21px 28px;
    border-radius: $radius-large $radius-large 0 0;
    background: $white;
    box-shadow: 0 -2px 20px rgba($black-primary, 0.1);
    z-index: 999;
}
.nav-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    &__item-link {
        position: relative;
        display: block;
        width: 24px;
        height: 24px;
    }
    &__item-link-home {
        background: url('../assets/icons/home.svg') no-repeat center center / cover;
        &--active {
            background: url('../assets/icons/home-active.svg') no-repeat center center / cover;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                right: -5px;
                width: 6px;
                height: 6px;
                border-radius: $radius-full;
                background: $blue-primary;
            }
        }
    }
    &__item-link-schedule {
        background: url('../assets/icons/schedule.svg') no-repeat center center / cover;
        &--active {
            background: url('../assets/icons/schedule-active.svg') no-repeat center center / cover;
            &::before {
                content: '';
                position: absolute;
                top: -4px;
                right: -8px;
                width: 6px;
                height: 6px;
                border-radius: $radius-full;
                background: $blue-primary;
            }
        }
    }
    &__item-link-favorites {
        background: url('../assets/icons/favorites.svg') no-repeat center center / cover;
        &--active {
            background: url('../assets/icons/favorites-active.svg') no-repeat center center / cover;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                right: -5px;
                width: 6px;
                height: 6px;
                border-radius: $radius-full;
                background: $blue-primary;
            }
        }
    }
    &__item-link-messages {
        background: url('../assets/icons/messages.svg') no-repeat center center / cover;
        &--active {
            background: url('../assets/icons/messages-active.svg') no-repeat center center / cover;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                right: -5px;
                width: 6px;
                height: 6px;
                border-radius: $radius-full;
                background: $blue-primary;
            }
        }
    }
    &__item-link-user {
        background: url('../assets/icons/user.svg') no-repeat center center / cover;
        &--active {
            background: url('../assets/icons/user-active.svg') no-repeat center center / cover;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                right: -5px;
                width: 6px;
                height: 6px;
                border-radius: $radius-full;
                background: $blue-primary;
            }
        }
    }
}
</style>
