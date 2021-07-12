import React, { createContext } from 'react'

import useHour from './hooks/useHour'

const HourContext = createContext()

function HourProvider({ children }) {
  const { grade, showAllGrades } = useHour()
  return (
    <HourContext.Provider value={{ grade, showAllGrades }}>
      {children}
    </HourContext.Provider>
  )
}

export { HourContext, HourProvider }
