// const add_todo_btn = document.querySelector('#add_todo_btn')
const Input_text = document.querySelector('.input')
const arry_Data = []
const tasks = document.querySelector('.tasks')




function add_todo_btn(){
    arry_Data.push(Input_text.value);

    rendearry()
}

function deleted(index){
    arry_Data.splice(index, 1);
    rendearry()

    
}




function update(btn,index){
    const parentContainer = btn.parentNode.parentNode;
    const inputField = parentContainer.querySelector('.input_in');
    const paragraph = parentContainer.querySelector('.para');
    const editing = parentContainer.querySelector('#editing');
    const edit = parentContainer.querySelector('#Update_editing');
    inputField.style.display = 'block';
    paragraph.style.display = 'none';
    edit.style.display = 'block';
    editing.style.display = 'none';
    inputField.value = paragraph.innerHTML

    console.log(parentContainer);
   
}
function updated(btn,index){
    const parentContainer = btn.parentNode.parentNode;
    const inputField = parentContainer.querySelector('.input_in');
    const paragraph = parentContainer.querySelector('.para');
    const editing = parentContainer.querySelector('#editing');
    const edit = parentContainer.querySelector('#Update_editing');
    inputField.style.display = 'none';
    paragraph.style.display = 'block';
    edit.style.display = 'none';
    editing.style.display = 'block';
    paragraph.innerHTML = inputField.value
    arry_Data.splice(index, 1,inputField.value);
    console.log(parentContainer);
   
}

function rendearry(){
    tasks.innerHTML ='';
    Input_text.value = '';
    for (let i = 0; i < arry_Data.length; i++) {
        tasks.innerHTML += `
        <div class="task"><input class="input_in" type="text" style="display: none;">
                <p class="para">${arry_Data[i]}</p>
                <div class="task1"><span class="del" id="deleting" onclick="deleted(${i})">Delete</span><button
                        class="edit" onclick="update(this,${i})" id="editing">Edited</button><button id="Update_editing" class="edit"
                        onclick="updated(this,${i})" style="display: none;">Update</button></div>
            </div>
        `
        
    }
}
function deleteall(){

        arry_Data.length = 0;
        rendearry(); 
}