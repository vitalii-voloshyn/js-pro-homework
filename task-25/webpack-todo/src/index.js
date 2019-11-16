'use strict';


import $ from 'jquery';
import './css/bootstrap-reboot.css';
import './css/bootstrap.min.css';
import './css/style.css';


import TodoList from './Todolist';
$(function(){
 new TodoList($('#container'))

})
