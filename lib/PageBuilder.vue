<script setup lang="ts">
import { ref, onMounted } from 'vue'
// @ts-ignore
import grapesjs, { type Editor } from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css'

import { panels } from './panels'
import { layerManager } from './layer'
import { blockManager } from './blocks'
import { styleManager } from './style/index'
import { deviceManager } from './devices'
import { storageManager } from './storages'

import actions from './commands'

export interface Props {
    height?: string
}

const props = withDefaults(defineProps<Props>(), {
    height: '900px',
})

// state
const editor = ref<Editor | null>(null)
const gjs = ref(null)

onMounted(() => {
    if (gjs.value) {
        editor.value = grapesjs.init({
            container: gjs.value,
            height: props.height,
            width: '100%',
            panels,
            layerManager,
            styleManager,
            blockManager,
            storageManager,
            deviceManager
        })
        // editor.value.onReady((editor: Editor) => {})
        actions(editor.value)
    }
})

</script>

<template>
    <div class="root-container">
        <div class="panel__top">
            <div class="panel__basic-actions"></div>
            <div class="panel__switcher"></div>
        </div>
        <div class="editor-row">
            <div class="editor-canvas">
                <div ref="gjs" style="border: 3px solid #444;"></div>
            </div>
            <div class="panel__right">
                <div class="layers-container"></div>
                <div class="styles-container"></div>
                <div class="block-container"></div>
            </div>
        </div>
    </div>
</template>

<style src="./style.scss"></style>./block/blocks./panels/panels