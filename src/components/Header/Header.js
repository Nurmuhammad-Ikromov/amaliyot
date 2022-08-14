import {Link} from 'react-router-dom'
export const Header = () => {
    return (
       <header style={{backgroundColor: "#444", padding: "20px", display:"flex"}}>
        <Link style={{textDecoration:"none", fontSize:"24px", color: "white"}}  to="/">Logo</Link>
        <Link style={{textDecoration:"none", fontSize:"24px", color: "white", marginLeft:"auto", marginRight: "40px"}} to="/products">Products</Link>
        <Link  style={{textDecoration:"none", fontSize:"24px", color: "white"}}  to ="/cart">Cart</Link>
       </header>
    )
}