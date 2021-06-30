export const getFromLocalStorage = key => {
    const value = localStorage.getItem(key); 
    let todoItems = null;
    try {
      const parsedJSON = JSON.parse(value);
  
      if (Array.isArray(parsedJSON)) {
        todoItems = parsedJSON;
      }
    } catch(e) {
      todoItems = [];
    }
  
    return todoItems;
  }

  export const saveInLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));