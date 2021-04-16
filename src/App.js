import React from "react"
import Home from "./Home"
import Login from "./Login"
import axios from "axios"
const serverURL = "https://iwa-server.herokuapp.com"
export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            allData: [],
            user: null
        }
    }
    componentDidMount = () => {
        this.loading()
    }
    logout = () => {
        localStorage.removeItem("user")
        this.setState({ user: null }, this.loading)
    }
    login = ({ user, password }) => {
        if (user === "admin" && password === "123") {
            let user = "admin"
            this.setState({ user })
            localStorage.setItem("user", user)
        } else {
            alert("Wrong User/Password")
        }
    }

    loadData = async (initObject) => {
        let { data } = await axios.get(`${serverURL}/get`)
        this.setState({ allData: data.map(({ _id, name, description, price }) => ({ _id, name, description, price })), ...initObject })
    }

    loading = () => {
        let user = localStorage.getItem("user")
        this.loadData({ user, loading: false })
    }

    addNew = (data) => {
        axios.post(`${serverURL}/add`, data)
            .then(() => { alert("Data added"); this.loading() })
            .catch(err => alert(err + ""))
    }

    onUpdate = (updatedObject, id) => {
        this.setState({
            allData: this.state.allData.map(data => {
                if (data._id === id) {
                    data = { ...data, ...updatedObject }
                }
                return data
            })
        }, () => {
            axios.post(`${serverURL}/update/${id}`, updatedObject)
                .then(() => { console.log("Data updated") })
                .catch(err => alert(err + ""))
        })

    }

    delete = (id) => {
        this.setState({
            allData: this.state.allData.filter(data => {
                return data._id !== id
            })
        }, () => {
            axios.delete(`${serverURL}/delete/${id}`)
                .then(() => alert("Data deleted"))
                .catch(err => alert(err + ""))
        })
    }

    render() {
        let { loading, user, allData } = this.state
        if (loading) {
            return <h1>Loading...</h1>
        }
        if (user) {
            return <Home add={this.addNew} logout={this.logout} allData={allData} delete={this.delete} onUpdate={this.onUpdate}
            />
        } else {
            return <Login login={this.login} />
        }

    }
}
