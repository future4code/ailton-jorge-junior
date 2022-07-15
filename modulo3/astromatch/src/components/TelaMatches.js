import { MiniCard } from './MiniCard';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { useEffect, useState } from "react";
import axios from "axios";



function TelaMatches() {

    const [ matchList, setMatchList ] = useState([])

    const getMatches = () => {
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jorge-junior/matches`)
        .then(response => {
            setMatchList(response.data.matches);
        })
        .catch(err => {
            console.log(err.message);
        })
    }

    useEffect(() => {
        getMatches()
     }
     , []);

    const onClickClear = () => {
        axios
        .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jorge-junior/clear`)
        .then(response => {
            getMatches()
        })
        .catch(err => {
            console.log(err.message)
        })
    }
    

    return (
      <div id="telamatches">
         

        {matchList.map((match) => {
            return <MiniCard match={match}/>
        })}
        
        <div id='footer'>
            <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={onClickClear}>APAGAR MATCHES</Button>
        </div>
        
      </div>
        
    );
}
  
  export default TelaMatches;