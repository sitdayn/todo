const AddItem = ({onAddItem}) => {
    return (
        <div className='item-add-form'>
            <div className="row justify-content-start">
                <div className="col-6">
                    <input className="form-control" placeholder="новое время поиграть"/>
                </div>

                <div className="col-4">
                    <button className='btn btn-outline-info' onClick={() => onAddItem('Шаблон')}>добавить</button>
                </div> 
            </div>    
        </div>    
    )   
}
    
export default AddItem;