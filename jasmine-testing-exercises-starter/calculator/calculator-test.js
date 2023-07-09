
it('should calculate the monthly rate correctly', function () {
  // Test values
  let value =  {
    amount: '100',
    years: '1',
    rate: '10'
  }
  expect(calculateMonthlyPayment(value)).toEqual(8.791588723000991);
  
});


it("should return a result with 2 decimal places", function() {
  let value =  {
    amount: '100',
    years: '1',
    rate: '10'
  }
  expect(calculateMonthlyPayment(value).toFixed(2)).toEqual('8.79');
  
});

/// etc
