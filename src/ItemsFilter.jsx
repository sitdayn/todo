const ItemsFilter = () => {
    return(
        <div className="btn-group" role="group">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1"/>
            <label className="btn btn-outline-info" htmlFor="btnradio1">все</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio2"/>
            <label className="btn btn-outline-primary" htmlFor="btnradio2">актив</label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio3"/>
            <label className="btn btn-outline-success" htmlFor="btnradio3">сделано</label>
        </div>
    )
}

export default ItemsFilter;