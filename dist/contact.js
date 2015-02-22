System.register(["src/services/contact-service", "src/models/contact-model"], function (_export) {
  "use strict";

  var ContactService, ContactModel, _prototypeProperties, _classCallCheck, Contact;
  return {
    setters: [function (_srcServicesContactService) {
      ContactService = _srcServicesContactService.ContactService;
    }, function (_srcModelsContactModel) {
      ContactModel = _srcModelsContactModel.ContactModel;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Contact = _export("Contact", (function () {
        function Contact(contactService) {
          _classCallCheck(this, Contact);

          this.contact = null;
          this.contactService = contactService;
        }

        _prototypeProperties(Contact, {
          inject: {
            value: function inject() {
              return [ContactService];
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate(params) {
              var _this = this;
              this.isNew = params.id === "new";

              if (this.isNew) {
                this.contact = new ContactModel();
              } else {
                return this.contactService.getById(params.id).then(function (contact) {
                  _this.contact = contact;
                });
              }
            },
            writable: true,
            configurable: true
          },
          submitForm: {
            value: function submitForm() {
              this.createOrUpdate().then(function () {
                window.location.hash = "#contacts";
              });
            },
            writable: true,
            configurable: true
          },
          createOrUpdate: {
            value: function createOrUpdate() {
              if (this.isNew) {
                return this.contactService.create(this.contact);
              } else {
                return this.contactService.update(this.contact);
              }
            },
            writable: true,
            configurable: true
          }
        });

        return Contact;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsY0FBYyxFQUNkLFlBQVkseUNBRVAsT0FBTzs7O0FBSFosb0JBQWMsOEJBQWQsY0FBYzs7QUFDZCxrQkFBWSwwQkFBWixZQUFZOzs7Ozs7O0FBRVAsYUFBTztBQUdQLGlCQUhBLE9BQU8sQ0FHTixjQUFjO2dDQUhmLE9BQU87O0FBSWhCLGNBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLGNBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1NBQ3RDOzs2QkFOVSxPQUFPO0FBQ1gsZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQUU7Ozs7O0FBTzVDLGtCQUFRO21CQUFBLGtCQUFDLE1BQU0sRUFBQzs7QUFDZCxrQkFBSSxDQUFDLEtBQUssR0FBSSxNQUFNLENBQUMsRUFBRSxLQUFLLEtBQUssQUFBQyxDQUFDOztBQUVuQyxrQkFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ2Qsb0JBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztlQUNuQyxNQUFNO0FBQ0wsdUJBQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU8sRUFBSTtBQUM1RCx3QkFBSyxPQUFPLEdBQUcsT0FBTyxDQUFDO2lCQUN4QixDQUFDLENBQUM7ZUFDSjthQUNGOzs7O0FBRUQsb0JBQVU7bUJBQUEsc0JBQUU7QUFDVixrQkFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFNO0FBQy9CLHNCQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7ZUFDcEMsQ0FBQyxDQUFDO2FBQ0o7Ozs7QUFFRCx3QkFBYzttQkFBQSwwQkFBRTtBQUNkLGtCQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDZCx1QkFBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7ZUFDaEQsTUFBTTtBQUNMLHVCQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtlQUNoRDthQUNGOzs7Ozs7ZUFoQ1UsT0FBTyIsImZpbGUiOiJjb250YWN0LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=