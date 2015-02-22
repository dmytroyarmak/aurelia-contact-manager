import {ContactService} from 'src/services/contact-service';
import {ContactModel} from 'src/models/contact-model';

export class Contact {
  static inject() { return [ContactService]; }

  constructor(contactService){
    this.contact = null;
    this.contactService = contactService;
  }

  activate(params){
    this.isNew = (params.id === 'new');

    if (this.isNew) {
      this.contact = new ContactModel();
    } else {
      return this.contactService.getById(params.id).then(contact => {
        this.contact = contact;
      });
    }
  }

  submitForm(){
    this.createOrUpdate().then(() => {
      window.location.hash = '#contacts';
    });
  }

  createOrUpdate(){
    if (this.isNew) {
      return this.contactService.create(this.contact)
    } else {
      return this.contactService.update(this.contact)
    }
  }
}
