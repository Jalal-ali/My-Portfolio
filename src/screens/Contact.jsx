import Email from "../assets/Newsletter.svg"



const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object to access all form fields
    const formData = new FormData(e.target);

    // Convert to plain object
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/mgvkgode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent!");
        e.target.reset(); // Clear form
      } else {
        alert("Failed to send. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <>
      {/* main section  */}
      <section className="max-w-full w-full bg-[#123128] bg-opacity-60 text-white">
        <div className="max-w-full w-full px-6 sm:px-10 lg:px-28 overflow-hidden">
          {/* 1st section section started  */}
          <div className="my-16 flex flex-wrap items-center text-center align-center justify-center lg:justify-between bg-cover bg-center">
            {/* sub section started */}
            <div className="w-full md:w-5/12 my-10 align-center items-center flex-col justify-center">
             <div className="items-center">
              <img
                className="h-auto my-3 max-w-xs sm:max-w-sm justify-self-center lg:max-w-md"
                src={Email}
                alt="Avatar Logo" />
             </div>

              <div className="rounded bg-emerald-900 shadow-lg justify-self-center bg-opacity-30 backdrop-blur-sm inline-flex p-4 items-center w-auto">
                <svg
                      className="w-10 h-10 p-1"
                      fill="currentColor"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M44.5 6H3.5C2.1 6 1 7.1 1 8.5v31C1 40.9 2.1 42 3.5 42h41c1.4 0 2.5-1.1 2.5-2.5v-31C47 7.1 45.9 6 44.5 6ZM43 8 24 23 5 8h38Zm1 31H4V12l19.2 15c.5.4 1.1.4 1.6 0L44 12v27Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                <span className="font-sans font-nunito  text-base mx-5">alikhanumar795@gmail.com</span>

              </div>
            </div>
            {/* sub section ended */}

            {/* blur contact form section  started*/}
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-4xl items-center text-center align-center rounded bg-emerald-900 shadow-lg bg-opacity-20 backdrop-blur-sm p-6 md:p-8 lg:p-10">
              <h1 className="text-3xl sm:text-4xl font-bold  mb-10 text-center">
                Get in  <span className="text-[#00debf]"> Touch </span>
              </h1>
              <form
                onSubmit={handleSubmit}
                className="ml-auo space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full bg-transparent rounded-md py-2.5 px-4 border-2 border-r border-l border-[#51e7d5] text-sm outline-[#007bff]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded-md bg-transparent py-2.5 px-4 border-2 border-r border-l border-[#51e7d5] text-sm outline-[#007bff]"
                />
                <input
                  type="text"
                  name="Subject"
                  placeholder="Subject"
                  className="w-full rounded-md bg-transparent py-2.5 px-4 border-2 border-r border-l border-[#51e7d5] text-sm outline-[#007bff]"
                />
                <textarea
                  name="Message"
                  placeholder="Message"
                  rows={6}
                  className="w-full rounded-md bg-transparent px-4 border-2 border-r border-l border-[#51e7d5] text-sm pt-2.5 outline-[#007bff]"
                  defaultValue={""}
                />
                <button
                  type="submit"
                  className="text-white bg-[#2cd1bdd4] hover:bg-[#078b7ab5] font-semibold rounded-md text-sm px-4 py-2.5 w-full"
                >
                  Send
                </button>
              </form>

            </div>
            {/* blur contact form section  ended*/}

          </div>
          {/* 1st section section ended  */}
        </div>
      </section>
    </>
  )
}

export default Contact