'use strict';

import $ from 'jquery';
import config from '../config';
import Model from './Model';

export default class Collection{
  constructor(){
    this.list = [];
    this.setData = this.setData.bind(this);
    

  }

fetchData(){
  return fetch(config.contactsUrl)
  .then(resp => resp.json())
  .then(this.setData)
}

setData(data){
  console.log(data)
  this.list = data.map(item => new Model(item))
}

}