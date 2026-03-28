import { useState } from 'react';

const AddItem = ({onAddItem}) => {
    const [value, setValue] = useState('');

    const handleAdd = () => {
        onAddItem(value);
        setValue('');
    };

    return (
        <div className='item-add-form'>
            <div className="row justify-content-start">
                <div className="col-8">
                    <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="form-control" placeholder="новое время поиграть"/>
                </div>

                <div className="col-4">
                    <button
                     className='btn btn-outline-info'
                      onClick={handleAdd}>
                        добавить
                        </button>
                </div> 
            </div>    
        </div>    
    )   
}
    
export default AddItem;