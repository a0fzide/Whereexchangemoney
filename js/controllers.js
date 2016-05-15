app.controller('mapCtrl', function($scope, CurrenciesFrom, CurrenciesTo) {
    $scope.exchangeFrom = CurrenciesFrom.all();
    $scope.exchangeTo = CurrenciesTo.all();
    // console.log($scope.exchangeFrom);
    $scope.buying = true;
});
