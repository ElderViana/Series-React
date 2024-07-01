import ItemFilme from "./ItemFilme";

const CatalagoItens = ({titulo, emocoes}) => {
    return (
        <>
            <h1 className='sub-title'>{titulo}</h1>
            <div className='section-itens'>
                {
                    emocoes.map((emocao) => 
                        <ItemFilme titulo={emocao.nome} imagem={emocao.imagem} iconSolid={emocao.iconSolid} iconRegular={emocao.iconRegular}/>
                    )
                }
            </div>
        </>
    )
}

export default CatalagoItens;