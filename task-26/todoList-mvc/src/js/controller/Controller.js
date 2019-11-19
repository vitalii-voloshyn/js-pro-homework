'use strict';

import $ from 'jquery';
import Collection from '../model/Collection';
import Listview from '../view/Listview';

export default class Controller{
  constructor(){
  
    const container = $('#container');
    this.collection = new Collection();
    this.listView = new Listview();
    container.append(this.listView.$el)

    this.renderData();
  }

renderData(){
  this.collection.fetchData()
  .then(() => this.listView.renderList(this.collection.list))
}

}