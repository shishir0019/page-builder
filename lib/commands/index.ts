import type { Editor } from 'grapesjs'
import { showLayers, showStyle, showBlock } from './commands'

export default (editor: Editor) => {
    editor.Commands.add('show-layers', showLayers)
    editor.Commands.add('show-styles', showStyle)
    editor.Commands.add('show-block', showBlock)
}
