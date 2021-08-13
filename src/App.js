import React ,{useState} from 'react';
import './App.css';

const App = ()=>
{


      const [inputList , setInputList] = useState("");
      
      const [items  ,setItems] = useState([]); // made an empty array and called items in the ol


      const inputEvent =(event)=>
      {
       setInputList(event.target.value);
      };


      const listOfItems =()=>
      {
            setItems((oldItems)=>
            {
                  return [...oldItems, inputList] //store the elements inthe usestate and save it to old items and display it and the last element inputList
            }
            );
            setInputList(" ");
      }

      const deleteItems = ()=>
      {
            console.log("deleted");
            setItems((oldItems)=>
            {
                  return oldItems.filter((array , index)=>{
                              return index;

                  })
            })
      }


      const deleteAllItems = (i)=>
      {
            console.log("deleted All");
            setItems((oldItems)=>
            {
                  return oldItems.filter((array , index)=>{
                              return index[i];

                  })
            })
      }



      return (<>  
      
      <div className="main_div">

            <div className="center_div">

                 <br/>

                 <h1 class="todo"> To Do List </h1>
      
                 <input type="text" className="inputbox" name="" value={inputList} placeholder="Add your items" onChange={inputEvent} />
                 <button className="button btn btn-success btn-lg" onClick={listOfItems}> Add </button>
                 <button className="button2 btn btn-danger btn-lg"  onClick={deleteItems}> Delete </button>
                 <button className="button3 btn btn-warning btn-lg"  onClick={deleteAllItems}> Delete All</button>


                   <div className="list">

                               <ul >

                               {/*  */}

                               {items.map( (itemval , index)=>{
                                     
                                     return <li>{itemval}</li>
                                     
                                     
                                     })}

                               </ul>

                   </div>

            </div>

            </div>





      
       </>

      );
}
export default App;


// <>  </> -> react fragment 
