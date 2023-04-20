import React, {
  useContext,
  useState,
  useEffect,
  createContext,
  useCallback,
} from "react";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}
export function UserProvider({ user, children }) {
  const [toastList, setToastList] = useState([]);

  const addToast = (message, isError = false) => {
    setToastList((prev) => [
      ...prev,
      {
        message,
        isError,
      },
    ]);
  };

  const removeToast = (idx) => {
    const unfilter = toastList;
    if (idx > -1) {
      // only splice array when item is found
      unfilter.splice(idx, 1); // 2nd parameter means remove one item only
    }
    console.log(unfilter);
    setToastList(unfilter);
  };

  const value = {
    user,
    toastList,
    addToast,
    removeToast,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
