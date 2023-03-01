import './App.css'
import { Moon, SunDim } from 'phosphor-react';
import { useState } from 'react';
import Profile from './components/Profile'
import styled, { ThemeProvider } from 'styled-components';


const Div = styled.div`
  padding: 5px 10px;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.fg};
  border: 1px solid ${({ theme }) => theme.fg};
  font-size: 18px;
  height: 100vh
`;


const themeDark = {
  bg: "#201f1f"
};

const themeLight = {
  bg: "#bdc7eb"
};

function App() {

  const [theme, setTheme] = useState(themeDark);
  const [activeTheme, setActiveTheme] = useState("dark");

  const [click, setClick] = useState();

  const handelClick = () => {
    setClick(!click)
    if (activeTheme === "dark") {
      setActiveTheme("light");
      setTheme(themeDark);
    } else {
      setActiveTheme("dark");
      setTheme(themeLight);
    }
  }


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Div>
          <div className='theme'>
            <div onClick={handelClick}>
              {click ? <SunDim size={32} /> : <Moon size={32} />}
            </div>
          </div>
          <Profile />
        </Div>
      </ThemeProvider>

    </div>
  )
}

export default App
