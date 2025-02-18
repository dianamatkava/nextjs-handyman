export default function AchievementItem ({title, score}: {title: string, score: string}) {
  return (
    <div className="w-fit flex-col justify-center items-center gap-3 inline-flex">
      <div
        className="h-15 items-center self-stretch text-center text-black text-xxlg font-semibold font-['Plus Jakarta Sans'] leading-tight tracking-tight">{score}
      </div>
      <div
        className="items-center text-nowrap self-stretch text-center text-black text-xs font-normal font-['Plus Jakarta Sans']">{title}
      </div>
    </div>
  )
}