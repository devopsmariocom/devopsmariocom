export default function Navigation() {
  return (
    <nav className="nav-container hidden md:block w-full pt-[50px]">
      <div className="nav-links flex space-x-12 text-black font-normal justify-end h-[125px] w-full text-[17px] pr-[50px]">
        <a href="#services">Services</a>
        <a href="#portfolio">Case Studies</a>
        <a href="#how">How it works?</a>
        <a href="#about">About Me</a>
        <a href="#lets-chat">Let's Talk</a>
      </div>
    </nav>
  );
}
