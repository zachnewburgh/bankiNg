function CountryController(BankingDataService) {
  var ctrl = this;

  returnCountry = function() {
    BankingDataService
      .getCountries()
      .then(function(res) {
        ctrl.countries = res.data
      });
  }
}

angular
  .module('bankiNg')
  .controller('CountryController', CountryController);