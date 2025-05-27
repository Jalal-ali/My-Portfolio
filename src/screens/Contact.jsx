import Email from "../assets/Newsletter.svg"

const Contact = () => {
  return (
    <>
    {/* main section  */}
      <section className="max-w-full w-full bg-[#123128] bg-opacity-60 text-white">
        <div className="max-w-full w-full px-6 sm:px-10 lg:px-28 overflow-hidden">
          {/* blur card section started  */}
          <div className="my-16 flex items-center text-center justify-between bg-cover bg-center">

          <img
            className="h-auto my-10 max-w-xs sm:max-w-sm lg:max-w-md"
            src={Email}
            alt="Avatar Logo"/>
            {/* form section  */}
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-4xl rounded bg-emerald-900 shadow-lg bg-opacity-30 backdrop-blur-sm p-6 md:p-8 lg:p-10">
            <form className="ml-auo space-y-4">
  <input
    type="text"
    placeholder="Name"
    className="w-full bg-transparent rounded-md py-2.5 px-4 border-2 border-r border-l border-[#51e7d5] text-sm outline-[#007bff]"
  />
  <input
    type="email"
    placeholder="Email"
    className="w-full rounded-md bg-transparent py-2.5 px-4 border-2 border-r border-l border-[#51e7d5] text-sm outline-[#007bff]"
  />
  <input
    type="text"
    placeholder="Subject"
    className="w-full rounded-md bg-transparent py-2.5 px-4 border-2 border-r border-l border-[#51e7d5] text-sm outline-[#007bff]"
  />
  <textarea
    placeholder="Message"
    rows={6}
    className="w-full rounded-md bg-transparent px-4 border-2 border-r border-l border-[#51e7d5] text-sm pt-2.5 outline-[#007bff]"
    defaultValue={""}
  />
  <button
    type="button"
    className="text-white bg-[#0eb7a2ba] hover:bg-[#078b7ab5] font-semibold rounded-md text-sm px-4 py-2.5 w-full"
  >
    Send
  </button>
</form>

            </div>
            </div>
            {/* blur card section ended  */}
        </div>
      </section>
    </>
  )
}

export default Contact