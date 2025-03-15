export default function StartRating ({rating}: {rating: number}) {
  return (
    <div className="justify-start items-center gap-1 inline-flex">
      {Array.from({ length: rating }).map((_, index) =>  (
        <div data-svg-wrapper key={index}>
          <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 0.5L13.4697 8.10081H21.4616L14.996 12.7984L17.4656 20.3992L11 15.7016L4.53436 20.3992L7.00402 12.7984L0.538379 8.10081H8.53035L11 0.5Z" fill="#FE7800"/>
          </svg>
        </div>
      ))}
      {Array.from({ length: 5-rating }).map((_, index) =>  (
        <div data-svg-wrapper key={5-index}>
          <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 0.5L13.4697 8.10081H21.4616L14.996 12.7984L17.4656 20.3992L11 15.7016L4.53436 20.3992L7.00402 12.7984L0.538379 8.10081H8.53035L11 0.5Z" fill="#d9d9d9"/>
          </svg>
        </div>
      ))}
    </div>
  )
}