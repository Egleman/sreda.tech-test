import {IDeviceItem} from "../types";

const devices = ref<IDeviceItem[]>([
    {
        id: 1, name: "Смартфон",
        nodes: [
            { id: 1, name: "Процессор" },
            { id: 2, name: "Дисплей" }
        ]
    }
])
export const useDevices = () => {
    // const generateIdDevice = () => {
    //     return devices.value.length + 1
    // }

    const generateIdNode = () => {
        // let nodeIdCounter =
        //     Math.max(...devices.value.flatMap((d) => d.nodes.map((n) => n.id)), 0) + 1
        return (Math.max(...devices.value.flatMap((d) => d.nodes.map((n) => n.id)), 0) + 1) + 1
    }

    const addDevice = () => {
        devices.value.push({
            id: devices.value.length + 1,
            name: "Новое устройство",
            nodes: [],
        })
    }
    const editDevice = (id, newName) => {
        const device = devices.value.find((device) => device.id === id)
        if (device) {
            device.name = newName
        }
    }

    const editNode = (deviceId, nodeId, newName) => {
        const device = devices.value.find((d) => d.id === deviceId)
        if (device) {
            const node = device.nodes.find((n) => n.id === nodeId)
            if (node) {
                node.name = newName
            }
        }
    }

    const removeDevice = (id) => {
        devices.value = devices.value.filter((device) => device.id !== id)
    }

    const addNodeToDevice = (deviceId) => {
        const device = devices.value.find((device) => device.id === deviceId)
        if (device) {
            device.nodes.push({ id: generateIdNode(), name: "Новый узел" })
        }
    }

    const removeNodeFromDevice = (deviceId, nodeId) => {
        const device = devices.value.find((d) => d.id === deviceId)
        if (device) {
            device.nodes = device.nodes.filter((node) => node.id !== nodeId)
        }
    }
    return {
        addDevice,
        editDevice,
        editNode,
        removeDevice,
        addNodeToDevice,
        removeNodeFromDevice,
        devices: computed(() => devices.value)
    }
}