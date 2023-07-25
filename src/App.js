import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import { Container, Switch } from '@material-ui/core';
import Header from './components/Header/Header';
import Definations from './components/Definations/Definations';

function App() {

  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState({});
  const [category, setCategory] = useState("en");

  const dictionaryApi = async() => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
        );

      
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(meanings);
  
  useEffect(() => {
    dictionaryApi();
  }, [word, category]);

  const PurpleSwitch = withStyles({
    switchBase: {
      color: grey[50],
      "&$checked": {
        color: grey[900],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  return ( <div className="App" style={{height:'100vh', backgroundColor:"#282c34", color:"white"}}>
    <Container maxWidth="md" style={{display:"flex", flexDirection: "column", height:'100vh'}}>
      
      <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{LightTheme ? "Dark" : "Light"} Mode</span>
          <PurpleSwitch
            checked={LightTheme}
            onChange={() => setLightTheme(!LightTheme)}
          />
      </div>

      <Header 
        category={category} 
        setCategory={setCategory} 
        word={word} 
        setWord={setWord} 
      />

      {meanings &&
        <Definations word={word} meanings={meanings} category={category} 
      />}

    </Container>
  </div>
  );
}

export default App;
