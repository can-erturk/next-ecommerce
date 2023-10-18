export default function EmailInput() {
  return (
    <div>
      <label className="block text-xs text-gray-700 pt-1 pb-2" htmlFor="email">
        Email address
      </label>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          required
          autoComplete="email"
          className="w-full py-3 px-4 max-sm:py-2 border border-darken rounded-md outline-none text-sm"
        />
      </div>
    </div>
  )
}