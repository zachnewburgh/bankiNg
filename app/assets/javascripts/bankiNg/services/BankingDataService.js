function BankingDataService($http) {
  var URL = "http://api.worldbank.org/countries/"

  this.getCountries = function() {
    return $http.get(URL);
  }
}

angular
  .module('bankiNg')
  .service('BankingDataService', BankingDataService);