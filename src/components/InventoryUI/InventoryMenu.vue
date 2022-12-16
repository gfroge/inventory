<template>
    <div :class="isOpened ? 'menu opened' : 'menu'">
        <button @click="closeMenu" class="menu__close">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 1.05L10.95 0L6 4.95L1.05 0L0 1.05L4.95 6L0 10.95L1.05 12L6 7.05L10.95 12L12 10.95L7.05 6L12 1.05Z"
                    fill="white" />
            </svg>
        </button>
        <div class="menu__image-wrap">
            <img :src="imagePath" alt="item image">
        </div>
        <div class="menu__info">
            <div class="menu__title">
                <div class="skeleton-loader"></div>
            </div>
            <div class="menu__text">
                <div style="width: 100%;" class="menu__line">
                    <div class="skeleton-loader"></div>
                </div>
                <div style="width: 100%;" class="menu__line">
                    <div class="skeleton-loader"></div>
                </div>
                <div style="width: 100%;" class="menu__line">
                    <div class="skeleton-loader"></div>
                </div>
                <div style="width: 85.31%;" class="menu__line">
                    <div class="skeleton-loader"></div>
                </div>
                <div style="width: 37.91%;" class="menu__line">
                    <div class="skeleton-loader"></div>
                </div>
            </div>
        </div>
        <div class="menu__delete delete">
            <button @click="openPopup" class="delete__main-btn">Удалить предмет</button>
            <div ref="popup" class="delete__popup">
                <input ref="input" type="text" placeholder="Введите количество" class="delete__input">
                <div class="delete__buttons">
                    <button @click="cancel" class="delete__cancel">Отмена</button>
                    <button @click="deleteItem" class="delete__delete">Подтвердить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import { useMenuStore, useInventoryStore } from '@/stores/inventory'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const popup = ref();
const input = ref();

const menuStore = useMenuStore();
const inventoryStore = useInventoryStore();
const { close,position } = menuStore
const { remove } = inventoryStore
const { isOpened, imagePath } = storeToRefs(menuStore)

const closeMenu = () => {
    close()
}

const openPopup = () => {
    popup.value.classList.add('active')
}
const closePopup = () => {
    popup.value.classList.remove('active')
}
const cancel = () => {
    input.value.value = '';
    closePopup()
}
const deleteItem = () => {
    remove(position, Number(input.value.value));
    closeMenu()
    closePopup()
}
</script>

<style scoped lang="scss">
.menu {
    transition: all 0.3s ease 0s;
    backdrop-filter: blur(6px);
    position: absolute;
    top: 0;
    right: -47.62%;
    height: 100%;
    width: 47.62%;
    border-left: 1px solid $PRIMARY-BORDER;

    overflow: hidden;
    padding: 20px 15px;
    width: 250px;
    background-color: rgba($color: $SECONDARY-DARK, $alpha: 0.7);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &.opened {
        right: 0;
    }

    &__close {
        top: 8px;
        right: 8px;
        position: absolute;
        background: none;

        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
    }


    &__image-wrap {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 34px;

        img {
            height: 130px;
            width: 130px;
            max-width: 100%;
        }
    }

    &__info {
        width: 100%;
        padding-top: 16px;
        padding-bottom: 24px;
        border-top: 1px solid $PRIMARY-BORDER;
        border-bottom: 1px solid $PRIMARY-BORDER;
    }

    &__title {
        width: 100%;
        height: 30px;
        margin-bottom: 24px;
        border-radius: 8px;
        overflow: hidden;
    }

    &__line {
        height: 10px;
        margin: 0 auto;
        overflow: hidden;
        border-radius: 4px;

        &:not(:last-child) {
            margin-bottom: 16px;
        }
    }

    &__delete {
        position: relative;
        width: 100%;
        height: 39px;
    }
}

%btn {
    font-size: 14px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    transition: all 0.3s ease 0s;

    &:hover {
        box-shadow: 0px 0px 14px 3px rgba($color: $ACCENT, $alpha: 0.5);
    }
}

.delete {
    font-family: 'SF pro display';
    position: relative;

    &__main-btn {
        @extend %btn;
        color: #ffffff;
        background-color: $ACCENT;
        width: 100%;
        height: 100%;

        &:hover {
            box-shadow: none;
            background-color: #FF8888;
        }
    }

    &__popup {
        border-top: 1px solid $PRIMARY-BORDER;
        height: 133px;
        width: 252px;
        margin-left: -15px;
        margin-bottom: -20px;
        padding: 20px;
        position: absolute;
        left: 0;
        bottom: -133px;
        background-color: $SECONDARY-DARK;
        z-index: 300;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        transition: all 0.3s ease 0s;

        &.active {
            bottom: 0;
        }
    }

    &__input {
        background-color: $SECONDARY-DARK;
        border: 1px solid $PRIMARY-BORDER;
        border-radius: 4px;
        padding: 12px;
        font-size: 14px;
        font-weight: 500;
        color: #fff;

        &::placeholder {
            color: rgba($color: #ffffff, $alpha: 0.4);
        }
    }

    &__cancel {
        @extend %btn;
        color: #2D2D2D;
        background-color: #ffffff;

        height: 33px;
        width: 88px;
        margin-right: 10px;
        display: inline;
    }

    &__delete {
        @extend %btn;
        color: #ffffff;
        background-color: $ACCENT;
        height: 33px;
        width: 112px;
        display: inline;
    }
}
</style>