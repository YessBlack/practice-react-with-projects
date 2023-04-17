import { createContext, useState } from 'react'

// 1. Crear el contexto
export const FilterContext = createContext()

// 2. Crear el provider, para proveer el provider a los componentes

export function FilterProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 250
  })

  return (
    <FilterContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FilterContext.Provider>
  )
}
