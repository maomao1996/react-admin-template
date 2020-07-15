import { useState, useMemo } from 'react'

/* 用于管理 boolean 值的 Hook */

export interface Actions {
  setTrue: () => void
  setFalse: () => void
  toggle: () => void
}

const useBoolean = (defaultValue = false): [boolean, Actions] => {
  const [state, setState] = useState(defaultValue)

  const actions: Actions = useMemo(() => {
    const setTrue = () => setState(true)
    const setFalse = () => setState(false)
    // 取反
    const toggle = () => setState((v) => !v)
    return { toggle, setTrue, setFalse }
  }, [])

  return [state, actions]
}

export default useBoolean
