
app.factory('CurrenciesFrom', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var currencies = [{
    id: 0,
    name: 'THB',
    country: 'Thailand',
    icon: 'https://maxcdn.icons8.com/Color/PNG/24/Finance/bitcoin-24.png'
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



app.factory('Shops', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var shops = [{
    id: 0,
    name: 'Bank of Thailand',
    fee: 'No fee',
    buying: 22.22,
    selling: 22.44,
    icon: 'https://maxcdn.icons8.com/Color/PNG/48/City/lion_statue-48.png'
  }, {
    id: 1,
    name: 'Bank of USA',
    fee: 'No fee',
    buying: 22.24,
    selling: 22.46,
    icon: 'https://maxcdn.icons8.com/Color/PNG/48/Travel/statue_of_liberty-48.png'
  }, {
    id: 2,
    name: 'Bank of EU',
    fee: 'No fee',
    buying: 22.21,
    selling: 22.34,
    icon: 'https://maxcdn.icons8.com/Color/PNG/48/Travel/museum-48.png'
  }, {
    id: 3,
    name: 'Bank of China',
    fee: 'No fee',
    buying: 22.21,
    selling: 22.34,
    icon: 'https://maxcdn.icons8.com/Color/PNG/48/Travel/us_capitol-48.png'
  }, {
    id: 4,
    name: 'Bank of Swiss',
    fee: 'No fee',
    buying: 22.11,
    selling: 22.34,
    icon: 'https://maxcdn.icons8.com/Color/PNG/48/City/statue-48.png'
  }, {
    id: 6,
    name: 'Bank of Korea',
    fee: 'No fee',
    buying: 22.21,
    selling: 22.35,
    icon: 'https://maxcdn.icons8.com/Color/PNG/48/City/obelisk-48.png'
  }, {
    id: 7,
    name: 'Bank of Japan',
    fee: 'No fee',
    buying: 22.11,
    selling: 22.34,
    icon: 'https://maxcdn.icons8.com/Color/PNG/48/City/monument-48.png'
  }, {
    id: 8,
    name: 'Bank of Brazil',
    fee: 'No fee',
    buying: 22.51,
    selling: 22.74,
    icon: 'https://maxcdn.icons8.com/Color/PNG/48/City/modern_statue-48.png'
  }, {
    id: 9,
    name: 'Bank of Spain',
    fee: 'No fee',
    buying: 22.25,
    selling: 22.34,
    icon: 'https://maxcdn.icons8.com/Color/PNG/48/City/lion_statue-48.png'
  }, {
    id: 3,
    name: 'Bank of Canada',
    fee: 'No fee',
    buying: 22.23,
    selling: 22.46,
    icon: 'https://maxcdn.icons8.com/Color/PNG/48/City/equestrian_statue-48.png'
  }];

  return {
    all: function() {
      return shops;
    },
    get: function(shopsId) {
      for (var i = 0; i < shops.length; i++) {
        if (shops[i].id === parseInt(shopsId)) {
          return shops[i];
        }
      }
      return null;
    }
  };
});


app.factory('ExchangeRates', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var exchangeRates = [{
    id: 0,
    name: 'Bank of Thailand',
    fee: 'No fee',
    rate: {   
        buying: 22.22,
        selling: 22.44,
        perUnit: 'THB / 1'
    }
  }, {
    id: 1,
    name: 'Bank of USA',
    fee: 'No fee',
    rate: {   
        buying: 22.23,
        selling: 22.45,
        perUnit: 'THB / 1'
    }
  }, {
    id: 2,
    name: 'Bank of EU',
    fee: 'No fee',
    rate: {   
        buying: 22.24,
        selling: 22.46,
        perUnit: 'THB / 1'
    }
  }, {
    id: 3,
    name: 'Bank of China',
    fee: 'No fee',
    rate: {   
        buying: 22.25,
        selling: 22.47,
        perUnit: 'THB / 1'
    }
  }, {
    id: 4,
    name: 'Bank of Swiss',
    fee: 'No fee',
    rate: {   
        buying: 22.26,
        selling: 22.48,
        perUnit: 'THB / 1'
    }
  }, {
    id: 6,
    name: 'Bank of Korea',
    fee: 'No fee',
    rate: {   
        buying: 22.27,
        selling: 22.49,
        perUnit: 'THB / 1'
    }
  }, {
    id: 7,
    name: 'Bank of Japan',
    fee: 'No fee',
    rate: {   
        buying: 22.28,
        selling: 22.50,
        perUnit: 'THB / 1'
    }
  }, {
    id: 8,
    name: 'Bank of Brazil',
    fee: 'No fee',
    rate: {   
        buying: 22.29,
        selling: 22.51,
        perUnit: 'THB / 1'
    }
  }, {
    id: 9,
    name: 'Bank of Spain',
    fee: 'No fee',
    rate: {   
        buying: 22.30,
        selling: 22.52,
        perUnit: 'THB / 1'
    }
  }, {
    id: 3,
    name: 'Bank of Canada',
    fee: 'No fee',
    rate: {   
        buying: 22.31,
        selling: 22.53,
        perUnit: 'THB / 1'
    }
  }];

  return {
    all: function() {
      return exchangeRates;
    },
    get: function(exchangeRatesId) {
      for (var i = 0; i < exchangeRates.length; i++) {
        if (exchangeRates[i].id === parseInt(exchangeRatesId)) {
          return exchangeRates[i];
        }
      }
      return null;
    }
  };
});