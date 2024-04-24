import type { DeviceManagerConfig, DeviceProperties } from 'grapesjs'

const desktop: DeviceProperties = { id: 'desktop', name: 'Desktop', width: '' }
const tablet: DeviceProperties = { id: 'tablet', name: 'Tablet', width: '768px', widthMedia: '992px' }
const mobilePortrait: DeviceProperties = { id: 'mobilePortrait', name: 'Mobile portrait', width: '320px', widthMedia: '575px' }

export const deviceManager: DeviceManagerConfig = {
    devices: [desktop, tablet, mobilePortrait]
}