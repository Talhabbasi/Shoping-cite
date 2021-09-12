
import './Menu-item.scss'
const MenuItem=({title,imageURL,size})=>{
    return(
        <div
        className={`${size} menu-item`}>
            <div className="bg"   
             style={{
            background:`url(${imageURL})`
        }}/>
                <div className="content">
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">
Show Now
                    </span>
                </div>
            </div>
    )

}
export default MenuItem;