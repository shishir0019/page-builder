import type { BlockManagerConfig, BlockProperties } from 'grapesjs'

const section: BlockProperties = {
    id: 'section',
    label: '<b>Section</b>',
    attributes: { class: 'gjs-block-section' },
    content: `<section>
      <h1>This is a simple title</h1>
      <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
    </section>`
}

const text: BlockProperties = {
    id: 'text',
    label: 'Text',
    content: '<div data-gjs-type="text">Insert your text here</div>',
}

const image: BlockProperties = {
    id: 'image',
    label: 'Image',
    select: true,
    content: { type: 'image' },
    activate: true,
}

export const blockManager: BlockManagerConfig = {
    appendTo: '.block-container',
    blocks: [section, text, image]
}