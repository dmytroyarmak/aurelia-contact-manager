import {Router} from 'aurelia-router';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Contact Manager';
      config.map([
        { route: ['', 'contacts'], moduleId: 'contacts' },
        { route: ['contacts/:id'], moduleId: 'contact'},
      ]);
    });
  }
}
