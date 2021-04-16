import React from "react"
import { Table, Modal } from "reactstrap"
export default class Home extends React.Component {
    state = { search: "", data: { name: "", price: "", description: "" } }
    search = (text, allData) => {
        let data = allData.filter(data => {
            return Object.values(data).join("").toLowerCase().includes(text)
        })
        return data
    }
    render() {
        let { allData } = this.props
        let { search, data } = this.state
        const { _id, name, description, price } = data

        if (search)
            allData = this.search(search, allData)
        return (
            <div className="Home">
                <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">Design Solvers | Mobile Accessories</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home
                            <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={this.props.logout}>Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>


                <div className="col-lg-12">
                    <div className="row">
                        <div className="container text-center">
                            <h2 className="mt-5">Mobile Accessories by <b><i className="blue">Design Solvers</i></b></h2>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="col-lg-12">
                    <div className="row mt-4">
                        <div className="col-lg-4">
                            <h5 className="mb-3"><i className="medium material-icons">arrow_forward</i> Add New Product</h5>
                            <div className="container add-new-product-section">
                                <div className="form-group">
                                    <label className="mt-2">Name</label>
                                    <input type="text" value={name} onChange={({ target: { value: name } }) => this.setState({ data: { ...data, name } })} className="form-control" placeholder="Enter Name" />
                                    <label className="mt-2">Description</label>
                                    <input type="text" value={description} onChange={({ target: { value: description } }) => this.setState({ data: { ...data, description } })} className="form-control"
                                        placeholder="Enter Description" />
                                    <label className="mt-2">Price</label>
                                    <input type="number" value={price} onChange={({ target: { value: price } }) => this.setState({ data: { ...data, price } })} className="form-control" placeholder="Enter Price" />

                                </div>
                                <div className="form-group">
                                    <button type="submit" disabled={!name || !description || !price} onClick={() => { this.props.add({ name, price, description }); this.setState({ data: { name: "", price: "", description: "" } }) }} className="btn btn-success">Add Product</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <h5 className="mb-3"><i className="medium material-icons">arrow_forward</i>
                            All Products <span>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={search}
                                        onChange={({ target: { value: search } }) => this.setState({ search })}
                                        placeholder="search something . . ."
                                    />
                                </span>
                            </h5>
                            <div id="products-section">
                                <Table>
                                    <thead>
                                        <tr>
                                            {["ID", "Name", "Description", "Price", "Edit", "Delete"].map(key => <th>{key}</th>)}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            allData.map((data) => {
                                                const { _id, name, description, price } = data
                                                return (
                                                    <tr>
                                                        <td>{_id}</td>
                                                        <td>{name}</td>
                                                        <td>{description}</td>
                                                        <td>{price}</td>
                                                        <td onClick={() => this.setState({ data, edit: true })}><i className="medium warning material-icons">edit</i></td>
                                                        <td onClick={() => this.props.delete(_id)}><i className="medium red material-icons">delete</i></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="footer">
                    <div className="container text-center"><span className="text-muted">Designed & Developed by <a href="https://github.com/Irfanmalik26" target="blank">Irfan Malik</a> &copy; 2021</span></div>
                </footer>
                <Modal isOpen={this.state.edit} onClosed={() => this.setState({ edit: false, data: { name: "", price: "", description: "" } })}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Product</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label className="mt-2">Name</label>
                                <input type="text" value={name} onChange={({ target: { value: name } }) => this.setState({ data: { ...data, name } })} className="form-control" placeholder="Enter Name" />
                                <label className="mt-2">Description</label>
                                <input type="text" value={description} onChange={({ target: { value: description } }) => this.setState({ data: { ...data, description } })} className="form-control"
                                    placeholder="Enter Description" />
                                <label className="mt-2">Price</label>
                                <input type="number" value={price} onChange={({ target: { value: price } }) => this.setState({ data: { ...data, price } })} className="form-control" placeholder="Enter Price" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger waves-effect" data-dismiss="modal" onClick={() => this.setState({ edit: false, data: { name: "", price: "", description: "" } })}>Cancel</button>
                            <button type="submit" onClick={() => { this.props.onUpdate({ name, price, description }, _id); this.setState({ edit: false }) }} className="btn btn-info waves-effect">Edit Product</button>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

