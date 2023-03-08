<template>
    <button :style="{ color }">测试按钮</button>
</template>
<script lang="ts" setup>
    const props = defineProps<{
        color: 'blue' | 'red'
    }>()
</script>