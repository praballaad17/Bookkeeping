import React, { useContext, useState, useEffect, createContext, useCallback } from 'react'

const UserContext = createContext();

export function useUser() {
    return useContext(UserContext)
}
export function UserProvider({ user, children }) {

    const value = {
        user
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}
