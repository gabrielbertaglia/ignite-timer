import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
}

export type ActionTypesProps =
  | { type: ActionTypes.ADD_NEW_CYCLE; payload: { newCycle: Cycle } }
  | { type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED }
  | { type: ActionTypes.INTERRUPT_CURRENT_CYCLE }

export function addNewCycleAction(newCycle: Cycle): ActionTypesProps {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleAsFinishedAction(): ActionTypesProps {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}

export function interruptCurrentCycleAction(): ActionTypesProps {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}
