import fs from 'fs'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

// Need a headless DOM for GLTFLoader
import { JSDOM } from 'jsdom'
const dom = new JSDOM()
global.window = dom.window
global.document = dom.window.document
global.self = global.window

// We can just read the raw JSON from the GLB using a simpler approach since we just need the bounding box, but GLTFLoader is better.
// Actually, using a simpler script to just parse the GLTF JSON chunk might be faster, but let's try a different approach.

// Let's just create a React component that logs the bounding box on mount!
