import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Gudea&display=swap'); */

@import url("https://use.typekit.net/iui1ofz.css");

@import url('https://fonts.googleapis.com/css2?family=Rancho&display=swap');

*{
  font-family: "serenity", sans-serif;
font-weight: 300;
font-style: normal;
}
ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; color: white; }
h1, h2, h3 { 
font-family: graphite-std,sans-serif;
font-weight: 700;
font-style: normal;}
ul { list-style: none; }

body{
  margin: 0
}
`