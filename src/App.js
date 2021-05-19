import React, { useState , useRef } from 'react';
import { useLocation , Link } from "react-router-dom"
import FlashcardList from './components/FlashcardList';
import './app.css';
import { LISTA_FISZEK } from './components/FlashcardArray';


function App() {
  const location = useLocation();
  let selectedArray = location.state  

  let unLearnedArray = selectedArray
 
//  console.log(unLearnedArray.current)
  
  const someFlashcard = generateRandomUnlearnedFlashcard(unLearnedArray);

  const [flashcards, setFlashcards] = useState(someFlashcard)
  

  function generateRandomUnlearnedFlashcard(array){

    unLearnedArray = array.filter(element => element.learned === false)    
    let randomFlashcard = unLearnedArray[Math.floor(Math.random()*unLearnedArray.length )];    
    return randomFlashcard
  }
  
  function handleLearned(array){    
     
    let flashcard = flashcards;
    flashcard.learned = true;
    setFlashcards(()=>generateRandomUnlearnedFlashcard(array))  
  }


  function handleNotLearned(array){
    
    setFlashcards(flashcards=>generateRandomUnlearnedFlashcard(array))  
    console.log(unLearnedArray);      
  }

  function resetGame(){  
      
    selectedArray.forEach(element => element.learned = false)
    LISTA_FISZEK.forEach(element => element.learned = false)
    
    setFlashcards(flashcards => generateRandomUnlearnedFlashcard(selectedArray))   
    console.log(selectedArray) 
  }
   

  return(
    <>
      <div className="container">
        <h1>Fiszki transportowe po niemiecku</h1>     
        <div>{unLearnedArray.length} losowych fiszek z ogolnej puli {LISTA_FISZEK.length} wyrazów </div>
        <div>{selectedArray.length -unLearnedArray.length} fiszek nauczonych</div>
        {unLearnedArray.length <1 ?
          <>
            <div>to juz jest koniec</div>
            <button onClick={resetGame}>powtórz te same fiszki</button>
            <Link to="./"><button onClick={resetGame}>wybierz nową pulę</button></Link>
          </>
          :
        <>
            <FlashcardList flashcards ={flashcards}/>
            <button onClick={()=>handleLearned(unLearnedArray)}>umiem</button>
            <button onClick={() =>handleNotLearned(unLearnedArray)} >nie umiem</button>
        </>
        }  
        
      </div>
    </>
  );
}

export default App;
