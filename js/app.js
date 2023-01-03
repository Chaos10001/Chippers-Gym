const search =()=>{
    const SearchBox=document.getElementById('search-items').value.toUpperCase()
    const StoreItems=document.getElementById('product-list')
    const product=document.querySelectorAll('#product')
    const pname=document.getElementsByTagName('h2')

    for (var i = 0; i < pname.length; i++) {
        const match = product[i].getElementsByTagName('h2')[0];

        if (match) {
            let textvalue=match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(SearchBox) > -1) {

                product[i].style.display=''
                
            }
            else{
                product[i].style.display='none'
            }
        }
        
    }
}