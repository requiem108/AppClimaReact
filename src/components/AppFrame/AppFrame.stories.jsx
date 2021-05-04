import React, { PureComponent } from 'react'
import AppFrame from './AppFrame'
import {BrowserRouter as Router} from 'react-router-dom'

export default {
    title: "AppFrame",
    component: AppFrame
}

export const AppFrameExample = () => {
 return <Router>  
            <AppFrame>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti beatae quidem praesentium est harum libero expedita obcaecati laudantium error similique aliquam enim, minima placeat perspiciatis cumque quia nihil vel sint!
            </AppFrame>
        </Router>

}

