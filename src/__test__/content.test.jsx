import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import configureStore from "redux-mock-store"
import { thunk } from "redux-thunk"
import Content from '../pages/detail/content'
import exampleCountryDetail from '../utils/constants'


const mockStore = configureStore([thunk])


test('store yükleme durumunda ekrana loader gelir', () => {
    const store = mockStore({ isloading: true, error: null, data: null })

    render(
        <Provider store={store}>
            <Content />
        </Provider>
    )

    screen.getAllByTestId('content-loader')
})


test('store hata durumundayken ekrana error gelir', () => {
    const store = mockStore({
        isLoading: false,
        error: 'Zaman Aşımı',
        data: null
    })

    render(
        <Provider store={store}>
            <Content />
        </Provider>
    )

    screen.getByTestId('error')
})

test('stora veri geldiği durumda ekrana nesnedeki ehr bir değer için kart bas', () => {

    const store = mockStore({
        isLoading: false,
        error: null,
        data: exampleCountryDetail
    })

    const arr = Object.entries(exampleCountryDetail).filter((i) => i[0] == 'flags')


    arr.forEach((item) => {
        screen.getByText(item[0])
        screen.getByText(item[1])
    })

})
