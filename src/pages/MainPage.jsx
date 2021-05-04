import React from 'react'
import {useHistory} from 'react-router-dom'
import CytiList from './../components/CytiList'
import AppFrame from './../components/AppFrame'
import Paper from '@material-ui/core/Paper'

const cities = [
    {  city:"Buenos Aires", country:"Argentina"},
    {  city:"Bogota", country:"Colombia"},
    {  city:"Madrid", country:"España"},
    {  city:"CDMEX", country:"Mexico"},
]

const MainPage = () => {
    const history = useHistory()

    const onClickHandler = () => {
        //permite alterar la URL 
      history.push("/city")
    }
    return (
        <AppFrame>  
            <Paper elevation={3}>
              <CytiList cities={cities} onClickCity={onClickHandler}/>
            </Paper>           
        </AppFrame>
    )
}


export default MainPage
