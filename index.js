
    document.getElementById('addrowdata').addEventListener('submit', function(event) {
        event.preventDefault(); 
        
  
        var name = document.getElementById('name').value;
        var pizza = document.getElementById('pizzaname').value;
        var size = document.getElementById('size').value;
        var quantity = document.getElementById('quantity').value;
        var crust = document.getElementById('crust').value;

        var table = document.getElementById('mytable').getElementsByTagName('tbody')[0];
    
        var newRow = table.insertRow();
    
    
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);
    

        cell1.innerHTML = name;
        cell2.innerHTML = pizza;
        cell3.innerHTML = size;
        cell4.innerHTML = quantity;
        cell5.innerHTML = crust;
        cell6.innerHTML = '<button class="delete-btn" id ="delte">Delete</button> <button class="edit-btn">Edit</button>';

        document.getElementById('addrowdata').reset();

    })

function delterow(button){
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
    var table = document.getElementById('mytable');
    table.addEventListener("click", function(event) {
        if (event.target.classList.contains('delete-btn')) {
            delterow(event.target);
        }
        if(event.target.classList.contains('edit-btn')){
            editrow(event.target);
        }
    })

    function editrow(button){
        var roweditelt = button.parentNode.parentNode
        var rowcell = roweditelt.children

        document.getElementById('name').value = rowcell[0].textContent
        document.getElementById('pizzaname').value = rowcell[1].textContent
        document.getElementById('size').value = rowcell[2].textContent
        document.getElementById('quantity').value = rowcell[3].textContent
        document.getElementById('crust').value = rowcell[4].textContent

        document.getElementById("addrowdata").addEventListener('input',function(event){
            rowcell[0].textContent = document.getElementById('name').value;
            rowcell[1].textContent = document.getElementById('pizzaname').value;
            rowcell[2].textContent = document.getElementById('size').value;
            rowcell[3].textContent = document.getElementById('quantity').value;
            rowcell[4].textContent = document.getElementById('crust').value;
        })


    }

