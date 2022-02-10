import React, { useState } from 'react'
import './Todo.css'


const Todoapp = () => {

// get Todo From Input
    const [ initialVlue , finalValue]= useState("")

    const inputTodo = (e)=>{
        return(
            finalValue(e.target.value)
            )
    }

    console.log(inputTodo)

// get Todo From Input

// Add Click Button Function / Add Todo From Input

const [todo , myTodo] = useState([])

const addTodo = ()=>{
   if(initialVlue.length> 3){
    myTodo((val)=>{
        return[...val , initialVlue]
    })
    finalValue("")
    reset("Reset All")
   }
   else{
       alert("Value Likh Bahi")
   }
}
console.log(addTodo)

// Add Click Button Function / Add Todo From Input

// Delete Click Button Function / Delete Todo From List


const deleteTodo = (id)=>{
    const updat = todo.filter((eve , ind)=>{
        return ind !== id
    })
    myTodo(updat)
}


// Delete Click Button Function / Delete Todo From List


// Delete All Click Button Function / Delete All Todos From List

const [add , reset] = useState("Add Todo Plz")

const resetAll = ()=>{
    myTodo([])
    reset("Add Todo Plz")
}
// Delete All Click Button Function / Delete All Todos From List


// edit Todo
const edit = ()=>{
  alert("Edit Not Allow rewrite the value")
}
// edit Todo

  return (
    <>
      <div className="container-fluid main">
          <div className="app">
            <div className="heading">
                <h1>Todo APP</h1>
                  
            </div>
              
              <div className="addList">
                  <span>
                  <input type="text" value={initialVlue} onChange={inputTodo} />
                  <i class="fas fa-plus" onClick={addTodo}></i>
                  </span>
              </div>
           {
               todo.map((eve , ind)=>{
                return(
                    <div className="addTODO" key={ind}>
                <span>
                    <li>{eve}</li>
                    <i className="fa fa-edit" onClick={()=> edit()}></i>
                    <i className="fa fa-trash" onClick={()=> deleteTodo(ind)}></i>
                </span>
            </div>
                )
               })
           }

           <button className='reset' onClick={resetAll}>{add}</button>
          </div>
      </div>
    </>
  )
}
export default Todoapp

