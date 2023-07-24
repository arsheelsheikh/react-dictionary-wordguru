import React from 'react';
import "./Header.css";
import categories from '../data/category';
import MenuItem from "@material-ui/core/MenuItem";
import { createMuiTheme, TextField, ThemeProvider } from "@material-ui/core";

const Header = ({setCategory, category, word, setWord}) => {
    const darkTheme = createMuiTheme({
        palette: {
          primary: {
            main: "#fff",
          },
          type: "dark",
        },
      });


      const handleChange = () => {

      }


      return (
        <div className="header">
          <span className="title">{word ? word : "Word Hunt"}</span>
          <div className="inputs">
            <ThemeProvider theme={darkTheme}>
              <TextField
                className="search"
                label="Search a Word"
                id="filled-basic"
                value={word}
                onChange={(e) => setWord(e.target.value)}
              />
              <TextField
                className="select"
                select
                label="Language"
                value={category}
                onChange={(e) => handleChange(e.target.value)}
              >
                {categories.map((option) => (
                  <MenuItem key={option.label} value={option.label}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </ThemeProvider>
          </div>
        </div>
      );
    };

export default Header;