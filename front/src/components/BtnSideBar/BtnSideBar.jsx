export default function BtnSideBar({children, svg}) {
    return <>
        <div>
            <div className="flex ml-[28px] mb-[23px]">
              <img className="w-[24px] h-[24px]" src={svg} />
              <label className="ml-[33px] text-[18px] font-bold">
                {children}
              </label>
            </div>
          </div>
    </>
}