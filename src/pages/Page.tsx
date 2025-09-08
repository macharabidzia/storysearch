import { Combobox, type ComboboxOption } from "../components/Search/combobox"

const frameworks: ComboboxOption[] = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
]

const Home = () => {
  return (
    <div className="w-[600px] mx-auto mt-2">
      <Combobox
        options={frameworks}
      />
    </div>
  )
}

export default Home
