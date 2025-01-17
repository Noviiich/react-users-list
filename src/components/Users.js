import React from "react";
import User from "./User";

class Users extends React.Component {
      render() {
        if(this.props.users.length > 0) {
            return(<div>
                {this.props.users.map((el) => (
                    <User user={el} key={el.id} 
                    deleteUser={this.props.deleteUser} 
                    editUser={this.props.editUser}/>
                ))}
            </div>)
        }
        else {
            return(<div className="user">
                <h3>Пользователей нет</h3>
            </div>)
        }
        
    }
}

export default Users