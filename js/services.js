
app.factory('CurrenciesFrom', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var currencies = [{
    id: 0,
    name: 'THB',
    country: 'Thailand',
    icon: 'https://maxcdn.icons8.com/Color/PNG/24/Finance/bitcoin-24.png'
  }, {
    id: 1,
    name: 'Franc',
    country: 'Swiss',
    icon: 'https://maxcdn.icons8.com/Color/PNG/24/Finance/CHF-24.png'
  },{
    id: 2,
    name: 'USD',
    country: 'United State',
    icon: 'https://maxcdn.icons8.com/Color/PNG/24/Finance/USD-24.png'
  }, {
    id: 3,
    name: 'EURO',
    country: 'Europe',
    icon: 'https://maxcdn.icons8.com/Color/PNG/24/Finance/euro-24.png'
  }];

  return {
    all: function() {
      return currencies;
    },
    get: function(currenciesId) {
      for (var i = 0; i < currencies.length; i++) {
        if (currencies[i].id === parseInt(currenciesId)) {
          return currencies[i];
        }
      }
      return null;
    }
  };
});



app.factory('CurrenciesTo', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var currencies = [{
    id: 0,
    name: 'Krona',
    country: 'Sweden',
    icon: 'https://maxcdn.icons8.com/Color/PNG/24/Finance/SEK-24.png'
  }, {
    id: 1,
    name: 'Pound',
    country: 'British',
    icon: 'https://maxcdn.icons8.com/Color/PNG/24/Finance/GBP-24.png'
  }, {
    id: 2,
    name: 'YEN',
    country: 'Japan',
    icon: 'https://maxcdn.icons8.com/Color/PNG/24/Finance/JPY-24.png'
  }, {
    id: 3,
    name: 'RUBLE',
    country: 'Russia',
    icon: 'https://maxcdn.icons8.com/Color/PNG/24/Ecommerce/rouble-24.png'
  }];

  return {
    all: function() {
      return currencies;
    },
    get: function(currenciesId) {
      for (var i = 0; i < currencies.length; i++) {
        if (currencies[i].id === parseInt(currenciesId)) {
          return currencies[i];
        }
      }
      return null;
    }
  };
});