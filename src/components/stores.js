import { writable } from 'svelte/store'

export const open = writable(false)
open.subscribe(open => console.log(open))