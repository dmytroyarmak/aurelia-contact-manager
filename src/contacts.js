import {HttpClient} from 'aurelia-http-client';

var CONTACT_MANAGER_API_HOST = 'http://api-contact-manager.herokuapp.com';
var CONTACTS_URL = CONTACT_MANAGER_API_HOST + '/contacts';
var THUMBNAIL_URL = CONTACT_MANAGER_API_HOST + '/img/faces/${faceId}.jpg'

function Contact (attributes) {
  for (var attribute in attributes) {
    this[attribute] = attributes[attribute];
  }
}

Contact.prototype.getThumbnailUrl = function thumbnailUrl () {
  return THUMBNAIL_URL.replace('${faceId}', this.faceId);
};

export class Contacts {
  static inject() { return [HttpClient]; }
  constructor(http){
    this.contacts = [];
    this.http = http;
  }

  activate(){
    return this.http.get(CONTACTS_URL).then(response => {
      this.contacts = response.content.map(data => {
        return new Contact(data);
      });
    });
  }
}
