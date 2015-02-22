import {HttpClient} from 'aurelia-http-client';
import {ContactModel} from 'src/models/contact-model';

var CONTACT_MANAGER_API_HOST = 'http://api-contact-manager.herokuapp.com';
var CONTACTS_URL = CONTACT_MANAGER_API_HOST + '/contacts';
var CONTACT_URL = CONTACT_MANAGER_API_HOST + '/contacts/${id}';

export class ContactService {
  static inject() { return [HttpClient]; }
  constructor(http){
    this.http = http;
  }

  getAll(){
    return this.http.get(CONTACTS_URL).then(response => {
      return response.content.map(data => {
        return new ContactModel(data);
      });
    });
  }

  getById(id){
    var contactUrl = CONTACT_URL.replace('${id}', id);
    return this.http.get(contactUrl).then(response => {
      return new ContactModel(response.content);
    });
  }

  create(contact){
    return this.http.post(CONTACTS_URL, contact).then(response => {
      return new ContactModel(response.content);
    });
  }

  update(contact){
    var contactUrl = CONTACT_URL.replace('${id}', contact.id);
    return this.http.put(contactUrl, contact).then(response => {
      return new ContactModel(response.content);
    });
  }

  delete(contact){
    var contactUrl = CONTACT_URL.replace('${id}', contact.id);
    return this.http.delete(contactUrl).then(response => {
      return true;
    });
  }
}
