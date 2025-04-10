import App from "../App"

const ItemListContainer = (props) => {
    return(
        <div>
            <h1 className={props.ItemListContainerApp}>{props.greeting}</h1>
        </div>
    )
}

export default ItemListContainer