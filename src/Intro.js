import React, {useState} from 'react'
import {Link } from 'react-router-dom'
import { LISTA_FISZEK } from './components/FlashcardArray';


function Intro() {
    const [selectedValue, setSelectedValue] = useState(10);
    
    let handleChange = e => {
        setSelectedValue(selectedValue => e.target.value);
    }

    let handleSubmit = (e) => {
        alert('Your favorite flavor is: ' + selectedValue);
        e.preventDefault();
    }

    const selectedRandomArray = (arr, num = 1) => {
        const res = [];
        for(let i = 0; i < num; ){
          const random = Math.floor(Math.random() * arr.length);
          if(res.indexOf(arr[random]) !== -1){
              continue;
          };
          res.push(arr[random]);
          i++;
        };
        return res;
      };

      let unLearnedArray = selectedRandomArray(LISTA_FISZEK, selectedValue)
      

    return (             
        <div>        
            <form onSubmit={handleSubmit}>
                <label>Wybierz liczbę fiszek w puli:
                    <select value={selectedValue} onChange={handleChange}>                                               
                        <option  selected value='10'>10</option>
                        <option value='20'>20</option> 
                        <option value='30'>30</option>  
                        <option value='40'>40</option>    
                        <option value="50">50</option>
                    </select>                    
                    <Link to={{
                        pathname:'/app',
                        state: unLearnedArray
                        }}>
                        <input type="submit" value="Zaczynamy!"/>
                    </Link>
                </label>
            </form>            
        </div>        
    )
}

export default Intro
