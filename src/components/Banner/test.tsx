import { render, screen } from '@testing-library/react'

import Banner from '.'

const props = {
  img: '/img/banner.png',
  title: 'The HR Platform',
  subtitle: '<p>Certification Program  <strong>(HRCI - PHR/SPHR)</strong>',
  buttonLabel: 'Buy now',
  buttonLink: '/hr/defy-death'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = render(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /Defy death/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  // it('should render a Ribbon', () => {
  //   render(
  //     <Banner
  //       {...props}
  //       ribbon="My Ribbon"
  //       ribbonSize="small"
  //       ribbonColor="secondary"
  //     />
  //   )

  //   const ribbon = screen.getByText(/My Ribbon/i)

  //   expect(ribbon).toBeInTheDocument()
  //   expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
  //   expect(ribbon).toHaveStyle({
  //     height: '2.6rem',
  //     fontSize: '1.2rem'
  //   })
  // })
})
