import { writable } from 'svelte/store'

export const visible = writable(false)


export const add = () => {
  console.log('Add document')
}


export const list = [
  {title: '000001 Bob Esponja'},
  {title: '000002 Patrick'},
  {title: '000003 Lula Molusco'},
  {title: '000004 Sr. Sirigueijo'},
  {title: '000005 Garry'},
]