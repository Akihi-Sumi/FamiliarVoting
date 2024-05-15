import React from 'react'
import ElectionLayout from '@/Layouts/ElectionLayout'
import { useForm } from '@inertiajs/react'


const Candidates = () => {
    const {data, setData, post} =useForm({
        file: null
    })

    const handleFileChange= (e) => {
        const file = e.target.files[0];
        if(file){
            setData({ file: file });
        }
    }

    const handleImport = (e) =>{
        e.preventDefault()

        post(route('admin.candidates.import'), {
            onSuccess: () =>{
                console.log('成功!')
            }
        })
    }

    return (
        <div>
            <input id ='file' type='file' name ='file' onChange={handleFileChange} />
            <button type='submit' value={data.file} onClick={handleImport}>Upload</button>
        </div>
    )
}

Candidates.layout = page => <ElectionLayout title="立候補者" children={page} />
export default Candidates