import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MultipleCustomHooks } from './components/MultipleCustomHooks'
import { FocusScreen } from './components/FocusScreen'
import { Memorize } from './components/Memorize'


createRoot(document.getElementById('root')).render(
    //<MultipleCustomHooks />
    // <FocusScreen />
    <Memorize />    
)
