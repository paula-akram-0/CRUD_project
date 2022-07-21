var NameProductInput = document.getElementById("NameProductInput")
var PriceProductInput = document.getElementById("PriceProductInput")
var categoryProductInput = document.getElementById("categoryProductInput")
var descProductInput = document.getElementById("descProductInput")
var submit = document.getElementById("submit")
var help;
var mood="creat"
var productlist;

if(localStorage.product != null){
    productlist=JSON.parse(localStorage.product)
    displayproduct()
}else{
    var productlist =[]
}


function addproduct() {
    var product={
        name:NameProductInput.value,
        Price:PriceProductInput.value,
        category:categoryProductInput.value,
        desc:descProductInput.value
    }
    if(mood==="creat"){
         productlist.push(product)
         
    }else{
        productlist[help]=product
        submit.innerHTML="add product"
        mood="creat"
    }

    if(NameProductInput.value == "" || PriceProductInput.value == "" || categoryProductInput.value =="" || descProductInput.value == "" ){
        document.getElementById("error").innerHTML="please Enter products"
    }else{
        localStorage.setItem("product", JSON.stringify(productlist))
        displayproduct()
        clearinput()
   
    }


}


function displayproduct(){
    var temp=""
    for(var i =0; i<productlist.length;i++){
        temp+=`<tr>
        <th scope="row">`+i+`</th>
        <td>`+productlist[i].name+`</td>
        <td>`+productlist[i].Price+`</td>
        <td>`+productlist[i].category+`</td>
        <td>`+productlist[i].desc+`</td>
        <td><button class="btn btn-info" onclick="updateproduct(`+i+`)">update</button></td>
        <td><button class="btn btn-outline-danger" onclick="dell(`+i+`)" >delete</button></td>
        
      </tr>`
      
    }
    document.getElementById("showproduct").innerHTML=temp
}


// delete

function dell(i){
    productlist.splice(i,1)
    displayproduct()
    localStorage.setItem("product", JSON.stringify(productlist))
    
}

// clear

function clearinput(){
    NameProductInput.value=""
    PriceProductInput.value=""
    categoryProductInput.value=""
    descProductInput.value=""
}


// update
function updateproduct(i){
    NameProductInput.value=productlist[i].name;
    PriceProductInput.value=productlist[i].Price;
    categoryProductInput.value=productlist[i].category;
    descProductInput.value=productlist[i].desc;
   help=i
   mood="update"
   submit.innerHTML="add edite"
}

var searchInput =document.getElementById("searchInput")

function searchproduct(){
    var searchvalue = searchInput.value
    var temp =""
    for (var i = 0; i<productlist.length ; i++){
        if(productlist[i].name.toLowerCase().includes(searchvalue.toLowerCase())
        ||productlist[i].category.toLowerCase().includes(searchvalue.toLowerCase()) ){
        temp+=`<tr>
        <th scope="row">`+i+`</th>
        <td>`+productlist[i].name+`</td>
        <td>`+productlist[i].Price+`</td>
        <td>`+productlist[i].category+`</td>
        <td>`+productlist[i].desc+`</td>
        <td><button class="btn btn-info" onclick="updateproduct(`+i+`)">update</button></td>
        <td><button class="btn btn-outline-danger" onclick="deleteproduct(`+i+`)">delete</button></td>
      </tr>`
}
    }

    document.getElementById('showproduct').innerHTML=temp
}






function validationName(){
	var NameProductInput = document.getElementById("NameProductInput").value;
	var text1 = document.getElementById("text1");
	var patternName = /^[a-zA-Z]+[a-zA-Z]+$/;
	

	if (NameProductInput.match(patternName)){
		text1.innerHTML = "Product Name in valid"
		text1.style.color = "#00ff00"
		text1.style.display = "block"

	}else{
		text1.innerHTML = "please Enter valid name Product "
		text1.style.color = "#ff0000"
		text1.style.display = "block"
		
	}

	if (NameProductInput == ""){
		text1.innerHTML = ""
		text1.style.display = "none"
	}

  
}


function validationPrice(){
	var PriceProductInput = document.getElementById("PriceProductInput").value;
	var text2 = document.getElementById("text2");
	var patternAge = /^[1-9]?[0-9]{1,10}$|^100$/;
	

	if (PriceProductInput.match(patternAge)){
		text2.innerHTML = "Product Price in valid"
		text2.style.color = "#00ff00"
		text2.style.display = "block"

	}else{
		text2.innerHTML = "please Enter valid price "
		text2.style.color = "#ff0000"
		text2.style.display = "block"
		
	}

	if (PriceProductInput == ""){
		text2.innerHTML = ""
		text2.style.display = "none"
	}
}