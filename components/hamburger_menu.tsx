export const HamburgerMenu = () => {
  return (
    <div className="bg-black">
      <input type="checkbox" id="menu-btn-check"></input>
      <label htmlFor="menu-btn-check" className="menu-btn">
        <span></span>
      </label>
      <div className="menu-content">
        <ul>
          <li>
            <a href="#" className="menu-item">
              ホーム
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              イベント情報
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              先輩の作品
            </a>
          </li>
          <li>
            <a href="#" className="menu-item">
              プロ研について
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
