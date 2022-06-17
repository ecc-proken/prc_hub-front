import type { NextPage } from 'next'
import Image from 'next/image'
import { HamburgerMenu } from '../components/HamburgerMenu'

const Home: NextPage = () => {
  return (
    <div className="bg-noble-white">
      <HamburgerMenu />
      <div className="relative">
        <div className="flex absolute justify-start items-end w-screen h-screen">
          <Image
            src="/svg/paint_blue.png"
            width={407}
            height={414}
            alt="bg_main"
          />
        </div>
        <div className="flex absolute justify-end items-start w-screen h-screen">
          <Image
            src="/svg/paint_red.png"
            width={327}
            height={381}
            alt="bg_main"
          />
        </div>
      </div>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="an1-fadein">
          <p className="m-auto font-serif text-2xl font-thin tracking-[.60em] text-center text-shadow vertical-rl">
            今ここにない
          </p>
          <div className="relative">
            <div className="z-0">
              {/* <Image
                src="/svg/bg_text.png"
                width={80}
                height={80}
                alt="bg_main"
              ></Image> */}
            </div>
            <div className="z-10">
              <p className="font-serif text-4xl font-thin tracking-[.60em] text-center text-shadow vertical-rl">
                未来
              </p>
            </div>
          </div>
          <p className="m-auto font-serif text-2xl font-thin tracking-[.60em] text-center text-shadow vertical-rl">
            はプロ研で創る。
          </p>
        </div>
        <div className="relative">
          <Image
            src="/svg/bg_image.png"
            width={640}
            height={642.2}
            alt="bg_main"
          />
          <div className="flex absolute top-1/2 left-1/2 z-10 justify-center items-center w-full h-14 -translate-x-1/2 -translate-y-1/2 ">
            <div className="flex relative justify-center items-center h-full font-serif text-4xl font-black text-white whitespace-nowrap bg-black an1-fadeup typing">
              {/* タイトルの黒枠 */}
            </div>
          </div>
        </div>
        <div className="an2-fadein">
          <p className="font-serif text-2xl font-thin tracking-[.60em] text-center text-shadow vertical-rl">
            アプリを作りたいです。
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
