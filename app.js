document.getElementById('loan-form').addEventListener('submit', calculateResults);



function calculateResults(e) {


  const Damount = document.getElementById('amount');
  const Dinterest = document.getElementById('interest');
  const Dyears = document.getElementById('years');
  const DmonthlyPayment = document.getElementById('monthly-payment');
  const DtotalPayment = document.getElementById('total-payment');
  const DtotalInterest = document.getElementById('total-interest');
 
  const principal = parseFloat(Damount.value);
  const calculatedInterest = parseFloat(Dinterest.value)/100/12;
  const calculatedPayments = parseFloat(Dyears.value)*12;

  //Compute monthly payments

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)) {
    DmonthlyPayment.value = monthly.toFixed(2);
    DtotalPayment.value = (monthly*calculatedPayments).toFixed(2);
    DtotalInterest.value = ((monthly * calculatedPayments) - principal.toFixed(2))
  } else {
    showError('Please check your numbers')
  }

  e.preventDefault()
}

// Error display

function showError(error) {
  const errorDIv = document.createElement('div');
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  errorDIv.className = 'alert alert-danger';
  errorDIv.appendChild(document.createTextNode(error))
  card.insertBefore(errorDIv, heading);

  setTimeout(clearError, 3000)
}

function clearError() {
  document.querySelector('.alert').remove();
}