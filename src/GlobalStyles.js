import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Gudea&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rancho&display=swap');
*{
  font-family: 'Gudea', sans-serif;
}
ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
h1, h2, h3 { font-family: 'Rancho', cursive;}
ul { list-style: none; }

body{
  margin: 0
}
`