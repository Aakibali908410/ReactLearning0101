import { useState } from 'react';
import { X } from 'lucide-react';

const App = () => {
    const [Heading, setHeading] = useState('')
    const [Notes, setNotes] = useState('')
    const [Task, setTask] = useState([])

    const submitHandler=(e)=>{
    e.preventDefault();

    const copyTask=[...Task];
    copyTask.push({Heading,Notes})
    setTask(copyTask)

      setHeading('');
      setNotes('');

  }
  const deleteNote=(idx)=>{
    const copyTask=[...Task]

    copyTask.splice(idx,1);
    setTask(copyTask)
    // console.log(copyTask)
  }
  return (
    <div className='h-screen text-black p-10'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}
       className='flex gap-5 items-start'>
       <div className='flex flex-col gap-5 w-full justify-between'>

        {/* first input for heading */}
        <input
        type="text"
        placeholder='Enter Heading Heading'  
        className='text-white font-medium px-5 h-15 w-full border-2 rounded text-2xl'
        value={Heading}
        onChange={(e)=>{
           setHeading(e.target.value)
        }}
        />

        {/* Text area where we will write Heading */}
        <textarea 
        type="text" 
        placeholder='Write Details' 
        className='text-white w-full px-5 h-40  rounded border-2 font-medium'
        value={Notes}
        onChange={(e)=>{
          setNotes(e.target.value)
        }}
        />

        {/* button jisko submit note add hoyege */}
        <button 
        className='bg-green-500 active:scale-95 outline-none w-full h-10 text-2xl font-bold border-2 rounded'>Add Notes</button>
       </div>

       {/* Recent add notes box  */}
       <div className='h-vh w-full bg-gray-500 rounded border-2 p-5'>
        <h1 className='text-3xl font-bold mb-4 underline'>Recent Notes</h1>

        <div className='gap-3 grid grid-cols-3 '>
            {Task.map(function(elem,idx){

              return <div key={Heading} className='w-47 h-58 bg-cover p-3 bg-[url(https://i.pinimg.com/736x/65/f6/b7/65f6b783cd808b438e0dcbb02a29e986.jpg)] rounded-2xl'>
                <h2 onClick={()=>{
                    deleteNote(idx)
                }} 
                
                className='bg-gray-500 active:scale-95 absolute ml-34 rounded-2xl p-1'> <X /> </h2>
                <h1 className='font-bold underline tracking-wide mt-7'>{elem.Heading}</h1>
                <p className='font-normal'>{elem.Notes}</p>
              </div>
            })}
        </div> 
       </div>
      </form>
    </div>
  )
}

export default App
