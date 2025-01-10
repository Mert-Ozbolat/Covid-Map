import Item from "../pages/home/item"
import { render, screen } from '@testing-library/react'

test('Gönderilen proplarıdoğru şekilde kullan', () => {
    render(<Item color='text-blue-500' text='Toplam Vaka' value='300M' />)

    const icon = screen.getByTestId('icon')

    expect(icon).toHaveClass('text-blue-500')

    screen.getByText('Toplam Vaka')

    screen.getByText('300M')
})