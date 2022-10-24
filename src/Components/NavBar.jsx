import logo from '../Assets/logo.jpg';
import './NavBar.css';


const NavrBar = () => {
    const mystyle ={
        background: "#434f53",
        height:"105px",
    }
    
    return (
        <nav class="navbar  navbar-expand-lg navbar-light " style={mystyle}>
            <a class="navbar-brand " href="#" style={{marginLeft:"3em"}}>

            <img alt="logo" src={logo} style={{ height: 105, width: 200}}></img>
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarText" style={{marginLeft:"5em"}}>
                <ul class="navbar-nav mr-auto ">
                    <li class="nav-item active ">
                        <a class="nav-link " href="#">HOME </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">ABOUT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">SERVICES</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">PROJECTS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">OUR BLOG</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">CONTACTS</a>
                    </li>
                   
                    <li class="nav-item" style={{marginLeft:"5em"}}>
                        <a class="nav-link" href="#"><i class="fa-brands fa-facebook" ></i></a>
                    </li>
                    <li class="nav-item" >
                        <a class="nav-link" href="#"><i class="fa-brands fa-google-plus"></i></a>
                    </li>
                    <li class="nav-item" >
                        <a class="nav-link" href="#"><i class="fa-brands fa-twitter"></i></a>
                    </li>
                    <li class="nav-item" >
                        <a class="nav-link" href="#"><i class="fa-brands fa-pinterest"></i></a>
                    </li>
                    <li class="nav-item" >
                        <a class="nav-link" href="#"><i class="fa-brands fa-linkedin"></i></a>
                    </li>
                    
                </ul>
                <div>
                    
                </div>
            </div>
        </nav>
    );
}


export default NavrBar;
