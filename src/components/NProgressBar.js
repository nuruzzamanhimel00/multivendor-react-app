import {useEffect} from 'react'
import {  useLocation } from "react-router-dom";

//nprogress
import NProgress from "nprogress";

const NProgressBar = () =>{
    const location  = useLocation ();
    
    useEffect(() => {
        NProgress.done();
        return () => {
            NProgress.start();
        };
      }, [location ]);
}

export default NProgressBar;