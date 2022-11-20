const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      // Write the date check condition here and return the array of overdue items accordingly.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
      let overdueItems=all.filter((eachItem)=>
          eachItem.dueDate===yesterday),status ="[ ]"
      return overdueItems.map((eachItem)=>{
              status="[ ]"
             if(eachItem.completed===true){
                status="[x]"}
              return `${status} ${eachItem.title} ${eachItem.dueDate}`})
    }
  
    const dueToday = () => {
      // Write the date check condition here and return the array of todo items that are due today accordingly.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
      let dueTodayItems=all.filter((eachItem)=>
          eachItem.dueDate===today),status ="[ ]"
      return dueTodayItems.map((eachItem)=>{
              status="[ ]"
             if(eachItem.completed===true){
                status="[x]"}
              return `${status} ${eachItem.title}`})
    }
  
    const dueLater = () => {
      // Write the date check condition here and return the array of todo items that are due later accordingly.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
    let dueLaterItems=all.filter((eachItem)=>
          eachItem.dueDate===tomorrow),status ="[ ]"
      return dueLaterItems.map((eachItem)=>{
              status="[ ]"
             if(eachItem.completed===true){
                status="[x]"}
              return `${status} ${eachItem.title} ${eachItem.dueDate}`})
    }
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string as per the format given above.
      // FILL YOUR CODE HERE
      // ..
      // ..
      // ..
      // return OUTPUT_STRING
      let OUTPUT_STRING=list.join("\n");
      return OUTPUT_STRING
    }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
  
module.exports=todoList;
