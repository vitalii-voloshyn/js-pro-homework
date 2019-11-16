'use strict';


import $ from 'jquery';
import {saveState,getState} from './storage';

export default class Todo {
  constructor(){
   this.todoList = $('#todoList');
   this.todoForm = $('#todoForm');

   this.listItems = [];

   this.init();
  }

 init(){
  this.bindEventliseners();
  this.restorData();
  this.rendertodoList(this.listItems);
 }

 bindEventliseners(){
  this.todoList.on('click', '.todo-item', this.onItemClick.bind(this))
  this.todoList.on('click', '.btn-delete', this.onBtnDeleteClick.bind(this))
  this.todoForm.on('submit', this.onSubmitForm.bind(this))

 }

 onItemClick(e){
   const el = e.target.dataset.itemId;
   this.toggletItem(el);
  
 }

 onSubmitForm(e){
   e.preventDefault();
   this.submitTodoItem();
 }

 onBtnDeleteClick(e){
   const id = $(e.target).parent('.todo-item').data('itemId');
   this.deleteTask(id);
 
 }

 deleteTask(id){
 this.listItems = this.listItems.filter(task => task.id !=id)
   this.saveData();
   this.getTodoItemId(id).remove()
   
 }

 restorData(){
   this.listItems = getState()
 }

 saveData(){
   saveState(this.listItems)
 }


rendertodoList(){
  const listTodoHtml = this.listItems.map(elem => {
    return this.getlistTodoHtml(elem);
  }).join('\n')
   $('#todoList').html(listTodoHtml)
}

getlistTodoHtml({id,title,isDone}){
  return $('#todoListTemplate').html().replace(`{{id}}`, id)
                         .replace(`{{title}}`, title)
                         .replace(`{{isDone}}`,isDone ? 'done' : '')
}

submitTodoItem(){
  const newTask = {
    id: Date.now(),
    isDone: false
  }
  this.todoForm.serializeArray().forEach(({name,value}) => {
    newTask[name] = value;
  })
  this.listItems.push(newTask);
  this.saveData();
  this.todoList.append(this.getlistTodoHtml(newTask));
}

toggletItem(itemId){
  const todoItem = this.listItems.find(({id}) => id == itemId)
   todoItem.isDone = !todoItem.isDone;
   this.toggletElementState(todoItem);
}

toggletElementState(todoItem){
  const $item = this.getTodoItemId(todoItem.id)
  $item.removeClass('done')
  if(!todoItem.isDone){
     $item.addClass('done')
  }
}

getTodoItemId(id) {
  return $(`[data-item-id="${id}"]`);
 }
}