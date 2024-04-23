
const itemName = 'userData'; 

export function setUserData(data) {
  return localStorage.setItem(itemName, JSON.stringify(data));
}

export function getUserData() { 
  return JSON.parse(localStorage.getItem(itemName));
}

export function deleteUserData() {
   return localStorage.removeItem(itemName);
}

export function createSubmitHandler(cbk) {
    return function(event) {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        return cbk(data, form);
    }
}