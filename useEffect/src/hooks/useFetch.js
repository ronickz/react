import { useState,useEffect } from "react"


const localCache = {}


const getFetch = async(url,setState) => {
    if(localCache[url]){
        console.log('Usando cache')
        setState({
            data: localCache[url],
            isLoading:false,
            hasError:false,
            error:null
        })

        return
    }

    setLoadingState(setState)

    const resp = await fetch(url)
    await new Promise(resolve => setTimeout(resolve,500))

    if(!resp.ok){
        setState({
            data:null,
            isLoading:false,
            hasError:true,
            error:{
                code:resp.status,
                message: resp.statusText
            }
        })
        return;
    }

    const data = await resp.json();

    setState({
        data:data,
        isLoading:false,
        hasError:true,
        error:null
    })
    
    localCache[url] = data;
}


const setLoadingState = (setState) => {
    setState({
        data:null,
        isLoading: true,
        hasError:false,
        error:null  
    })
}


export const useFetch = (url) => {
    const [state,setState] = useState({
        data:null,
        isLoading: true,
        hasError:false,
        error:null
    });

    useEffect(() => {
        getFetch(url,setState); 

    },[url])

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}