import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Heading from "../pages/detail/Heading"
import { Provider } from "react-redux"
import configureStore from "redux-mock-store"
import { thunk } from "redux-thunk"
import exampleCountryDetail from '../utils/constants'


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
    // Ekrana loader basılıyor mu
    screen.getByTestId('header-loader')
})

it('store yükleme bittiğinde ekrana loader yoktur', () => {

    const store = mockStore({ isLaoding: false, error: null, data: null })

    render(
        <Provider store={store}>
            <BrowserRouter>
                <Heading />
            </BrowserRouter>
        </Provider>
    )

    // TODO
})

it('store veri geldiginde ekrana veriler basılır', () => {

    const store = mockStore({
        isLoading: false,
        error: null,
        data: exampleCountryDetail
    })

    render(
        <Provider store={store}>
            <BrowserRouter>
                <Heading />
            </BrowserRouter>
        </Provider>
    )

    screen.getByRole('heading', { name: exampleCountryDetail.country })

    const img = screen.getByAltText('Flag')

    expect(img).toHaveAttiribute('src', exampleCountryDetail.flags.png)
})