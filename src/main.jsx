import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import Home from './home.jsx'
import './assets/styles/main.css'
import Noto from '../src/assets/font/Noto_Sans_Hebrew/NotoSansHebrew-VariableFont_wdth,wght.ttf'
import NotoThin from '../src/assets/font/Noto_Sans_Hebrew/static/NotoSansHebrew-Light.ttf'
import { CssBaseline } from '@mui/material';
import Header from './components/header.component.jsx';


const theme = createTheme({
  typography: {
    fontFamily: 'main-font',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
          font-family: 'main-font';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Noto'), local('Noto-Regular'), url(${Noto}) format('trueType');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'main-font';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: local('NotoThin'), local('Noto-Bold'), url(${Noto}) format('trueType');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'main-font-thin';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Noto'), local('Noto-ExtraLight'), url(${NotoThin}) format('trueType');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
    
        body {
          background-color: #F5F3EF;
        }
          *{
        box-sizing:border-box
        }
        button{
        cursor:pointer
        }
      `,
    },
  },
});


const pages = ['נעים להכיר', 'האימונים שלנו', 'ברוכים הבאים'];
const pageNames = ['about', 'trains', 'welcome']


createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header pageNames={pageNames} pages={pages} />
    <Home pageNames={pageNames} pages={pages} />
  </ThemeProvider>
)
