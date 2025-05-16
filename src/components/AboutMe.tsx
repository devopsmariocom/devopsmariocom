import Image from 'next/image'

export default function AboutMe() {
  return (
    <section id="about" className="w-full min-h-[700px] py-24 px-0 flex items-center justify-center bg-[#E4E4E4]">
      <div className="flex w-full max-w-[1600px] mx-auto flex-col md:flex-row items-center md:items-stretch justify-between px-8 gap-8">
        <div className="flex-1 flex flex-col justify-center md:pr-12">
          <h2 className="text-7xl font-bold italic text-gray-800 mb-8" style={{ fontFamily: 'Helvetica,Arial,sans-serif' }}>
            About Me
          </h2>
          <div className="text-2xl text-gray-800 mb-4">
            I'm <span className="font-bold">Mario Vejlupek</span> — DevOps consultant,<br />
            former developer, meetup founder, and speaker.
          </div>
          <div className="text-lg text-gray-700 mb-8">
            With 20+ years of hands-on experience,<br />
            I've built systems that scale and teams that thrive. I've trained engineers in Kubernetes, mentored across time zones, and even taught kids to code with LEGO robots.
          </div>
        </div>
        
        <div className="flex-1 relative flex items-end justify-center min-h-[480px]">
          <Image
            src="/Me-About_Me.webp"
            alt="Mario at computer"
            width={520}
            height={400}
            className="w-[520px] max-w-full rounded shadow-lg object-cover object-center z-10"
          />
          
          <Image
            src="/Computer_Mess-About_Me.webp"
            alt="Messy computer cables"
            width={340}
            height={300}
            className="absolute right-[-80px] top-[-80px] w-[340px] rounded shadow-lg object-cover object-center z-20 hidden md:block"
          />
          
          <div className="absolute left-0 bottom-12 w-full flex flex-col items-end z-30">
            <span className="inline-block font-bold italic text-2xl md:text-3xl text-white bg-[#D97D7D] px-4 py-2 mb-1" style={{ fontFamily: 'Helvetica,Arial,sans-serif' }}>
              I believe in making complex systems<br />
              understandable, usable, and empowering
            </span>
            <span className="inline-block font-bold italic text-2xl md:text-3xl text-white bg-[#D97D7D] px-4 py-2" style={{ fontFamily: 'Helvetica,Arial,sans-serif' }}>
              — whether you're a startup<br />
              or an enterprise.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
} 