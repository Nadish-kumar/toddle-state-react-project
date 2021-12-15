import"./Shopping.css"

export default function ShoppingCart (props){
    return <div className="col-lg-4">
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
        <h6 className="card-price text-center">${props.data.price}<span className="period">/month</span></h6>
        <hr />
        <ul className="fa-ul">

         {
           props.data.features.map(obj => {
             if(obj.enable === true){
              return <li><span className="fa-li"><i className="fas fa-check"></i></span>{obj.iStrong ? <strong>{obj.name}</strong> : obj.name}</li>
             }else{
              return <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{obj.name}</li>
             }
            
           })
           
          }        
        </ul>
        <div className="d-grid">
          <a href="#" className="btn btn-primary text-uppercase">Button</a>
        </div>
      </div>
    </div>
  </div>
        

}