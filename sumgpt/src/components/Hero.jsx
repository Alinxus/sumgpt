const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3 mt-3'>
        <button type="button" onClick={() => windown.open('https://github.com/Alinxus')} className="black_btn">Github</button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden"/>
        <span className="orange_gradient">GPT-4</span>
      </h1>
      <h2 className="desc">Simplify Your Reading with SUMGPT, an opensourse article summarizer that transforms lenghty articles into clear and concise summaries</h2>
    </header>

  )
}

export default Hero