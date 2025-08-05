        const availBalance = document.querySelector('.display_balance');

    let Balance = 0;
    let totalIn = 0;
    let totalOut = 0;

    function loadStorageValue() {
      Balance = parseFloat(localStorage.getItem('balance')) || 0;
      totalIn = parseFloat(localStorage.getItem('total_in')) || 0;
      totalOut = parseFloat(localStorage.getItem('total_out')) || 0;


      updateBalanceDisplay()
      updateInandOutDisplay()
    }
             function updateBalanceDisplay(){
        availBalance.textContent = `₦${Balance.toFixed(2)}`;
       }
       function updateInandOutDisplay(){
        document.getElementById('total_in').textContent = `₦${totalIn.toFixed(2)}`;
        document.getElementById('total_out').textContent = `₦${totalOut.toFixed(2)}`;
       }

      function magic() {
          const userName = document.getElementById('welcome_name').value;
          const startingBal = parseFloat(document.getElementById('stbal').value) || 0
          

          if(!localStorage.getItem('balance')){
            Balance = startingBal;
            totalIn = startingBal;
            totalOut = 0;
            localStorage.setItem('balance', Balance);
            localStorage.setItem('totalIn', totalIn);
            localStorage.setItem('totalOut', totalOut);
            
           
          } else {
            loadStorageValue()
          }

          document.getElementById('span_name').textContent = userName;
          updateBalanceDisplay();
          

          console.log(userName)
          console.log(startingBal)

          closeLogin()
            
                }
                function deposit(){
            const depositAmount = parseFloat(document.getElementById('deposit').value) || 0;
            if(depositAmount > 0){
                    Balance +=depositAmount;
                    totalIn += depositAmount;
                    localStorage.setItem('balance', Balance);
                    localStorage.setItem('totalIn', totalIn);
                    updateBalanceDisplay();
                    updateInandOutDisplay();
            
            document.getElementById('deposit').value = '';
            console.log(depositAmount);

            document.querySelector('.deposit_modal').style.display = 'none'; 
        }
      }
      function withdraw(){
            const withdrawAmount = parseFloat(document.getElementById('withdraw').value) || 0;

          if(withdrawAmount > Balance){
            insufficientFunds()
            
          } else {
                      Balance -= withdrawAmount;
                      totalOut += withdrawAmount;
                      localStorage.setItem('balance', Balance);
                      localStorage.setItem('totalOut', totalOut);
                      updateBalanceDisplay();
                      updateInandOutDisplay();
                    
                      document.getElementById('withdraw').value = '';
                      }
          console.log(withdrawAmount);

          document.querySelector('.withdraw_modal').style.display = 'none';
        }
      function airtime(){
       
            const airtimeAmount = parseFloat(document.getElementById('buyairtime').value) || 0;

          if(airtimeAmount > Balance){
            insufficientFunds()
            
          } else {
                      Balance -= airtimeAmount;
                      totalOut += airtimeAmount;
                      localStorage.setItem('balance', Balance);
                      localStorage.setItem('totalOut', totalOut);
                      updateBalanceDisplay();
                      updateInandOutDisplay();
                    
                      document.getElementById('buyairtime').value = '';
                      }
          console.log(airtimeAmount);

          document.querySelector('.airtime_modal').style.display = 'none';
        }
        function dataPurchase(){
          
          const dataAmount = parseFloat(document.getElementById('buydata').value) || 0;

        if(dataAmount > Balance){
          insufficientFunds()
          
        } else {
                    Balance -= dataAmount;
                    totalOut += dataAmount;
                    localStorage.setItem('balance', Balance);
                    localStorage.setItem('totalOut', totalOut);
                    updateBalanceDisplay();
                    updateInandOutDisplay();
                  
                    document.getElementById('buydata').value = '';
                    }
        console.log(dataAmount);
        document.querySelector('.data_modal').style.display = 'none';

       
      }
      function bills(){
        const billAmount = parseFloat(document.getElementById('bills').value) || 0;

      if(billAmount > Balance){
        insufficientFunds()
        
      } else {
                  Balance -= billAmount;
                  totalOut += billAmount;
                  localStorage.setItem('balance', Balance);
                  localStorage.setItem('totalOut', totalOut);
                  updateBalanceDisplay();
                  updateInandOutDisplay();
                
                  document.getElementById('bills').value = '';
                  }
      console.log(billAmount);
      document.querySelector('.bill_modal').style.display = 'none'; 
    }
    function school(){
      const schoolAmount = parseFloat(document.getElementById('school').value) || 0;

    if(schoolAmount > Balance){
      insufficientFunds()
      
    } else {
                Balance -= schoolAmount;
                totalOut += schoolAmount;
                localStorage.setItem('balance', Balance);
                localStorage.setItem('totalOut', totalOut);
                updateBalanceDisplay();
                updateInandOutDisplay();
              
                document.getElementById('school').value = '';
                }
    console.log(schoolAmount);

    document.querySelector('.exam_modal').style.display = 'none';
  }
  function shopping(){
    const shopAmount = parseFloat(document.getElementById('shopping').value) || 0;

    if(shopAmount > Balance){
      insufficientFunds()
      
    } else {
                Balance -= shopAmount;
                totalOut += shopAmount;
                localStorage.setItem('balance', Balance);
                localStorage.setItem('totalOut', totalOut);
                updateBalanceDisplay();
                updateInandOutDisplay();
              
                document.getElementById('shopping').value = '';
                }
    console.log(shopAmount);
    document.querySelector('.shop_modal').style.display = 'none';

  }
        
        function closeLogin(){
          document.querySelector('.login_modal').style.display = 'none';
          document.querySelector('.main').style.display= 'grid';
          
        }
        function loadLogin(){
          document.querySelector('.login_modal').style.display = 'block'; 
          document.querySelector('.main').style.display= 'none';
          localStorage.clear();
        }

        function openDeposit(){
          document.querySelector('.deposit_modal').style.display = 'block'; 
          document.querySelector('.Insufficient_modal').style.display = 'none';
        }
        function openWithdraw(){
          document.querySelector('.Insufficient_modal').style.display = 'none';
          document.querySelector('.withdraw_modal').style.display = 'block';
        }
        function insufficientFunds(){
          document.querySelector('.withdraw_modal').style.display = 'none';
          document.querySelector('.Insufficient_modal').style.display = 'block';
        }
        function closeInsufficient(){
          document.querySelector('.Insufficient_modal').style.display = 'none';
        }
        function openBuyAirtime(){
          document.querySelector('.airtime_modal').style.display = 'block';
        }
        function openData(){
          document.querySelector('.data_modal').style.display = 'block';
        }
        function openExam(){
          document.querySelector('.exam_modal').style.display = 'block'; 

        }
        function openShop(){
          document.querySelector('.shop_modal').style.display = 'block'; 
          
        }
        function openBill(){
          document.querySelector('.bill_modal').style.display = 'block'; 
        }
        function logOut(){
          
          document.querySelector('.main').style.display= 'none';
          
        }
        document.getElementById('logout').addEventListener('click', function (){
          localStorage.clear();
          logOut();
          loadLogin()
        })
        window.onload = loadLogin;


        
 