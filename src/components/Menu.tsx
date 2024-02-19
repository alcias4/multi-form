import Link from "next/link";

const numberBtn = [1,2,3,4]

const Menu = () => {
  return (
    <figure className="flex relative w-full  justify-center text-white">
      <img src="/bg-sidebar-mobile.svg" alt="background for mobil" className="min-w-full" />
      <ul className="absolute flex gap-10 mt-5 ">
        {
          numberBtn.map(e => (
            <Link href={e=== 1? '/':`/option/${e}`} className="flex items-center justify-center text-lg border-solid rounded-full  border w-9 h-9" key={e}>
              {e}
            </Link>
          ))
        }
      </ul>
    </figure>
  )
}

export default Menu;