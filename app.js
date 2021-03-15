document.getElementById('loan-form').addEventListener('submit', calculateResults);



function calculateResults(e) {


  const Damount = document.getElementById('amount');
  const Dinterest = document.getElementById('interest');
  const Dyears = document.getElementById('years');
  const DmonthlyPayment = document.getElementById('monthly-payment');
  const DtotalPayment = document.getElementById('total-payment');
  const DtotalInterest = document.getElementById('total-interest');
 

  console.log('calculating')
  e.preventDefault()
}