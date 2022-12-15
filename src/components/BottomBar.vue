<template>
    <div v-if="state.snackbar" class="snackbar" >
        <div class="snackbar__content">
            <div class="skeleton-loader"></div>
        </div>
        <button @click="close" class="snackbar__close">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 1.05L10.95 0L6 4.95L1.05 0L0 1.05L4.95 6L0 10.95L1.05 12L6 7.05L10.95 12L12 10.95L7.05 6L12 1.05Z"
                    fill="white" />
            </svg>
        </button>
    </div>
</template>

<script setup lang="ts">
import { reactive} from 'vue'

const state = reactive({
    snackbar: true,
})

const close = ()=>{    
    state.snackbar = false;
}
</script>

<style scoped lang="scss">
.snackbar {
    background-color: $SECONDARY-DARK;
    padding: 18px;
    position: relative;
    @extend %border;
    &__content {
        width: 93.58%;
        height: 36px;
        overflow: hidden;
        border-radius: 12px;
    }

    &__close {
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;

        position: absolute;
        top: 8px;
        right: 8px;
    }
}
</style>