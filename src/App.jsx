import Header from "./Header";
import { useEffect, useState } from "react";
import { ThreeCircles, ThreeDots } from "react-loader-spinner";

import MainComponent from "./MainComponent";
import WordData from "./WordData";

function App() {
  const [wordData, setWordData] = useState([]);
  const [searchText, setSearchText] = useState("");

  function onHandleSearchTextChange(enteredText) {
    setSearchText(enteredText);
  }

  const getWordData = async (myword) => {
    console.log("api called");
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${myword}`;

    const respone = await fetch(url);

    const responseJson = await respone.json();

    if (responseJson[0].word) {
      setWordData(responseJson);
    } else {
      setWordData(wordData);
    }
  };

  useEffect(() => {
    getWordData("discover");
  }, []);

  return (
    <>
      <Header
        click={() => {
          getWordData(searchText);
        }}
        searchText={searchText}
        onHandleSearchTextChange={onHandleSearchTextChange}
      />
      {wordData.length >= 1 ? (
        <MainComponent wordData={wordData} />
      ) : (
        <h4>
          Loading <ThreeDots />
        </h4>
      )}
    </>
  );
}

export default App;
