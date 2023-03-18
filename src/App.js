import './App.css';
// import { Button } from '@mui/material';
import Button from '@mui/material/Button';
// import LoadingButton from '@mui/lab/LoadingButton';
import { useEffect, useState } from 'react';
// import Typography from '@mui/material/Typography';
// import Avatar from '@mui/material/Avatar';
// import img from './assets/mizanur-rahman.jpg';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Rating from '@mui/material/Rating';
// import TextField from '@mui/material/TextField';
// import Alert from '@mui/material/Alert';



function App() {

  const [submitting, setSubmitting] = useState(false);
  // const [rating, setRating] = useState(2);
  const isActive = false;


  // console.log(rating);

  useEffect(() => {
    const id = setTimeout(() => {
      setSubmitting(false);
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, [submitting]);

  return (
    <div className="App">
      <div
        style={{
          background: '#f7f7f7',
          width: '400px',
          height: '400px',
          borderRadius: '1rem',
          p: '2rem'
        }}
      >

        <Button
          variant='contained'
          sx={[
            {
              border: '1px solid red',
              bgcolor: 'steelblue',
              padding: 4,
              mr: 2,
              '&.MuiButton-root': {
                padding: '10rem'
              }
            },
            isActive && {
              bgcolor: 'yellow'
            },
            {
              // width: {
              //   xs: 100, // theme.breakpoints.up('xs')
              //   sm: 200, // theme.breakpoints.up('sm')
              //   md: 300, // theme.breakpoints.up('md')
              //   lg: 400, // theme.breakpoints.up('lg')
              //   xl: 500, // theme.breakpoints.up('xl')
              // },
              width: [
                100, 200, 300, 400, 500, 600
              ]
            }
          ]}
        >Delete</Button>
        <Button variant='contained'>Cancel</Button>



        {/* <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            justifyContent: "center",
            marginBottom: "10px"
          }}
        >

          <Avatar
            alt="Remy Sharp"
            src={img}
            sx={{
              height: "80px",
              width: "80px"
            }}
          />

          <Typography variant="h5" component="h1" gutterBottom noWrap>
            Mizanur Rahman
          </Typography>

        </div>



        <Button
          variant="contained"
          color="secondary"
          // disableRipple={true}
          fullWidth={true}
          sx={{ mb: 2 }}
        >Checkout</Button>

        <InstagramIcon color='primary' />
        <IconButton>
          <DeleteIcon />
        </IconButton>

        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
          sx={{
            color: "steelblue"
          }}
        />

        <TextField label="User Name" helperText="Invalid text" error="true" />

        <Alert severity="error">This is an error alert — check it out!</Alert> */}

        {/* <LoadingButton
          loading={submitting}
          // loadingIndicator="Loading…"
          variant="outlined"
          onClick={() => setSubmitting(true)}
        >
          Fetch data
        </LoadingButton> */}

      </div>
    </div>
  );
}

export default App;
