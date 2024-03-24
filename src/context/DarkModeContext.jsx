import { createContext, useState } from 'react'

// createContext()로 우산을 만들어준다.
export const DarkModeContext = createContext();

export default function DarkModeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode((mode) => !mode);
    return (
        // 자식 컴포넌트와 공유하고 싶으면 value에 지정해주면 된다
        // darkMode와 toggleDarkMode를 children에게 제공해줌
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            { children }
        </DarkModeContext.Provider>
    )
}
