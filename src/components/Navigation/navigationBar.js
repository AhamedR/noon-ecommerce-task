``
export default function navigationBar({props}) {
  return (
    <nav className="nav">
        <div className="nav-menus">
            <div>
                <i class="fa fa-home" aria-hidden="true" i/>
                <span> Home </span>
            </div>
            <div>
                <i class="fa fa-heart" aria-hidden="true" i/>
                <span> Favourites </span>
            </div>
        </div>
    </nav>
  )
}