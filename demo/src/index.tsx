import React from 'react'
import { render } from 'react-dom'

import Component from '../../src/'

class Demo extends React.Component {
    render() {
        return <Component />
    }
}

render(<Demo />, document.querySelector('#demo'))
