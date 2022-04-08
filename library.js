console.log("these is what, we are doing, creating a library website");

//constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//display constructor
function Display() {
    
}
//adding add and clear methods to display prototype
Display.prototype.add = function(book){
    console.log("adding to UI");
    let tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                      <td>${book.name}</td>
                      <td>${book.author}</td>
                      <td>${book.type}</td>
                   </tr> `;
    tableBody.innerHTML += uiString;  
}
/* implement the clear function */
Display.prototype.clear = function(){
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
    //these reset the value of input field.
}
/* implementing the validate function */
Display.prototype.validate = function(book){
   if(book.name.length < 2 || book.author.length < 2){
      return false;
   }else{
       return true;
   }
   // these function validate the book object. book object contains book name, author name and type. if the length of book name and author name is less then 2 return false, else return true.
}
Display.prototype.show = function(type, displaymessage){
    let message = document.getElementById('message');
    message.innerHTML = `        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                    <strong>Message!</strong> ${displaymessage}
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                 </div>`;
    setTimeout(() => {
        message.innerHTML = ''
    }, 2000);//after 2 seconds we hide the meggage, so assigning empty string to the innerhTML of the element.
    //we are grabbing the element whose id is message, and adding the html element inside it.
}

/* adding submit listener to the form, whose id is libraryForm */
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("library form submitted");
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    /* grabbing bookname and author */
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let type;
    /* grabbing all three fiction, programming and cooking */
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    /* checkbox tells about checkbox checked or not. thesefore we are searcing which checkbox is checked, and assigning their values to the type variable for further working*/
    let book = new Book(name, author, type);
    /* passing the bookname, author name and the type of the book, to the Book constructor. */
    console.log(book);
     let display = new Display();

     if(display.validate(book)){
         display.add(book);
         display.clear();
         display.show('success', " Your book hasbeen successfully added.");
     }
     else{
         // show error to the user
         display.show('danger', " sorry you cannot add these book.");
     }
     /* we validate the book object, if the validates() function returns true then, we add the book, clear the input section and show the message of show() function.
     else show another message.  */

    e.preventDefault();
    // the default behaviour of a form is, whenever it is submitted, it reloads the page. so we are preventing  the default behaviour of the form using e.preventDefaut() 

}



/* 
todo:
1.  store all the data to the local storage.
2.  give another column: create another column as an option to delete the book.
3.  add the scroll bar to the view.
 */