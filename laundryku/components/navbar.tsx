import Searchbar from "./searchbar"
import UserButton from "./user-button"

export default async function Navbar() {
  return (
    <header>
      <div className="flex items-center justify-center">
        <Searchbar isShow={true}  />
        <UserButton />
      </div>
    </header>
  )
}
