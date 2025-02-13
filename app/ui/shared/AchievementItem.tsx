export default function AchievementItem ({title, score}: {title: string, score: string}) {
  return (
    <div className="w-fit flex-col justify-center items-center gap-3 inline-flex">
      <div
        className="items-center self-stretch h-10 text-center text-black text-xxlg font-semibold font-['Plus Jakarta Sans'] leading-tight tracking-tight">{score}
      </div>
      <div
        className="items-center self-stretch text-center text-black text-sm font-normal font-['Plus Jakarta Sans'] leading-[30px]">{title}
      </div>
    </div>
  )
}