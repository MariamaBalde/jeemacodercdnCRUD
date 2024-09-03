// class Jeemacoder extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             prenomInput: "",
//             nomInput: "",
//             emailInput: "",
//             telephoneInput: "",
//             coders: [],
//             editIndex: null
//         }
//         this.handleClick = this.handleClick.bind(this);
//         this.handleDelete = this.handleDelete.bind(this);
//         this.handleSaveEdit=this.handleSaveEdit.bind(this)
//     }

//     //Spread operator:=.... :permet de Copiers l'ancien tableau dans le nouveau tableau
//     handleClick() {
//         const newCoder = {
//             prenom: this.state.prenomInput,
//             nom: this.state.nomInput,
//             email: this.state.emailInput,
//             telephone: this.state.telephoneInput
//         }
//         // ajouter un nouveau codeur
//         this.setState({ coders: [newCoder, ...this.state.coders] })
//         // vider le formulaire
//         this.setState({
//             prenomInput: "",
//             nomInput: "",
//             emailInput: "",
//             telephoneInput: "",
//         })
//     }

//     handleDelete(index) {
//         const newCoders = this.state.coders.filter((code, i) => i !== index);
//         this.setState({ coders: newCoders });
//     }

//     handleEdit(index) {
//         const coder = this.state.coders[index];
//         this.setState({
//             prenomInput: coder.prenom,
//             nomInput: coder.nom,
//             emailInput: coder.email,
//             telephoneInput: coder.telephoneInput,
//             editIndex: index
//         });
//     }

//     handleSaveEdit() {
//         const updatedCoders = [...this.state.coders];
//         updatedCoders[this.state.editIndex] = {
//             prenom: this.state.prenomInput,
//             nom: this.state.nomInput,
//             email: this.state.emailInput,
//             telephone: this.state.telephoneInput
//         };
//         this.setState({
//             coders: updatedCoders,
//             prenomInput: "",
//             nomInput: "",
//             emailInput: "",
//             telephoneInput: "",
//             editIndex: null // Réinitialise l'index après la modification
//         });
//     }

//     render() {
//         return <div className="py-4">
//             <p className="text-center">Jeemacoder gestion utilisateur</p>
//             <div className="container">
//                 <div style={{ maxWidth: 600, margin: "auto" }}>
//                     <div className="row">
//                         <div className="col-6 p-1">
//                             <label className="form-label">Prénom {this.state.prenomInput}</label>
//                             <input type="text"
//                                 value={this.state.prenomInput}
//                                 onChange={(e) => {
//                                     this.setState({ prenomInput: e.target.value })
//                                 }}
//                                 className="form-control" />
//                         </div>
//                         <div class="col-6 p-1">
//                             <label className="form-label">Nom {this.state.nomInput}</label>
//                             <input type="text"
//                                 value={this.state.nomInput}
//                                 onChange={(e) => {
//                                     this.setState({ nomInput: e.target.value })
//                                 }}
//                                 className="form-control" />
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-6 p-1">
//                             <label className="form-label">Email {this.state.emailInput}</label>
//                             <input type="email"
//                                 value={this.state.emailInput}
//                                 onChange={(e) => {
//                                     this.setState({ emailInput: e.target.value })
//                                 }}
//                                 className="form-control" />
//                         </div>
//                         <div class="col-6 p-1">
//                             <label className="form-label">Telephone {this.state.telephoneInput}</label>
//                             <input type="number"
//                                 value={this.state.telephoneInput}
//                                 onChange={(e) => {
//                                     this.setState({ telephoneInput: e.target.value })
//                                 }

//                                 }
//                                 className="form-control" />
//                         </div>
//                     </div>
//                     <button
//                     //  onClick={this.handleClick} 
//                         onClick={this.state.editIndex !== null ? this.handleSaveEdit : this.handleClick}
//                     className="btn btn-success w-100 mt-3">
//                         {this.state.editIndex !== null ? "Enregistrer" : "Submit"}

//                         </button>
//                 </div>
//             </div>
//             <div className="mt-5 container">
//                 <h3 className="text-center">Coders</h3>
//                 <table class="table">
//                     <thead>
//                         <tr>
//                             <th scope="col">Prénom</th>
//                             <th scope="col">Nom</th>
//                             <th scope="col">Email</th>
//                             <th scope="col">Telephone</th>
//                             <th scope="col">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             this.state.coders.map((coder, index) => {
//                                 return <tr key={index}>
//                                     <td>{coder.prenom}</td>
//                                     <td>{coder.nom}</td>
//                                     <td>{coder.email}</td>
//                                     <td>{coder.telephone}</td>
//                                     <td>
//                                         <button
//                                             onClick={() => this.handleEdit(index)}
//                                             class="btn btn-warning">
//                                         </button>

//                                         <button
//                                             onClick={() => this.handleDelete(index)}
//                                             class="btn btn-danger ms-3">Supprimer</button>
//                                     </td>
//                                 </tr>
//                             })
//                         }

//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     }
// }

// ReactDOM.render(<Jeemacoder />, document.getElementById('root'));

// // Class components
// // State
// // Props
// // Evénements
// // Gestion de formulaire
// // Utilisation de map


