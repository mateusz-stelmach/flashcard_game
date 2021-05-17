import React, { useState } from 'react';
import FlashcardList from './components/FlashcardList';
import {LISTA_FISZEK} from './components/FlashcardArray'
import './app.css';


function App() {

  let unLearnedArray=LISTA_FISZEK;
  const someFlashcard = generateRandomUnlearnedFlashcard(unLearnedArray);

  const [flashcards, setFlashcards] = useState(someFlashcard)
  

  function generateRandomUnlearnedFlashcard(array){

    unLearnedArray = array.filter(element => element.learned === false)    
    let randomFlashcard = unLearnedArray[Math.floor(Math.random()*unLearnedArray.length)];    
    return randomFlashcard
  }
  
  function handleLearned(array){    
     
    let flashcard = flashcards;
    flashcard.learned = true;
    setFlashcards(()=>generateRandomUnlearnedFlashcard(array))  
  }


  function handleNotLearned(){
    setFlashcards(flashcards => generateRandomUnlearnedFlashcard(LISTA_FISZEK)
    );      
  }

  function resetGame(){  
      
    LISTA_FISZEK.forEach(element => element.learned = false)
    console.log(unLearnedArray)
    setFlashcards(flashcards => generateRandomUnlearnedFlashcard(LISTA_FISZEK))    
  }
   

  return(
    <>
      <div className="container">
        <h1>Fiszki transportowe po niemiecku</h1>     
        <div>{LISTA_FISZEK.length} fiszek w puli</div>
        <div>{LISTA_FISZEK.length-unLearnedArray.length} fiszek nauczonych</div>
        {unLearnedArray.length <1 ?
          <>
            <div>to juz jest koniec</div>
            <button onClick={resetGame}>zresetuj</button>
          </>
          :
        <>
            <FlashcardList flashcards ={flashcards}/>
            <button onClick={()=>handleLearned(unLearnedArray)}>umiem</button>
            <button onClick={handleNotLearned} >nie umiem</button>
        </>
        }  
        
      </div>
    </>
  );
}

export default App;
