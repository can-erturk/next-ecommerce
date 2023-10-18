export default function NameInput() {
    return (
      <div className="mb-5">
        <label className="block text-xs text-gray-700 pt-1 pb-2" htmlFor="name">
          Your name
        </label>
        <div>
          <input
            type="text"
            name="name"
            id="name"
            required
            autoComplete="name"
            className="w-full py-3 px-4 max-sm:py-2 border border-darken rounded-md outline-none text-sm"
          />
        </div>
      </div>
    )
  }