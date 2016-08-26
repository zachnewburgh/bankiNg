function BankingDataService($http) {
  var URL = "https://crossorigin.me/http://api.worldbank.org/countries?per_page=304&format=JSON"

  this.getCountries = function() {
    return $http.get(URL);
  }
}

angular
  .module('bankiNg')
  .service('BankingDataService', BankingDataService);