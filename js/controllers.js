app.controller('mapCtrl', function($scope, CurrenciesFrom, CurrenciesTo, Shops, ExchangeRates, $timeout) {
    $scope.buying = true;
    $scope.exchangeFrom = CurrenciesFrom.all();
    $scope.exchangeTo = CurrenciesTo.all();
    // console.log($scope.exchangeFrom);
    
    $scope.shops = Shops.all();
    console.log($scope.selectedFrom);
    $scope.exchangeRates = ExchangeRates.all();
    $timeout(function() {
        $scope.selectedFrom = $scope.exchangeFrom[0];
        $scope.selectedTo = $scope.exchangeTo[0];
        // console.log($scope.selectedFrom);
    }, 500);
});
