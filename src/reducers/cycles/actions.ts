import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

interface newCycleActionProps {
  type: ActionTypes.ADD_NEW_CYCLE
  payload: { newCycle: Cycle }
}

interface markCurrentCycleAsFinishedProps {
  type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED
}

interface interruptedCycleActionProps {
  type: ActionTypes.INTERRUPT_CURRENT_CYCLE
}

export type ActionsProp =
  | newCycleActionProps
  | markCurrentCycleAsFinishedProps
  | interruptedCycleActionProps

export function addNewCycleAction(newCycle: Cycle): newCycleActionProps {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleAsFinishedAction(): markCurrentCycleAsFinishedProps {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}

export function interruptCycleAction(): interruptedCycleActionProps {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}
