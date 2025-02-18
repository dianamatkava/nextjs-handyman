export default function Tick ({title}: {title: string}) {
  return (
    <div className="justify-start items-center gap-2 flex">
      <div data-svg-wrapper className="relative">
        <svg width="25" height="25" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_644_3297)">
            <path
              d="M13.1642 18.8358C12.3832 19.6168 11.1168 19.6168 10.3358 18.8358L7.375 15.875C6.89175 15.3918 6.10825 15.3918 5.625 15.875C5.14175 16.3582 5.14175 17.1418 5.625 17.625L10.3358 22.3358C11.1168 23.1168 12.3832 23.1168 13.1642 22.3358L25.875 9.625C26.3582 9.14175 26.3582 8.35825 25.875 7.875C25.3918 7.39175 24.6082 7.39175 24.125 7.875L13.1642 18.8358Z"
              fill="#FE7800"/>
          </g>
          <defs>
            <clipPath id="clip0_644_3297">
              <rect width="30" height="30" fill="white" transform="translate(0.5)"/>
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="w-fit text-nowrap text-[#e4e4e4] text-sm font-semibold font-['Plus Jakarta Sans'] tracking-tight">{title}
      </div>
    </div>
  )
}