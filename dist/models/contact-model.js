System.register(["aurelia-http-client"], function (_export) {
  "use strict";

  var HttpClient, _prototypeProperties, _classCallCheck, CONTACT_MANAGER_API_HOST, THUMBNAIL_URL, ContactModel;
  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      CONTACT_MANAGER_API_HOST = "http://api-contact-manager.herokuapp.com";
      THUMBNAIL_URL = CONTACT_MANAGER_API_HOST + "/img/faces/${faceId}.jpg";
      ContactModel = _export("ContactModel", (function () {
        function ContactModel(attributes) {
          _classCallCheck(this, ContactModel);

          for (var attribute in attributes) {
            this[attribute] = attributes[attribute];
          }
        }

        _prototypeProperties(ContactModel, null, {
          getThumbnailUrl: {
            value: function getThumbnailUrl() {
              return THUMBNAIL_URL.replace("${faceId}", this.faceId);
            },
            writable: true,
            configurable: true
          }
        });

        return ContactModel;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9jb250YWN0LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFVBQVUseUNBRWQsd0JBQXdCLEVBQ3hCLGFBQWEsRUFFSixZQUFZOzs7QUFMakIsZ0JBQVUsc0JBQVYsVUFBVTs7Ozs7OztBQUVkLDhCQUF3QixHQUFHLDBDQUEwQztBQUNyRSxtQkFBYSxHQUFHLHdCQUF3QixHQUFHLDBCQUEwQjtBQUU1RCxrQkFBWTtBQUNaLGlCQURBLFlBQVksQ0FDWCxVQUFVO2dDQURYLFlBQVk7O0FBRXJCLGVBQUssSUFBSSxTQUFTLElBQUksVUFBVSxFQUFFO0FBQ2hDLGdCQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1dBQ3pDO1NBQ0Y7OzZCQUxVLFlBQVk7QUFPdkIseUJBQWU7bUJBQUEsMkJBQUU7QUFDZixxQkFBTyxhQUFhLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDeEQ7Ozs7OztlQVRVLFlBQVkiLCJmaWxlIjoibW9kZWxzL2NvbnRhY3QtbW9kZWwuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==