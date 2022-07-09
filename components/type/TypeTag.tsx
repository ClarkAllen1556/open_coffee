import {definitions} from "../../types/supabase.types";

interface Props {
  type: definitions['location_type']
}

export default function TypeTag({ type }: Props) {
  return (
    <div className="inline text-center pl-1.5 pr-2 rounded-xl bg-sol-cyan-1 text-sol-white-1 italic">
      {type.name.toUpperCase()}
    </div>
  )
}