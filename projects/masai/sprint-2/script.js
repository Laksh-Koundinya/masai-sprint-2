function getTotal() {
    event.preventDefault()
    var item = document.getElementsByClassName("item")
    var quant = document.getElementsByClassName('quant')
    var discount = document.getElementsByClassName('disc')
    var special_discount = document.getElementById('special')
    var special_percentage = document.getElementById('customize').value
    var amount = 0
    var total_discount = 0
    var spl_disc_rs = 0
    var tips = document.getElementById('tips').value
    var tax = document.getElementById('tax').value
        for(i=0; i<9; i++){
            if(item[i].checked === true) {
                amount += (Number(item[i].value) * Number(quant[i].value))
               // alert(amount)
        }
    } 
         for(j=0; j<3; j++){
             if(discount[j].checked === true){
                total_discount += Number(discount[j].value)
             }
         }
    if(special_discount.checked === true){
           spl_disc_rs =(Number(amount) * Number(special_percentage/100))
    }

     

    var tax_Rs = amount * Number(tax/100)
    var tips_Rs = amount * Number(tips/100)


    var total_Bill = Number(amount) + Number(tips_Rs) + Number(tax_Rs) - Number(total_discount) - Number(spl_disc_rs)

    var val=document.getElementById('result')
    val.textContent= "Total Amount: " + total_Bill

}