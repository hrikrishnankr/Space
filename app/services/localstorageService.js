spaceApp.service('localstorageService', ['$window', '$timeout', '$q', function($window, $timeout, $q) {
    return {
        set: function(key, value) {
            $window.localStorage[key] = value;
        },
        get: function(key, defaultValue) {
            return $window.localStorage[key] || defaultValue;
        },
        setObject: function(key, value) {
            $window.localStorage[key] = JSON.stringify(value);
        },
        getObject: function(key) {
            return JSON.parse($window.localStorage[key] || '{}');
        },
        getProject: function(key, id) {
            return _.find(JSON.parse($window.localStorage[key] || '{}'), function(item) {
                return item.id == id;
            });
        }
    }
}]);