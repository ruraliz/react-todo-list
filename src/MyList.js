import React, { useState } from 'react'
import ListItem from './ListItem';



const MyList = (props) => {
    const [tasks, setTasks] = useState(props.theList)
    const [newItem, setNewitem] = useState('')

    const clearList = () => {
        console.log('clearing list ...')
        setTasks([])
    }

    const handleChange = (e) => {
        setNewitem(e.target.value)
    }
    const addItem = (e) => {
        e.preventDefault();
        let newList = tasks; 
        newList.push(newItem);
        setTasks(newList);
        setNewitem('');
    }
    const removeItem = (index) => {
        // find the index and remove item
        index = parseInt(index)
        let newList = tasks.filter((item, idx) => {
            if (index === idx) {
                return false;
            } else {
                return true;
            }
        });
        setTasks(newList);
    }
    const renderTodoItems  =  () => {
    let todoItems= tasks.map((item, index) => {
        return <ListItem task={item} key={index} index={index} removeItem={removeItem} />
    });
    return todoItems;
} 

  return (
    <div>
    <h1> Things I should stop procastinating:  </h1>
    <form onSubmit={addItem}>
        <input type='text' value={newItem} onChange={handleChange}/>
        <button class= 'add' type="submit">Add To List</button>
    </form>
        <ul class= 'list'>
            {renderTodoItems()}
        </ul>
   <button class= 'clear' onClick={clearList}>Clear List</button>
    </div>
  );
}

export default MyList;