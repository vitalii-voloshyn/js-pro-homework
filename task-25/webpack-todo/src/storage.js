
export function saveState(data){
  localStorage.setItem('task', JSON.stringify(data))
}

export function getState(){
  const task = localStorage.getItem('task');
  return task ? JSON.parse(task) : []
}