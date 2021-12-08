
let ulElemItem = document.querySelector('ul')

let oneLiItem = document.createElement('li') 
let twoLiItem = document.createElement('li')

oneLiItem.innerHTML = 'product'
twoLiItem.innerHTML = 'users'


// ulElemItem.append(oneLiItem)
// ulElemItem.append(twoLiItem)
ulElemItem.appendChild(oneLiItem)
ulElemItem.appendChild(twoLiItem)
console.log(ulElemItem)
