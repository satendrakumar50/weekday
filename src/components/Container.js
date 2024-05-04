import React,{useState} from 'react'

const Container = ({logoUrl,companyName,jobDetailsFromCompany,jobRole,location,maxExp,maxJdSalary,minExp}) => {
  const [showMore, setShowMore] = useState(false);

  const toggleHiddenText = () => {
    setShowMore(!showMore);
  };


  let len = jobDetailsFromCompany.length
     
    let part1 = jobDetailsFromCompany.substring(0,len/2);
    let part2 = jobDetailsFromCompany.substring(len/2);
    console.log(part1)
    console.log(part2)

    
    

 
    
    if(logoUrl && companyName && jobDetailsFromCompany && jobRole && location && maxExp &&maxJdSalary && minExp) 
      
  return (
    <div className='float-right pr-20'>
      
   <div className='border border-gray-300 shadow-lg w-96 mt-5 rounded-3xl pl-4  hover:shadow-2xl '>
   
   <div className='flex flex-wrap'>
    <img className='pt-10 h-28 w-8 float-left' src={logoUrl} alt ="logo"/>
    <div className='float-right pt-10'>
      <p className="pt-1 pl-2">{companyName}</p>
      <p className="pt-1 pl-2">{jobRole}</p>
      <p className="pt-1 pl-2 text-xs text-gray-500">{location}</p>
      </div>
      </div>
    <div>
    <div className="text-sm font-medium">Estimated Salary: {maxJdSalary/10} LPA ✅</div>
    <div className=" h-auto px-4 py-3  w-96 ">
    <p className='font-semibold'>About Company</p>
    <p className='font-bold'>About us</p>
      <div className="flex items-center mb-2">
       
        <h2 className="  text-gray-500 ">{part1}</h2>
        {showMore &&<h2 className="  text-gray-500 ">{part2}</h2>}


       
      </div>
     
      <div className="flex items-center justify-between mb-2">
     
      
      
      
      
      
      </div>
      <div>
      </div>
      </div>
      <button onClick={toggleHiddenText} className="pl-32   ">
        {showMore ? 'Show Less' : 'View job'}
      </button>
      <div className="text-sm text-gray-500">Min. Experience:</div>
      <div className="text-sm text-gray-500"> {minExp} years</div>
    
    
    <div className="px-4 py-3  flex items-center">
      <button className="h-12 w-96 bg-teal-300 btn-primary mr-2 rounded-md text text-lg">⚡ Easy Apply </button>
      
            
    </div>
    <div className="px-4 py-3  flex items-center">
    <button className=" h-12 w-96 bg-blue-800 btn-primary mr-2 rounded-md text text-lg text-white">🚹🚹 Easy Apply </button>

    </div>
    
    
    </div>
    </div>
    </div>
 
    
  )
}

export default Container