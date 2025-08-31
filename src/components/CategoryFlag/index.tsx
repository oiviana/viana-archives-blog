interface CategoryFlagProps {
  category: string
}

interface FlagProps extends CategoryFlagProps {
    foreground: string
    background: string
}

function Flag ({category, foreground, background}:FlagProps) {
    return(
        <span className={`category-flag flex justify-center items-center min-w-20 text-base font-jetbrains py-1 px-3 rounded-xl  border-1 text-${foreground} border-${foreground} ${background}`} >
            {category}
            </span>
    )
}

export default function CategoryFlag({ category }: CategoryFlagProps) {
  switch (category) {
    case "Codes":
      return <Flag category={category} foreground={"[#63a0cf]"} background={"bg-[#2F6B9A]"}/>
    case "IA":
      return <Flag category={category} foreground={"[#FEEED5]"}  background={"bg-[#c38a55]"}/>
      case "Carreira":
        return <Flag category={category} foreground={"[#FEEED5]"}  background={"bg-[#c38a55]"}/>
    default:
      return <span>Sem categoria</span>
  }
}
