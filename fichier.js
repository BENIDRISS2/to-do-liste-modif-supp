// class Dix extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             inputTodo:"",
//             Todo:[],
//         }
//         }
// // editer
// // const updatedInfos =submittedInfos.map((info, index)=>
// //     index === editIndex ? newInfo : info);
//       Editing=(index)=>{
//         const needit=this.state.Todo.Editing((_, i) => i !== index);
//         this.setState({ Todo: needit })
//       }
//         // Méthode pour supprimer un élément de la liste
//     Supprimatee = (index) => {
//       const newuodo = this.state.Todo.filter((_, i) => i !== index);
//       this.setState({ Todo: newuodo });
//     };
//         render(){
//             return (
//                 <div className="container mt-4">
//                     <h1>My 10eme to do list</h1>
//             <p>{this.state.inputTodo}</p>
//             <div className="input-group mb-3">
//                 <input
//                 type="texte"
//                 value={this.state.inputTodo} 
//                 onChange={(e)=>{
//                     this.setState( {inputTodo: e.target.value})
//                 }}
//                  className="form-control"
//                 placeholder="veuilllez ajou"
//                 />
//                 <button className="btn btn-primary"
//                 onClick ={()=>{
//                     this.setState({Todo:[...this.state.Todo ,this.state.inputTodo]})
//                 }}> J'AJOUTE</button>
//             </div>
//             <ul className="list-group">
//                 {
//                     this.state.Todo.map((todo, index)=>{
//                         return <li key={index}>{todo}
//                         <button onClick={()=>{
//                             this.Supprimatee(index)
//                         }}>Supprimer</button>
//                         <button
//                         onClick={()=>{
//                             this.Editing(index)
//                         }}> Modifier</button></li>
//                     })
//                 }
//             </ul>

//                 </div>
//             )
//         }
//     }
//     ReactDOM.render(<Dix/>,document.getElementById('my'))
// // class Dix extends React.Component {
// //     constructor(props) {
// //       super(props);
// //       this.state = {
// //         inputTodo: "",
// //         Todo: [],
// //       };
// //     }
  
// //     // Méthode pour supprimer un élément de la liste
// //     handleDelete = (index) => {
// //       const newTodo = this.state.Todo.filter((_, i) => i !== index);
// //       this.setState({ Todo: newTodo });
// //     };
  
// //     render() {
// //       return (
// //         <div className="container mt-4">
// //           <h1>My 10eme to do list</h1>
// //           <p>{this.state.inputTodo}</p>
// //           <div className="input-group mb-3">
// //             <input
// //               type="text"
// //               value={this.state.inputTodo}
// //               onChange={(e) => {
// //                 this.setState({ inputTodo: e.target.value });
// //               }}
// //               className="form-control"
// //               placeholder="veuilllez ajou"
// //             />
// //             <button
// //               className="btn btn-primary"
// //               onClick={() => {
// //                 this.setState({
// //                   Todo: [...this.state.Todo, this.state.inputTodo],
// //                   inputTodo: "" // Réinitialiser l'input après l'ajout
// //                 });
// //               }}
// //             >
// //               J'AJOUTE
// //             </button>
// //           </div>
// //           <ul className="list-group">
// //             {this.state.Todo.map((todo, index) => (
// //               <li key={index} className="list-group-item">
// //                 {todo}
// //                 <button
// //                   className="btn btn-danger ml-3"
// //                   onClick={() => this.handleDelete(index)}
// //                 >
// //                   Supprimer
// //                 </button>
// //                 <button className="btn btn-secondary ml-2">Modifier</button>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       );
// //     }
// //   }
  
// //   ReactDOM.render(<Dix />, document.getElementById("my"));
  
class Dix extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputTodo: "",
        Todo: [],
        editIndex: null, // Pour suivre l'index de l'élément en cours de modification
      };
    }
  
    // Méthode pour ajouter ou modifier un élément dans la liste
    handleAddOrEdit = () => {
      if (this.state.editIndex !== null) {
        const updatedTodo = this.state.Todo.map((todo, index) => 
          index === this.state.editIndex ? this.state.inputTodo : todo
        );
        this.setState({ Todo: updatedTodo, inputTodo: "", editIndex: null });
      } else {
        this.setState({ Todo: [...this.state.Todo, this.state.inputTodo], inputTodo: "" });
      }
    };
  
    // Méthode pour déclencher la modification d'un élément
    handleEdit = (index) => {
      this.setState({ inputTodo: this.state.Todo[index], editIndex: index });
    };
  
    // Méthode pour supprimer un élément de la liste
    Supprimatee = (index) => {
      const newTodo = this.state.Todo.filter((_, i) => i !== index);
      this.setState({ Todo: newTodo });
    };
  
    render() {
      return (
        <div className="container mt-4"
        >
          <h1>My 10eme to do list</h1>
          <div className="input-group mb-3">
            <input
              type="texte"
              value={this.state.inputTodo}
              onChange={(e) => {
                this.setState({ inputTodo: e.target.value });
              }}
              className="form-control"
              placeholder="Veuillez ajouter"
            />
            <button className="btn btn-primary" onClick={this.handleAddOrEdit}>
              {this.state.editIndex !== null ? "Modifier" : "Ajouter"}
            </button>
          </div>
          <ul className="list-group">
            {this.state.Todo.map((todo, index) => {
              return (
                <li key={index} className="list-group-item">
                  {todo}
                  <button
                    className="btn btn-warning mx-2"
                    onClick={() => {
                      this.handleEdit(index);
                    }}
                  >
                    Modifier
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      this.Supprimatee(index);
                    }}
                  >
                    Supprimer
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }
  
  ReactDOM.render(<Dix />, document.getElementById("my"));
  