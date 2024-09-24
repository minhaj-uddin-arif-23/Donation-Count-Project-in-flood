
function addMoney(id){
  const value = parseFloat(document.getElementById(id).value)
  return value

}
document.getElementById('history-btn').addEventListener('click',function(){
  dontationHistory('history-section')
})

