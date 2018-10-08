// import React, { Component } from 'react';



// class Notas extends Component{
//     constructor(props){
//     super(props);
    
//     this.noteContent = props.noteContent;
//     this.noteId = props.noteId;
     
//     }
//     handleRemove=(noteId)=>{
//         const response = window.confirm('Estas seguro que quieres eliminar la tarea?')
//         if(response){
//             this.props.removeNote(noteId);   
//         }
//        return;
//     }

//     render(){
//         return(
//             <div className="Note">
//                 <span onClick = {()=>this.handleRemove(this.noteId)}
//                 >&times;</span>
//                 <p>{this.noteContent}</p>
//             </div>
//         )
//     }

// }

// export default Notas;