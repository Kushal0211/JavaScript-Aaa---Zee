const btnAdd = document.getElementById('btnAdd');
const btnSub = document.getElementById('btnSub');

const TotalQty = document.getElementById('qtyPrint');
const TotalBill = document.getElementById('totalBill');


let count = 0;
let amount = 0;


function addItems()
{
    count++;
    TotalQty.innerHTML = count;

    totalBillItems();
}

function deleteItems()
{
    if(count>0)
    {
        count--;
        TotalQty.innerHTML = count;
    }
    
    totalBillItems();
    
}


btnAdd.addEventListener('click', addItems)

btnSub.addEventListener('click',deleteItems)

function totalBillItems()
{
 amount = count*300;
 TotalBill.innerHTML = amount;
 
}