import type { MaybeRef } from 'vue'
import { fetch } from '@tauri-apps/plugin-http'
import { type UseFetchOptions as VUseFetchOptions, createFetch as vCreateFetch } from '@vueuse/core'

type Combination = 'overwrite' | 'chain'

export interface UseFetchOptions {
  baseUrl?: MaybeRef<string>
  combination?: Combination
  options?: VUseFetchOptions
}

export function createFetch(options: UseFetchOptions = {}) {
  return vCreateFetch({
    baseUrl: options.baseUrl ?? '/',
    combination: options.combination,
    options: {
      fetch: fetch ?? window.fetch,
      ...options.options,
    },
  })
}

export const useFetch = createFetch()
