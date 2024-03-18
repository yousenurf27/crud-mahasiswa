import { useState } from "react"
import './App.css'

const mahasiswa = [
  {
    id: 1,
    name: "Jhon",
    jurusan: "Pertanian"
  }
]

function App() {
  const [data, setData] = useState(mahasiswa)
  const [id, setId] = useState()
  const [name, setName] = useState()
  const [jurusan, setJurusan] = useState()

  const onSubmit = (e) => {
    e.preventDefault()
    
    if (name === '' && jurusan === '') {
      alert('Inputan harus di isi')
      return
    }

    if (id) {
      const newData = data.filter((item) => item.id ===  id ? (item.name = name, item.jurusan = jurusan) : item)
      setData(newData)
      setId('')
    } else {
      setData((prev) => [...prev, {id: data.length + 1, name, jurusan}])
    }
    
    setName('')
    setJurusan('')
  }

  const deleteHandler = (id) => {
    const newData = data.filter((item) => item.id !== id)
    setData(newData)
  }

  const editHandler = (id) => {
    setId(id)
    const user = data.filter((item) => item.id === id ? item : null)
    setName(user[0].name)
    setJurusan(user[0].jurusan)
  }

  return (
    <>
      <h1 className="mb-2 font-semibold text-lg">
        Tabe mahasiswa
      </h1>
      <div className="mb-3 flex justify-center">
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <tr>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Id</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Jurusan</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map(({id, name, jurusan}) => (
                      <tr key={id} className="odd:bg-white even:bg-gray-100 dark:odd:bg-slate-900 dark:even:bg-slate-800">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{jurusan}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                          <button type="button" className="inline-flex items-center mr-3 gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" onClick={() => editHandler(id)}
                          >Edit</button>
                          <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:hover:text-red-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" onClick={() => deleteHandler(id)}
                          >Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form className="w-1/2 mx-auto rounded px-8 pt-6 pb-8 mb-4 text-left">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Jurusan
          </label>
          <input value={jurusan} onChange={(e) => setJurusan(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
        </div>
        <div className="flex items-center justify-between">
          <button onClick={(e) => onSubmit(e)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Submit
          </button>
        </div>
      </form>
    </>
  )
}

export default App
