const Banner: React.FC = (): JSX.Element => {

  return (
      <div className="w-full lg:px-32 px-8">
          <div className="flex justify-between items-center">
             <div>
               <h1>How are you ?</h1>
             </div>
             <div className="">
                 <img src="src\assets\hero19.png" className="w-[450px]" alt="" />
             </div>
          </div>
      </div>
  )
}

export default Banner