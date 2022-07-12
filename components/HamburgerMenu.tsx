import Link from 'next/link'

export const HamburgerMenu = () => {
  return (
    <div>
      <input type="checkbox" id="menu-btn-check"></input>
      <label
        htmlFor="menu-btn-check"
        className="flex fixed right-12 bottom-12 z-40 justify-center items-center w-16 h-16 bg-primary-blue menu-btn"
      >
        <span>{/* メニューボタン */}</span>
      </label>
      <div className="block overflow-hidden fixed right-28 bottom-12 z-50 menu-content">
        <ul className="flex justify-center items-center h-16 text-lg border-b-3 border-primary-blue divide-x divide-gray-400">
          <li className="px-4">
            <Link href="#">
              <a className="hover:text-primary-blue">ホーム</a>
            </Link>
          </li>
          <li className="px-4">
            <Link href="/events">
              <a className="hover:text-primary-blue">イベント情報</a>
            </Link>
          </li>
          <li className="px-4">
            <Link href="#">
              <a className="hover:text-primary-blue">先輩の作品</a>
            </Link>
          </li>
          <li className="px-4">
            <Link href="#">
              <a className="hover:text-primary-blue">プロ研について</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
