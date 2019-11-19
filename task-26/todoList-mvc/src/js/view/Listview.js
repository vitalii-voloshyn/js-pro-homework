'use strict';

import $ from 'jquery';

export default class Listview{
  constructor(){
    this.$el = this.createElement();

  }

createElement(){
  return $('<ul></ul>');
}

 renderList(data){
   this.$el.empty();
   data.forEach(item => this.renderListItem(item))
 }

renderListItem({id,username}){
  this.$el.append(`<li class="list-item" data-id="${id}">${username}</li>`)
}

}