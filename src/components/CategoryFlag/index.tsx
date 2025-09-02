interface CategoryFlagProps {
  category: string
}

interface FlagProps extends CategoryFlagProps {
    foreground: string
    background: string
}

function Flag ({category, foreground, background}:FlagProps) {
    return(
        <span className={`category-flag flex justify-center items-center min-w-20 text-sm lg:text-base font-jetbrains py-1 px-2 lg:px-3 rounded-xl  border-1 text-[${foreground}] border-[${foreground}] ${background}`} 
         style={{ color: foreground, borderColor: foreground , background: background}}>
            {category}
            </span>
    )
}

export default function CategoryFlag({ category }: CategoryFlagProps) {
  switch (category) {
    case "Codes":
      return <Flag category={category} foreground={"#d8e7f3"} background={"#2F6B9A"}/>
    case "IA":
      return <Flag category={category} foreground={"#0d0d0d"}  background={"#b3b3b3"}/>
      case "Carreira":
        return <Flag category={category} foreground={"#fef5e6"}  background={"#976435"}/>
    default:
      return <span>Sem categoria</span>
  }
}
