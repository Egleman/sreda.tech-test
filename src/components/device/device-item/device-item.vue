<script setup lang="ts">
const props = defineProps<{
  deviceItem: IDeviceItem
}>()
const { deviceItem } = toRefs(props)

const { removeDevice } = useDevices()

const editing = ref(false)
</script>
<template>
  <DeviceEditor v-if="editing" :device-item="deviceItem" @toggle-edit="editing = !editing"/>
  <div v-else :class="$style['device-item']">
    <div :class="$style['device-item__header']">
      <span>{{ deviceItem.name }}</span>
      <VButton color="red" @click="removeDevice(deviceItem.id)">Удалить</VButton>
    </div>

    <ul :class="$style['device-item__list']">
      <li>
        <b>Список узлов:</b>
      </li>
      <li v-if="!deviceItem.nodes.length">
        Список пуст
      </li>
      <li v-for="node in deviceItem.nodes" :key="node.id">
        {{ node.name }}
      </li>
    </ul>
    <VButton color="green" @click="editing = !editing">Редактировать</VButton>
  </div>
</template>
<style module scoped>
@import './device-item.css';
</style>