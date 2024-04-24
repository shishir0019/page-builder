import type { PropertyTypes } from "grapesjs"
import { tiny, medium, big } from './options'

export const width: PropertyTypes = {
    // Type of the input,
    // options: integer | radio | select | color | slider | file | composite | stack
    type: 'integer',
    name: 'The width', // Label for the property
    property: 'width', // CSS property (if buildProps contains it will be extended)
    units: ['px', '%'], // Units, available only for 'integer' types
    defaults: 'auto', // Default value
    min: 0, // Min value, available only for 'integer' types
}

export const customLabel: PropertyTypes = {
    id: 'custom-prop',
    name: 'Custom Label',
    property: 'font-size',
    type: 'select',
    defaults: '32px',
    options: [tiny, medium, big],
}