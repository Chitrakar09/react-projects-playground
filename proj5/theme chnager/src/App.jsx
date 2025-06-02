import { ThemeProvider } from "./contexts/themeContext";
import ThemeSwitcherButton from "./components/ThemeSwitcherButton";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const changeMode = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <ThemeProvider value={{ theme, changeMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* theme switcher button */}
            <ThemeSwitcherButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card component */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
