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

  deleteContact(contact){
    this.contactService.delete(contact).then(() => {
      var index = this.contacts.indexOf(contact);
      this.contacts.splice(index, 1);
    });
  }
}
