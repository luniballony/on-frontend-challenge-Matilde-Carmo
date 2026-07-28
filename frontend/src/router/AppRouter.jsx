import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Start from '../screens/Start'
import NotFound from '../screens/NotFound';

function AppRouter () {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Start />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )

}

export default AppRouter