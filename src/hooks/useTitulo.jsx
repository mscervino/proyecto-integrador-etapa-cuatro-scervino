import { useEffect } from "react"


const useTitulo = ( textoTitulo = 'Sin título') => {

    useEffect(() => {
      document.title = `Integrador Etapa 3 - ${textoTitulo}`
    }, [])
    
}

export default useTitulo