import {ContactService} from 'src/services/contact-service';

export class EditContact {
  static inject() { return [ContactService]; }
  constructor(contactService){
    this.contact = null;
    this.contactService = contactService;
  }

  activate(params){
    return this.contactService.getById(params.id).then(contact => {
      this.contact = contact;
    });
  }

  submitForm(){
    this.contactService.update(this.contact).then(() => {
      window.location.hash = '#contacts';
    })
  }
}
