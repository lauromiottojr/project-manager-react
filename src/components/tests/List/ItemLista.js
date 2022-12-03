import PropTypes from 'prop-types'

function ItemLista({ marca, lancamento }) {
    return (
        <>
            <li>{marca} - {lancamento}</li>
        </>
    )
}

ItemLista.defaultProps = {
    marca: "Marca ausente",
    lancamento: 0
}

ItemLista.propTypes = {
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number
}

export default ItemLista