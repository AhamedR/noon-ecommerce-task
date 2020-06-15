``
export default function navigationBar(props) {
  return (
    <nav className="nav">
        <div className="nav-menus">
            <div
                onClick={() => props.handleNavigation('HOME')}
            >
                <i className="fa fa-home" aria-hidden="true" ></i>
                <span> Home </span>
            </div>
            <div
                onClick={() => props.handleNavigation('FAV')}
            >
                <i className="fa fa-heart" aria-hidden="true" ></i>
                <span> Favourites </span>
            </div>
        </div>
    </nav>
  );
}