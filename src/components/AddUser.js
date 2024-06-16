import React from "react";

class AddUser extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            age: 0,
            isHappy: false
        }

    }

    render() {
        return(
        <form ref={(el) => this.myForm = el }>
            <input placeholder="Имя" onChange={(e) => this.setState({first_name: e.target.value})}/>
            <input placeholder="Фамилия" onChange={(e) => this.setState({last_name: e.target.value})}/>
            <input placeholder="Возраст" onChange={(e) => this.setState({age: e.target.value})}/>
            <label htmlFor="isHappy">Счатлив?</label>
            <input type="checkbox" id="isHappy" onChange={(e) => this.setState({isHappy: e.target.checked})}/>
            <button type="button" onClick={() => {
                this.userAdd = {
                    first_name: this.state.firstname,
                    last_name: this.state.lastname,
                    age: this.state.age,
                    isHappy: this.state.isHappy
                }
                this.myForm.reset()
                if(this.props.user)
                    this.userAdd.id = this.props.user.id
                    this.props.addUser(this.userAdd)
                }
            }>Добавить</button>
        </form>
        )
    }
}

export default AddUser