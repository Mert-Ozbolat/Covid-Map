import { fireEvent } from '@testing-library/react'
import Error from '../components/error'


const info = 'İnternetiniz çok yavaş'

it('prop olarak alınan hata mesajı ekrana basılıyor mu', () => {

    render(<Error info={info} />)

    screen.getByText(info)
})

it('prop olarak alınan butona tıklanıldığında çalışır', () => {

    const mockFn = jest.fn();

    render(<Error info={info} refetch={mockFn} />)

    fireEvent.click(screen.getByRole('button'))

    expect(mockFn).toHaveBeenCalled()

})