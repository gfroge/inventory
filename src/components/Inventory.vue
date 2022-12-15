<template>
    <div class="inventory">
        <div class="inventory__panel" v-for="panel in 25" :key="panel">

        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.inventory {
    border-radius: 12px;
    overflow: hidden;
    @extend %border;
    background-color: $PRIMARY-BORDER;
    display: grid;
    gap: 1px;;
    grid-template-columns: repeat(5,1fr);
    &__panel {
        background-color: $SECONDARY-DARK;
        display: inline-grid;
    }
}
</style>