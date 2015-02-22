System.register(["src/services/contact-service"], function (_export) {
  "use strict";

  var ContactService, _prototypeProperties, _classCallCheck, Contacts;
  return {
    setters: [function (_srcServicesContactService) {
      ContactService = _srcServicesContactService.ContactService;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Contacts = _export("Contacts", (function () {
        function Contacts(contactService) {
          _classCallCheck(this, Contacts);

          this.contacts = [];
          this.contactService = contactService;
        }

        _prototypeProperties(Contacts, {
          inject: {
            value: function inject() {
              return [ContactService];
            },
            writable: true,
            configurable: true
          }
        }, {
          activate: {
            value: function activate() {
              var _this = this;
              return this.contactService.getAll().then(function (contacts) {
                _this.contacts = contacts;
              });
            },
            writable: true,
            configurable: true
          },
          deleteContact: {
            value: function deleteContact(contact) {
              var _this = this;
              this.contactService["delete"](contact).then(function () {
                var index = _this.contacts.indexOf(contact);
                _this.contacts.splice(index, 1);
              });
            },
            writable: true,
            configurable: true
          }
        });

        return Contacts;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLGNBQWMseUNBRVQsUUFBUTs7O0FBRmIsb0JBQWMsOEJBQWQsY0FBYzs7Ozs7OztBQUVULGNBQVE7QUFFUixpQkFGQSxRQUFRLENBRVAsY0FBYztnQ0FGZixRQUFROztBQUdqQixjQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNuQixjQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztTQUN0Qzs7NkJBTFUsUUFBUTtBQUNaLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUFFOzs7OztBQU01QyxrQkFBUTttQkFBQSxvQkFBRTs7QUFDUixxQkFBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUNuRCxzQkFBSyxRQUFRLEdBQUcsUUFBUSxDQUFDO2VBQzFCLENBQUMsQ0FBQzthQUNKOzs7O0FBRUQsdUJBQWE7bUJBQUEsdUJBQUMsT0FBTyxFQUFDOztBQUNwQixrQkFBSSxDQUFDLGNBQWMsVUFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFNO0FBQzdDLG9CQUFJLEtBQUssR0FBRyxNQUFLLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDM0Msc0JBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7ZUFDaEMsQ0FBQyxDQUFDO2FBQ0o7Ozs7OztlQWxCVSxRQUFRIiwiZmlsZSI6ImNvbnRhY3RzLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=