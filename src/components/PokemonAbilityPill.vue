<script setup>
defineProps({
        abilities: Object
    })
</script>
<template>
    <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-2">
      <div v-for="ability in abilities" :key="ability.name" class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base leading-7 text-gray-600 rounded-xl border-2 px-6 py-2 border-gray-800">{{ ability.ability.name }}</dt>
      </div>
    </dl>
</template>