//  donate add button
document.getElementById('donate-btn')
  .addEventListener('click',function(){
      const input = parseFloat(document.getElementById('input-value').value)
      const PreviousBalance = parseFloat(document.getElementById('donate-balance').innerText)

      if(input < 0){
        alert("Please type a number")
        return;
      }
      const totalDonate = input + PreviousBalance
      document.getElementById('donate-balance').innerText =
      `${totalDonate} BDT`

})
// donation decrease button 
document.getElementById('donate-btn').addEventListener('click',function(){
  const Balance = parseFloat(document.getElementById('balance-decrease').innerText) /// my 50 taka
  const inputValue =parseFloat(document.getElementById('input-value').value)

  if(inputValue < 0){
    alert('Please type a number')
    return
  }
  const totalHave = Math.abs(inputValue - Balance)
  document.getElementById('balance-decrease').innerText  = `${totalHave} BDT`
})