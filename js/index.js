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
            historyItem.className = 'text-left border border-2 border-gray-400 px-20 py-10 w-11/12 mx-auto my-5'
            historyItem.innerHTML =  
            `
             ${totalDonate} Taka is dontated for famine-2024 at feni ,at Bangladesh
              <p class="text-xl text-black"> Date : ${new Date().toLocaleDateString()} GMT +6.00 (Bangladesh Standart Time</p>
              
            `
            const historyContainer = document.getElementById('history-list')
            historyContainer.insertBefore(historyItem,historyContainer.firstChild)
        
              
      }else{
        alert("you have no money to added")
        return
      }
})
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