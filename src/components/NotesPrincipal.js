// import React, {Component} from 'react';
// import firebase from 'firebase';
// import 'firebase/database';
// import { Credentials } from '../Config/Credentials';
// import Notas from './Notes'
// import './Notes.css'
// import FormNotes from './FormNotes'

// class Notes extends Component{

//     constructor(){
//         super();
//         this.state={
//             notes:[
//                 // {noteId: 1, noteContent: 'note 1'},
//                 // {noteId: 2, noteContent: 'note 2'}
//             ]
//         }
//         this.app = firebase.initializeApp(Credentials);
//         this.db = this.app.database().ref().child('notes')
//     }

//     componentDidMount(){
//         const { notes } = this.state;
//         this.db.on('child_added', snap => {
//             notes.push({
//                 noteId: snap.key,
//                 noteContent: snap.val().noteContent
//             })
//             this.setState({notes});
//             // console.log(notes)
//         });
//         this.db.on('child_removed', snap =>{
//             for(let i = 0; i< notes.length; i++){
//                 if(notes[i].noteId = snap.key){
//                     notes.splice(i , 1);
//                 }
//             }
//             this.setState({notes});
//         })
//     }
//     removeNote=(noteId)=>{
//         this.db.child(noteId).remove();
//         console.log('hola');
        
//     }
//     addNote=(note)=>{
//         // let { notes } = this.state;
//         // notes.push({
//         //     noteId: notes.length + 1,
//         //     noteContent:note
//         // })
//         // this.setState({
//         //     notes
//         // })
//         this.db.push().set({noteContent:note})
//     }
//     render(){
//         return(
//             <div className="notesContainer">
//                 <div className="notesHeader">
//                     <h2>Notes with React and Firebase</h2>
//                 </div>
//                 <div className="notesBody">
//                     <ul>
//                         {this.state.notes.map(note =>{
//                             return(
//                                 <Notas 
//                                 noteContent={note.noteContent}
//                                 noteId={note.noteId}
//                                 key={note.noteId}
//                                 removeNote ={this.removeNote}
//                                  />
                                 
//                                 )
                        
//                         })}  
//                     </ul>
                    
//                 </div>

//                 <div className="notesFooter">
//                 <FormNotes addNote={this.addNote} />
//                 </div>
//             </div>
//         )
//     }
// }

// export default Notes;

