import React, { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit =(e) => {
        e.preventDefault()
        if(!text){
            alert('you must fill in the form')
            return
        }
        onAdd({text, day, reminder})
        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label >task</label>
                <input value={text} onChange={e => setText(e.target.value)} type="text" placeholder='add task...' />
            </div>
            <div className="form-control">
                <label >day & time</label>
                <input value={day} onChange={e=> setDay(e.target.value)} type="text" placeholder='add day...' />
            </div>
            <div className="form-control form-control-check">
                <label >Set Reminder</label>
                <input checked={reminder} value={reminder} onChange={e=>setReminder(e.currentTarget.checked)} type="checkbox" />
            </div>

            <input type="submit" value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask