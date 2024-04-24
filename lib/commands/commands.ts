import type { Editor } from 'grapesjs'

export const showLayers: any = {
    getRowEl(editor: Editor) { return editor?.getContainer()?.closest('.editor-row'); },
    getLayersEl(row: any) { return row.querySelector('.layers-container') },
    run(editor: Editor) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = '';
    },
    stop(editor: Editor) {
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = 'none';
    }
}

export const showStyle: any = {
    getRowEl(editor: Editor) { return editor?.getContainer()?.closest('.editor-row'); },
    getStyleEl(row: any) { return row.querySelector('.styles-container') },

    run(editor: Editor) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = '';
    },
    stop(editor: Editor) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = 'none';
    },
}

export const showBlock: any = {
    getRowEl(editor: Editor) { return editor?.getContainer()?.closest('.editor-row'); },
    getStyleEl(row: any) { return row.querySelector('.block-container') },

    run(editor: Editor) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = '';
    },
    stop(editor: Editor) {
        const smEl = this.getStyleEl(this.getRowEl(editor));
        smEl.style.display = 'none';
    },
}