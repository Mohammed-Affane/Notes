

const btnadd=document.getElementById('add');


const Notes=JSON.parse(localStorage.getItem('Notes'));


if(Notes){

    Notes.forEach(Note => {

        addNewNote(Note);
        
    });

}

btnadd.addEventListener('click',()=>{
    addNewNote();
})

function addNewNote(text=''){


    const note=document.createElement('div');


    note.classList.add('notes');

    


    note.innerHTML=`

    <div class="tools">
            
    <button class="edit"><i class="fas fa-edit"> </i></button>
    <button class="delete"><i class="fas fa-trash-alt"> </i></button>
    </div>

    <div class="main ${text ? '' : 'hidden'}"></div>
    <textarea class="${text ? 'hidden' : ''}"></textarea>
    `

    const editBtn=note.querySelector('.edit');
    const deleteBtn=note.querySelector('.delete');
    const main=note.querySelector('.main');
    const textarea=note.querySelector('textarea');

    textarea.value=text;
    main.innerHTML=marked.parse(text);


    editBtn.addEventListener('click',()=>{
        main.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
        
    
    })

        textarea.addEventListener('input',(e)=>{

            const {value}=e.target;
            main.innerHTML=marked.parse(value);


            updateLS();
        
        })

        deleteBtn.addEventListener('click',()=>{

        note.remove();

        })


    


    document.body.appendChild(note);
}

function updateLS(){
    const textareas=document.querySelectorAll('textarea');


    const NTS=[];

    textareas.forEach(NT => {

        NTS.push(NT.value)

        
        
    });

    localStorage.setItem('Notes',JSON.stringify(NTS));


}

    





