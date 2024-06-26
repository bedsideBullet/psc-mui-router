import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { useTheme } from '@emotion/react';
import { AppContext } from '../Providers/AppProvider';
import { useContext} from 'react';





const ActiveNote = () => {
    const {activeNote, allGears} = useContext(AppContext)
    // const theme = useTheme();
    
    const relevantGear = allGears.find(gear => gear.id === activeNote?.gearId)

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          {activeNote?.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
         {activeNote?.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{relevantGear ? relevantGear.partNumber : 'No Gear Found'}</Button>
      </CardActions>
    </Card>
  );
}
export default ActiveNote