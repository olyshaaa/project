import { ReactNode } from "react"
import { Theme, ThemeContext } from "../context/ThemeContext"
import React from "react"
import { changeCssRootVariables } from "../model/changeCssRootVariables"
import { storage } from "../model/Storage"

interface Props{
    children: ReactNode
}

export const ThemeProvider = ({children, ...props}: Props) =>{
    const [theme, setTheme] = React.useState<Theme>(storage.getItem('theme') || Theme.LIGHT)

    changeCssRootVariables(theme)

    function changeTheme(theme:  Theme) {
        storage.setItem("theme", theme)
        setTheme(theme)
        changeCssRootVariables(theme)
    }
    return <ThemeContext.Provider value={{
        theme,
        changeTheme
    }}
    {...props}
    >{children}</ThemeContext.Provider>
}