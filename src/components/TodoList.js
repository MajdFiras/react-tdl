import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


// Icons 
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';




export default function TodoList() {
  return (
  
      <Container maxWidth="sm">
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography  variant='h2' >
                    مهامي
                </Typography>
                <Divider  />
            {/* Toggle Buttons => Filteration */}
            <ToggleButtonGroup
            style={{ direction: 'ltr', marginTop:"30px"}}
            // value={alignment}
            exclusive
            // onChange={handleAlignment}
            aria-label="text alignment"
            >
               
                <ToggleButton value="right">
                    غير المنجز
                </ToggleButton>
                <ToggleButton value="center">
                    المنجز
                </ToggleButton>
                <ToggleButton value="left" >
                    الكل
                </ToggleButton>
            </ToggleButtonGroup>
  
               
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
       </Card>
      </Container>
   
  );
}