import {HttpClient} from 'aurelia-http-client';

var CONTACT_MANAGER_API_HOST = 'http://api-contact-manager.herokuapp.com';
var THUMBNAIL_URL = CONTACT_MANAGER_API_HOST + '/img/faces/${faceId}.jpg'

export class ContactModel {
  constructor(attributes){
    for (var attribute in attributes) {
      this[attribute] = attributes[attribute];
    }
  }

  getThumbnailUrl(){
    return THUMBNAIL_URL.replace('${faceId}', this.faceId);
  }
}

