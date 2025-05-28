import Typewriter from "typewriter-effect";

function Type() {
  return (
    
    <div className="text-xl lg:text-3xl text-[#00debf] font-bold">

      <Typewriter
        options={{
          strings: [
            "MERN Stack Developer",
            "Full-Stack Web Developer",
            "Mobile Application Developer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;