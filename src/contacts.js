import {ContactService} from 'src/services/contact-service';

export class Contacts {
  static inject() { return [ContactService]; }
  constructor(contactService){
    this.contacts = [];
    this.contactService = contactService;
  }

  activate(){
    return this.contactService.getAll().then(contacts => {
      this.contacts = contacts;
    });
  }
}
