import React from "react";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";
import AddUser from "./AddUser";

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false
        }
    }
    user = this.props.user
  render() {
    return(
        <div className="user" >
            <IoCloseCircleSharp className="delete-icon" onClick={() => this.props.deleteUser(this.user.id)}/>
            <IoHammerSharp className="edit-icon" onClick={() => 
                this.setState({editForm: !this.state.editForm})
            }/>
            <h3>{this.user.first_name} {this.user.last_name}</h3>
            <img src={this.user.avatar} />
            <p>Почта: {this.user.email}</p>
            <b>{this.user.isHappy === true ? 'Счастлив' : 'Грустный'}</b>

            {this.state.editForm && <AddUser user={this.user} addUser={this.props.editUser}/>}
        </div>
    )
  }
}

export default User