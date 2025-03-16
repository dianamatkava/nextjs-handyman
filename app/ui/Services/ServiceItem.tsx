import { AnimatePresence, motion } from "framer-motion";

export default function ServiceItem({
  id,
  title,
  number,
  description,
  isActive = false,
  onHoverEnter,
  onHoverLeave,
}: {
  id: number;
  title: string;
  number: string;
  description: string;
  isActive?: boolean;
  onHoverEnter: (id: number) => void;
  onHoverLeave: () => void;
}) {
  return (
    <div
      className="w-full h-fit flex flex-col items-start justify-start border-b border-black"
      onMouseEnter={() => onHoverEnter(id)}
      onMouseLeave={() => onHoverLeave()}
    >
      <div className="w-full inline-flex justify-start items-start gap-1">
        <div
          className={
            `text-center text-black text-sm font-['Plus Jakarta Sans'] leading-tight tracking-tight pt-1` +
            `${isActive ? "!font-bold" : null}`
          }
        >
          {number}
        </div>
        <div className="w-full h-fit py-1 flex-col justify-center items-start inline-flex">
          <div
            className={
              `w-full text-black text-xlg font-['Plus Jakarta Sans'] tracking-tight ` +
              `${isActive ? "!font-bold" : null}`
            }
          >
            {title}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="content"
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="py-2 ml-5">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
