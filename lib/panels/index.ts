import type { PanelsConfig, PanelProperties } from 'grapesjs'

const panelSwitcher: PanelProperties = {
    id: 'panel-switcher',
    el: '.panel__switcher',
    buttons: [
        {
            id: 'show-layers',
            active: true,
            label: 'Layers',
            command: 'show-layers',
            togglable: false,
        },
        {
            id: 'show-style',
            active: true,
            label: 'Styles',
            command: 'show-styles',
            togglable: false,
        },
        {
            id: 'show-block',
            active: true,
            label: 'Block',
            command: 'show-block',
            togglable: false,
        }
    ]
}


export const panels: PanelsConfig = {
    defaults: [panelSwitcher]
}