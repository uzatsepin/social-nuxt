<template>
    <div class="flex items-center text-gray-400 cursor-pointer group">
        <div :class="`p-2 group-hover:bg-${props.color}-100 group-hover:text-${props.color}-400 rounded-full dark:group-hover:bg-opacity-20 ${defaultTransition}`">
            <slot name="icon" classes="w-5 h-5" />
        </div>
        <span :class="`ml-1 group-hover:text-${props.color}-400 ${defaultTransition}`">
            <slot name="default" />
        </span>
    </div>
</template>

<script setup>
import useTailwindConfig from "~/composables/useTailwindConfig.js";
const { defaultTransition } = useTailwindConfig()

const props = defineProps({
    color: {
        type: String,
        required: true,
    }
})

</script>