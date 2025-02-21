<<<<<<< HEAD
import type { Updater } from '@tanstack/vue-table'
import type { Ref } from 'vue'
=======
>>>>>>> d04ade7 (Add frontend boilerplate in monorepo)
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
<<<<<<< HEAD

export function valueUpdater<T extends Updater<any>>(updaterOrValue: T, ref: Ref) {
  ref.value
    = typeof updaterOrValue === 'function'
      ? updaterOrValue(ref.value)
      : updaterOrValue
}
=======
>>>>>>> d04ade7 (Add frontend boilerplate in monorepo)
