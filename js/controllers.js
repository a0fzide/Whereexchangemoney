app.controller('mapCtrl', function($scope, CurrenciesFrom, CurrenciesTo, Shops, ExchangeRates) {
    $scope.buying = true;
    $scope.exchangeFrom = CurrenciesFrom.all();
    $scope.exchangeTo = CurrenciesTo.all();
    // console.log($scope.exchangeFrom);
    
    $scope.shops = Shops.all();
    $scope.exchangeRates = ExchangeRates.all();
});
