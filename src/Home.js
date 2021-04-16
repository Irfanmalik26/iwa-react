import logo from './logo.svg';
import './App.css';

function Home() {
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
                        <a className="nav-link" href="#" onclick="logout()">Logout</a>
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
                    <form id="add-product-form" action="/add-product" method="POST"
                        enctype="application/x-www-form-urlencoded">
                        <div className="form-group">
                            <label for="">ID</label>
                            <input type="text" id="id" name="id" className="form-control" placeholder="Enter ID" />
                            <label className="mt-2">Name</label>
                            <input type="text" id="name" name="name" className="form-control" placeholder="Enter Name" />
                            <label className="mt-2">Description</label>
                            <input type="text" id="description" name="description" className="form-control"
                                placeholder="Enter Description" />
                            <label className="mt-2">Price</label>
                            <input type="number" id="price" name="price" className="form-control" placeholder="Enter Price" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-success">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-lg-8">
                <h5 className="mb-3"><i className="medium material-icons">arrow_forward</i> All Products </h5>
                <div id="products-section"></div>
            </div>
        </div>
    </div>

    <footer className="footer">
        <div className="container text-center"><span className="text-muted">Designed & Developed by <a href="https://github.com/Irfanmalik26" target="blank">Irfan Malik</a> &copy; 2021</span></div>
    </footer>

    <div className="modal fade" id="edit-product-modal" tabindex="-1" role="dialog" aria-labelledby="formModal"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
            <form id="edit-product-form" action="update-product" method="post">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Product</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <input type="hidden" id="edit-index" name="index" />
                            <label for="">ID</label>
                            <input type="text" id="edit-id" name="id" className="form-control" placeholder="Enter ID" />
                            <label className="mt-2">Name</label>
                            <input type="text" id="edit-name" name="name" className="form-control" placeholder="Enter Name" />
                            <label className="mt-2">Description</label>
                            <input type="text" id="edit-description" name="description" className="form-control"
                                placeholder="Enter Description" />
                            <label className="mt-2">Price</label>
                            <input type="number" id="edit-price" name="price" className="form-control" placeholder="Enter Price" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger waves-effect" data-dismiss="modal">Cancel</button>
                        <button type="submit" className="btn btn-info waves-effect">Edit Product</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
     </div>
   
  
    
  );
}

export default Home;
