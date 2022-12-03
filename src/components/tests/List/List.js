import ItemLista from './ItemLista'

function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <ItemLista marca="Ferrari" lancamento={1985} />
                <ItemLista marca="Volvo" lancamento={2000} />
                <ItemLista marca="Fiat" lancamento={2015} />
            </ul>
        </>
    )
}

export default List