const AppHeader = ({done, active}) => {
  return(
    <div>
        <div className="row">
            <div className="col-6">
              <h1>Мой список дел</h1>
            </div>
              <div className="col-6 text-secondary">
                  <h1>{done} активно, {active} сделано</h1>
              </div>
        </div>
  </div>
 ) 
}

export default AppHeader;