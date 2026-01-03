export default function Button({text="Apply"}) {
  return (
    <button className="group relative font-bold text-[0c66ed] text-[#1076BC] hover:text-[#ffffff] bg-[#ffffff]/60 border-1 border-[#1076BC] mx-2 px-7 py-2 rounded-[100px] overflow-hidden cursor-pointer transition-all duration-1500">
      <span className="absolute left-1/2 top-1/2 h-[30px] w-[30px] bg-gradient-to-br from-[#1076BC] to-blue-600 rounded-full transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] -translate-x-[3.3em] -translate-y-[4em] group-hover:translate-x-1/2 group-hover:translate-y-1/2 scale-[0] group-hover:scale-[10]" />
      <span className="absolute left-1/2 top-1/2 h-[30px] w-[30px] bg-gradient-to-br from-[#1076BC] to-blue-600 rounded-full transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] -translate-x-[6em] translate-y-[2.3em] group-hover:translate-x-1/2 group-hover:translate-y-1/2 scale-[0] group-hover:scale-[10]" />
      <span className="absolute left-1/2 top-1/2 h-[30px] w-[30px] bg-gradient-to-br from-[#1076BC] to-blue-600 rounded-full transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] -translate-x-[.2em] translate-y-[1.8em] group-hover:translate-x-1/2 group-hover:translate-y-1/2 scale-[0] group-hover:scale-[10]" />
      <span className="absolute left-1/2 top-1/2 h-[30px] w-[30px] bg-gradient-to-br from-[#1076BC] to-blue-600 rounded-full transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] translate-x-[3.5em] translate-y-[1.4em] group-hover:translate-x-1/2 group-hover:translate-y-1/2 scale-[0] group-hover:scale-[10]" />
      <span className="absolute left-1/2 top-1/2 h-[30px] w-[30px] bg-gradient-to-br from-[#1076BC] to-blue-600 rounded-full transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] translate-x-[3.5em] -translate-y-[3.8em] group-hover:translate-x-1/2 group-hover:translate-y-1/2 scale-[0] group-hover:scale-[10]" />
      <span className="relative z-10">{text}</span>
    </button>
  );
}

