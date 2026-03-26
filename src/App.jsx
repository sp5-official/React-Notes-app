import React, { useState } from 'react'

const App = () => {

const [title, setTitle] = useState('')
const [details, setDetails] = useState('')
const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    setTitle('')
    setDetails('')

    const CopyTask = [...task]
    CopyTask.push({title, details})
    setTask(CopyTask)
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white lg:flex'>

      {/* LEFT - FORM */}
      <form 
        onSubmit={submitHandler}
        className='flex p-8 lg:w-1/2 flex-col gap-5 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl m-5 shadow-xl'
      >

        <h1 className='text-4xl font-bold tracking-wide'>Add Notes ✍️</h1>

        <input
          type="text"
          placeholder="Enter Notes heading"
          className='px-4 py-3 w-full bg-white/10 border border-white/20 outline-none rounded-lg focus:ring-2 focus:ring-blue-500 transition'
          value={title}
          onChange={(e)=> setTitle(e.target.value)}  
        />

        <textarea
          className='px-4 py-3 border bg-white/10 border-white/20 w-full h-32 outline-none rounded-lg focus:ring-2 focus:ring-blue-500 transition resize-none'
          placeholder='Write Note here...'
          value={details}
          onChange={(e)=> setDetails(e.target.value)}  
        />

        <button className='w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-[1.02] active:scale-95 transition-all py-3 rounded-lg font-semibold shadow-lg'>
          Add Note
        </button>
       
      </form>

      {/* RIGHT - NOTES */}
      <div className='lg:w-1/2 p-8'>
        <h1 className='text-4xl font-bold tracking-wide'>Recent Notes 📌</h1>

        <div className='flex flex-wrap gap-6 mt-6 max-h-[80vh] overflow-auto pr-2'>

          {task.map((elem, idx) => {
            return (
              <div 
                key={idx} 
                className='w-64 min-h-[180px] flex flex-col justify-between bg-gray-200 text-black rounded-2xl p-4 shadow-lg transition-all duration-300'
              >

                <div>
                  <h3 className='font-bold text-lg break-words'>{elem.title}</h3>
                  <p className='mt-2 text-sm text-gray-700 break-words'>
                    {elem.details}
                  </p>
                </div>

                <button 
                  onClick={() => deleteNote(idx)}
                  className='mt-4 bg-red-500 hover:bg-red-600 active:scale-95 transition-all py-2 rounded-lg text-xs font-bold text-white shadow'
                >
                  Delete
                </button>

              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default App