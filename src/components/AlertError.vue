<template>
    <div class="rounded-md bg-red-100 p-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-red-800">Hubo un error al recibir los datos</h3>
          <div class="mt-2 text-sm text-red-700">
            <p>Vuelva a intentarlo mas tarde.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { XCircleIcon } from '@heroicons/vue/20/solid'
  </script>