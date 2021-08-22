import { writable } from 'svelte/store'
import '../firebase/config'
export let loged = writable(true)
