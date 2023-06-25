export { act, startTransition, Reconciler, Reconciler as default } from './scheduler'
export type { HostConfig } from './types'

export const DiscreteEventPriority = 0b0000000000000000000000000000010
export const ContinuousEventPriority = 0b0000000000000000000000000001000
export const DefaultEventPriority = 0b0000000000000000000000000100000
export const IdleEventPriority = 0b0100000000000000000000000000000

export const LegacyRoot = 0
export const ConcurrentRoot = 1
