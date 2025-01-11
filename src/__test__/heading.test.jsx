import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Heading from "../pages/detail/Heading"
import { Provider } from "react-redux"
import configureStore from "redux-mock-store"
import { thunk } from "redux-thunk"


const mockStore = configureStore([thunk])

it('store yükleme durumdayken ekrana loader basılır', () => {
    const store = mockStore({ isLaoding: true, error: null, data: null })
    render(
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Heading />
                </BrowserRouter>
            </Provider>
        </>
    )
})

it('store yükleme bittiğinde ekrana loader yoktur', () => { })

it('store veri geldiginde ekrana veriler basılır', () => { })