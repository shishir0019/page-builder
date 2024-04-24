import type { StyleManagerConfig, SectorProperties } from 'grapesjs'

import { width, customLabel } from './property'

const dimension: SectorProperties = {
    name: 'Dimension',
    open: false,
    buildProps: ['width', 'min-height', 'padding'],
    properties: [width]
}

const extra: SectorProperties = {
    name: 'Extra',
    open: false,
    buildProps: ['background-color', 'box-shadow', 'custom-prop'],
    properties: [customLabel]
}

export const styleManager: StyleManagerConfig = {
    appendTo: '.styles-container',
    sectors: [dimension, extra]
}