// const Balance = parseFloat(document.getElementById('balance-decrease').innerText) /// my 50 taka
//  donation add button
document.getElementById('donate-btn')
  .addEventListener('click',function(){
      const input = parseFloat(document.getElementById('input-value').value)
      const currentBalance = parseFloat(document.getElementById('donate-balance').innerText)
      const MyNewBalance = parseFloat(document.getElementById('balance-decrease').innerText)

     if(isNaN(input)){
      alert('please type a number')
     }
      if(MyNewBalance >= input){
            const totalDonate =( input + currentBalance )//total donation
            document.getElementById('donate-balance').innerText =
            `${totalDonate} BDT`
            // history showing part


            const historyItem = document.createElement('div')
            historyItem.className = 'text-left border border-2 border-gray-400 px-20 py-10 w-11/12 mx-auto my-10 rounded-xl'
            historyItem.innerHTML =  
            `
             ${totalDonate} Taka is dontated for famine-2024 at Noahkali ,at Bangladesh
              <p class="text-xl text-black"> Date : ${new Date().toLocaleDateString()}  GMT +6.00  (Bangladesh Standart Time)</p>
              
            `
            const historyContainer = document.getElementById('history-list')
            historyContainer.insertBefore(historyItem,historyContainer.firstChild)
        
              
      }else{
        alert("you have no money to added")
        return
      }
})
// Donate part 2
document.getElementById('donate-btn-2')
.addEventListener('click',function(){
    const input = parseFloat(document.getElementById('input-value-2').value)
    const currentBalance = parseFloat(document.getElementById('donate-balance-2').innerText)
    const MyNewBalance = parseFloat(document.getElementById('balance-decrease').innerText)

   if(isNaN(input)){
    alert('please type a number')
   }
    if(MyNewBalance >= input){
          const totalDonate =( input + currentBalance )//total donation
          document.getElementById('donate-balance-2').innerText =
          `${totalDonate} BDT`
          // history showing part


          const historyItem = document.createElement('div')
          historyItem.className = 'text-left border border-2 border-gray-400 px-20 py-10 w-11/12 mx-auto '
          historyItem.innerHTML =  
          `
           ${totalDonate} Taka is dontated for famine-2024 at feni ,at Bangladesh
            <p class="text-xl text-black"> Date : ${new Date().toLocaleDateString()} GMT +6.00 (Bangladesh Standart Time)</p>
            
          `
          const historyContainer = document.getElementById('history-list')
          historyContainer.insertBefore(historyItem,historyContainer.firstChild)
      
            
    }else{
      alert("you have no money to added")
      return
    }
})
// Donate part 2 end
// caseout part 2
document.getElementById('donate-btn-2').addEventListener('click',function(){
  
  const inputValue =parseFloat(document.getElementById('input-value-2').value)
  const myBalance = parseFloat(document.getElementById('balance-decrease').innerText)

  if(myBalance < inputValue){
    alert("you have no money")
    return
  }else{
     const totalHave = Math.abs(myBalance - inputValue)
    document.getElementById('balance-decrease').innerText  = `${totalHave} BDT`
  }
 
})
// caseout part 2
// 4 no card start
document.getElementById('donate-btn-4')
  .addEventListener('click',function(){
      const input = parseFloat(document.getElementById('input-value-4').value)
      const currentBalance = parseFloat(document.getElementById('donate-balance-4').innerText)
      const MyNewBalance = parseFloat(document.getElementById('balance-decrease').innerText)

     if(isNaN(input)){
      alert('please type a number')
     }
      if(MyNewBalance >= input){
            const totalDonate =( input + currentBalance )//total donation
            document.getElementById('donate-balance-4').innerText =
            `${totalDonate} BDT`
            // history showing part


            const historyItem = document.createElement('div')
            historyItem.className = 'text-left border border-2 border-gray-400 px-20 py-10 w-11/12 mx-auto '
            historyItem.innerHTML =  
            `
             ${totalDonate} Taka is dontated for famine-2024 at Qouta Movement ,at Bangladesh
              <p class="text-xl text-black"> Date : ${new Date().toLocaleDateString()} GMT +6.00 (Bangladesh Standart Time)</p>
              
            `
            const historyContainer = document.getElementById('history-list')
            historyContainer.insertBefore(historyItem,historyContainer.firstChild)
        
              
      }else{
        alert("you have no money to added")
        return
      }
})
// 4 no card end
// 4 no cash out
document.getElementById('donate-btn-4').addEventListener('click',function(){
  
  const inputValue =parseFloat(document.getElementById('input-value-4').value)
  const myBalance = parseFloat(document.getElementById('balance-decrease').innerText)

  if(myBalance < inputValue){
    alert("you have no money")
    return
  }else{
     const totalHave = Math.abs(myBalance - inputValue)
    document.getElementById('balance-decrease').innerText  = `${totalHave} BDT`
  }
 
})


// 4 no cash out
// 5 no card 

document.getElementById('donate-btn-5')
  .addEventListener('click',function(){
      const input = parseFloat(document.getElementById('input-value-5').value)
      const currentBalance = parseFloat(document.getElementById('donate-balance-5').innerText)
      const MyNewBalance = parseFloat(document.getElementById('balance-decrease').innerText)

     if(isNaN(input)){
      alert('please type a number')
     }
      if(MyNewBalance >= input){
            const totalDonate =( input + currentBalance )//total donation
            document.getElementById('donate-balance-5').innerText =
            `${totalDonate} BDT`
            // history showing part


            const historyItem = document.createElement('div')
            historyItem.className = 'text-left border border-2 border-gray-400 px-20 py-10 w-11/12 mx-auto '
            historyItem.innerHTML =  
            `
             ${totalDonate} Taka is dontated for famine-2024 at Moulvibaza ,at Bangladesh
              <p class="text-xl text-black"> Date : ${new Date().toLocaleDateString()} GMT +6.00 (Bangladesh Standart Time)</p>
              
            `
            const historyContainer = document.getElementById('history-list')
            historyContainer.insertBefore(historyItem,historyContainer.firstChild)
        
              
      }else{
        alert("you have no money to added")
        return
      }
})

// 5 no card end
// cash out 5 no card
document.getElementById('donate-btn-5').addEventListener('click',function(){
  
  const inputValue =parseFloat(document.getElementById('input-value-5').value)
  const myBalance = parseFloat(document.getElementById('balance-decrease').innerText)

  if(myBalance < inputValue){
    alert("you have no money")
    return
  }else{
     const totalHave = Math.abs(myBalance - inputValue)
    document.getElementById('balance-decrease').innerText  = `${totalHave} BDT`
  }
 
})
// cash out 5 no card
      // donation decrease button 
document.getElementById('donate-btn').addEventListener('click',function(){
  
  const inputValue =parseFloat(document.getElementById('input-value').value)
  const myBalance = parseFloat(document.getElementById('balance-decrease').innerText)

  if(myBalance < inputValue){
    alert("you have no money")
    return
  }else{
     const totalHave = Math.abs(myBalance - inputValue)
    document.getElementById('balance-decrease').innerText  = `${totalHave} BDT`
  }
 
})


// Toast show in 
const donateBtns = document.querySelectorAll('#donate-btn');
const modal = document.getElementById('my_modal_1');
const closeToast = document.getElementById('close-toast');

// Show modal when "Donate Now" is clicked
donateBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.showModal();
  });
});

// Close modal manually
closeToast.addEventListener('click', () => {
  modal.close();
});
// 5 no toast 
const donateBtns5 = document.querySelectorAll('#donate-btn-5');
const modal5 = document.getElementById('my_modal_1');
const closeToast5 = document.getElementById('close-toast');

// Show modal when "Donate Now" is clicked
donateBtns5.forEach(btn => {
  btn.addEventListener('click', () => {
    modal5.showModal();
  });
});

// Close modal manually
closeToast5.addEventListener('click', () => {
  modal5.close();
});
// 5 no toast 

// history tab functionality
const historySelect = document.getElementById('history-btn')
const donationSelect = document.getElementById('donation-btn')
historySelect.addEventListener('click',function(){
  historySelect.classList.add(

    'bg-[#B4F461]','font-bold', 'px-6' ,'py-2' ,'rounded-lg','text-black',

  );
  historySelect.classList.remove('text-gray-500','border','border-gray-600','border-2')
  donationSelect.classList.remove
  ('bg-[#B4F461]','font-bold'

  );
  donationSelect.classList.add(
     'text-gray-500','border','border-gray-600','border-2','px-5','py-2','rounded-md','font-semibold'
  )

  document.getElementById('main-part').classList.add('hidden')
  document.getElementById('history-show').classList.remove('hidden')
  donationSelect.addEventListener('click',function(){
    document.getElementById('main-part').classList.remove('hidden')
    document.getElementById('history-show').classList.add('hidden')
  })
})