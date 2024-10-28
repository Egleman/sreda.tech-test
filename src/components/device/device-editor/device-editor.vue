<script setup lang="ts">
import draggable from 'vuedraggable'

const props = defineProps<{
  deviceItem: IDeviceItem
}>()
const { deviceItem } = toRefs(props)

const emit = defineEmits(['toggleEdit'])

const { addNodeToDevice, editDevice, removeNodeFromDevice } = useDevices()

const drag = ref(false)

const saveEdit = () => {
  editDevice(deviceItem.value.id, deviceItem.value.name)
  emit("toggleEdit")
}
</script>
<template>
  <div :class="$style['device-editor']">
    <input v-model="deviceItem.name" placeholder="Название устройства" />

    <!-- Список узлов устройства с использованием draggable -->
    <draggable
        :class="$style['node-list']"
        v-model="deviceItem.nodes"
        @start="drag = true"
        @end="drag = false"
        item-key="id"
    >
      <template #item="{ element }">
        <div :class="$style['node-item']">
          <input v-model="element.name" placeholder="Название узла" />
          <VButton @click="removeNodeFromDevice(deviceItem.id, element.id)">Удалить узел</VButton>
        </div>
      </template>
    </draggable>

    <!-- кнопки управления -->
    <div :class="$style['device-editor__footer']">
      <VButton @click="addNodeToDevice(deviceItem.id)">Добавить узел</VButton>
      <VButton @click="saveEdit">Сохранить</VButton>
    </div>
  </div>
</template>
<style module scoped>
@import './device-editor.css';
</style>