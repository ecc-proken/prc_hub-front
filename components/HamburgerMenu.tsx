import Link from 'next/link'

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
            <Link href="#">
              <a className="menu-item">ホーム</a>
            </Link>
          </li>
          <li>
            <Link href="/events">
              <a className="menu-item">イベント情報</a>
            </Link>
          </li>
          <li>
            <Link href="/events">
              <a className="menu-item">先輩の作品</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="menu-item">プロ研について</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
