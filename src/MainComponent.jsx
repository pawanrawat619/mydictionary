function MainComponent({ wordData }) {
  const word = wordData[0].word;
 

  const meaning = wordData[0].meanings[0].definitions[0].definition;

  const phonetic = wordData[0].phonetic;



  const mysynonyms = wordData[0].meanings.filter(function (myDesiredArray) {
    return (
      myDesiredArray.synonyms.length >= 1 || myDesiredArray.antonyms.length >= 1
    );
  });

  const finalSynonyms = mysynonyms[0].synonyms.slice(0, 4).join(",");


  const myantonyms = wordData[0].meanings.filter(function (myDesiredArray) {
    return (
      myDesiredArray.synonyms.length >= 1 || myDesiredArray.antonyms.length >= 1
    );
  });
  const finalAntnonyms = myantonyms[0].antonyms.slice(0, 3).join(",");

  return (
    <main>
      <div className="word-details">
        <h2>"{word}"</h2>

        <p className="meaning">
          <strong>Meaning: </strong>
          {meaning ? meaning : "not available"}
        </p>
        <p className="phonetic">
          <strong>Phonetic: </strong>

          {phonetic ? phonetic : "not available"}
        </p>
        <p className="synonyms">
          <strong>Synonyms: </strong>

          {finalSynonyms ? finalSynonyms : "not available"}
        </p>
        <p className="antonyms">
          <strong>Antonyms: </strong>

          {finalAntnonyms ? finalAntnonyms : "not available"}
        </p>
      </div>
    </main>
  );
}

export default MainComponent;
