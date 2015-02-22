System.register(["aurelia-http-client", "src/models/contact-model"], function (_export) {
  "use strict";

  var HttpClient, ContactModel, _prototypeProperties, _classCallCheck, CONTACT_MANAGER_API_HOST, CONTACTS_URL, CONTACT_URL, ContactService;
  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_srcModelsContactModel) {
      ContactModel = _srcModelsContactModel.ContactModel;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      CONTACT_MANAGER_API_HOST = "http://api-contact-manager.herokuapp.com";
      CONTACTS_URL = CONTACT_MANAGER_API_HOST + "/contacts";
      CONTACT_URL = CONTACT_MANAGER_API_HOST + "/contacts/${id}";
      ContactService = _export("ContactService", (function () {
        function ContactService(http) {
          _classCallCheck(this, ContactService);

          this.http = http;
        }

        _prototypeProperties(ContactService, {
          inject: {
            value: function inject() {
              return [HttpClient];
            },
            writable: true,
            configurable: true
          }
        }, {
          getAll: {
            value: function getAll() {
              return this.http.get(CONTACTS_URL).then(function (response) {
                return response.content.map(function (data) {
                  return new ContactModel(data);
                });
              });
            },
            writable: true,
            configurable: true
          },
          getById: {
            value: function getById(id) {
              var contactUrl = CONTACT_URL.replace("${id}", id);
              return this.http.get(contactUrl).then(function (response) {
                return new ContactModel(response.content);
              });
            },
            writable: true,
            configurable: true
          },
          create: {
            value: function create(contact) {
              return this.http.post(CONTACTS_URL, contact).then(function (response) {
                return new ContactModel(response.content);
              });
            },
            writable: true,
            configurable: true
          },
          update: {
            value: function update(contact) {
              var contactUrl = CONTACT_URL.replace("${id}", contact.id);
              return this.http.put(contactUrl, contact).then(function (response) {
                return new ContactModel(response.content);
              });
            },
            writable: true,
            configurable: true
          },
          "delete": {
            value: function _delete(contact) {
              var contactUrl = CONTACT_URL.replace("${id}", contact.id);
              return this.http["delete"](contactUrl).then(function (response) {
                return true;
              });
            },
            writable: true,
            configurable: true
          }
        });

        return ContactService;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NvbnRhY3Qtc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxVQUFVLEVBQ1YsWUFBWSx5Q0FFaEIsd0JBQXdCLEVBQ3hCLFlBQVksRUFDWixXQUFXLEVBRUYsY0FBYzs7O0FBUG5CLGdCQUFVLHNCQUFWLFVBQVU7O0FBQ1Ysa0JBQVksMEJBQVosWUFBWTs7Ozs7OztBQUVoQiw4QkFBd0IsR0FBRywwQ0FBMEM7QUFDckUsa0JBQVksR0FBRyx3QkFBd0IsR0FBRyxXQUFXO0FBQ3JELGlCQUFXLEdBQUcsd0JBQXdCLEdBQUcsaUJBQWlCO0FBRWpELG9CQUFjO0FBRWQsaUJBRkEsY0FBYyxDQUViLElBQUk7Z0NBRkwsY0FBYzs7QUFHdkIsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7OzZCQUpVLGNBQWM7QUFDbEIsZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQUU7Ozs7O0FBS3hDLGdCQUFNO21CQUFBLGtCQUFFO0FBQ04scUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ2xELHVCQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxFQUFJO0FBQ2xDLHlCQUFPLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUMvQixDQUFDLENBQUM7ZUFDSixDQUFDLENBQUM7YUFDSjs7OztBQUVELGlCQUFPO21CQUFBLGlCQUFDLEVBQUUsRUFBQztBQUNULGtCQUFJLFVBQVUsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNsRCxxQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDaEQsdUJBQU8sSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2VBQzNDLENBQUMsQ0FBQzthQUNKOzs7O0FBRUQsZ0JBQU07bUJBQUEsZ0JBQUMsT0FBTyxFQUFDO0FBQ2IscUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUM1RCx1QkFBTyxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7ZUFDM0MsQ0FBQyxDQUFDO2FBQ0o7Ozs7QUFFRCxnQkFBTTttQkFBQSxnQkFBQyxPQUFPLEVBQUM7QUFDYixrQkFBSSxVQUFVLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzFELHFCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDekQsdUJBQU8sSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2VBQzNDLENBQUMsQ0FBQzthQUNKOzs7OzttQkFFSyxpQkFBQyxPQUFPLEVBQUM7QUFDYixrQkFBSSxVQUFVLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzFELHFCQUFPLElBQUksQ0FBQyxJQUFJLFVBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDbkQsdUJBQU8sSUFBSSxDQUFDO2VBQ2IsQ0FBQyxDQUFDO2FBQ0o7Ozs7OztlQXZDVSxjQUFjIiwiZmlsZSI6InNlcnZpY2VzL2NvbnRhY3Qtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9