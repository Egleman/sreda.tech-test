<script setup lang="ts">
const { devices, addDevice } = useDevices()
</script>
<template>
  <div :class="$style['device-list']">
    <VButton @click="addDevice">Добавить устройство</VButton>
    <ul :class="$style.list">
      <li v-for="device in devices" :key="device.id">
        <DeviceItem :deviceItem="device" />
      </li>
    </ul>
  </div>
</template>
<style module scoped>
@import './device-list.css';
</style>