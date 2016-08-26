function CountryController(BankingDataService) {
  var ctrl = this;

  
    BankingDataService
      .getCountries()
      .then(function(res) {
        ctrl.countries = res.data[1]
      });
  

}

angular
  .module('bankiNg')
  .controller('CountryController', CountryController);