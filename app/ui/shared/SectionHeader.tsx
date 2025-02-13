export default function SectionHeader ({name}: {name: string}) {
  return (
    <div className="justify-center items-center gap-3 inline-flex">
      <div data-svg-wrapper className="relative">
        <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_644_3381)">
            <path
              d="M12.6642 18.8358C11.8832 19.6168 10.6168 19.6168 9.83579 18.8358L6.875 15.875C6.39175 15.3918 5.60825 15.3918 5.125 15.875C4.64175 16.3582 4.64175 17.1418 5.125 17.625L9.83579 22.3358C10.6168 23.1168 11.8832 23.1168 12.6642 22.3358L25.375 9.625C25.8582 9.14175 25.8582 8.35825 25.375 7.875C24.8918 7.39175 24.1082 7.39175 23.625 7.875L12.6642 18.8358Z"
              fill="#FE7800" stroke="#FE7800" stroke-width="3"/>
          </g>
          <defs>
            <clipPath id="clip0_644_3381">
              <rect width="30" height="30" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="justify-center items-center gap-5 flex">
        <div className="text-[#fe7800] text-sm font-bold font-['Plus Jakarta Sans'] uppercase tracking-wide">{name}
        </div>
      </div>
    </div>
  )
}