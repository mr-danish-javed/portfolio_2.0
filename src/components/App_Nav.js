import { Link, useNavigate } from "react-router-dom";
import App_Routes from "../App_Routes";
import "./../css/App_Nav.css";
const App_Nav = ({menuItems, handleMenuChange, isMobile,activeRoute}) => {

  // let currentPath = window.location.pathname;
  if(activeRoute === '/' && !isMobile) activeRoute= App_Routes.default;
  if(activeRoute === '/' && isMobile) activeRoute= undefined;

  let activeItem=menuItems.filter(element => activeRoute?.includes(element.route))[0];
  let navigate = useNavigate();
  const handleNavClick=(route)=>{
    document.getElementsByClassName('page-item')[0]?.classList.add('slide-out');
    handleMenuChange(route);     
    setTimeout(() => {
    navigate(route);
    }, 200);
  }
  // menuItems = menuItems.map((item,index) => (
  //   <Link to={item.route} className={" d-flex flex-column menu-item text-center "+ (activeItem===item?"active":"")} 
  //     onClick={()=>handleMenuChange(item.route)} key={index}>
  //     <i className={"fa-solid " + item.iconClass}></i>
      
  //     <div>{item.itemName}</div>
  //     <div className="nav-decor align-self-end"></div>
  //     <div className="d-none d-md-block line"></div>
  //   </Link>
  // ));
  menuItems = menuItems.map((item,index) => (
    <div to={item.route} className={" d-flex flex-column menu-item text-center "+ (activeItem===item?"active":"")} 
      onClick={()=>handleNavClick(item.route)} key={index}>
      <i className={"fa-solid " + item.iconClass}></i>
      
      <div>{item.itemName}</div>
      <div className="nav-decor align-self-end"></div>
      <div className="d-none d-md-block line"></div>
    </div>
  ));
  return (
    <>
      <div
        className="menu d-flex flex-lg-column justify-content-around bg-light col-12 col-lg-10 pt-3 gap-3 rounded"
      >
        {menuItems}
      </div>
    </>
  );
};

export default App_Nav;
