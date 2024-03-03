import AppBarComponent from "../util/AppBarComponent";
import React, { useEffect, useState, image } from 'react'
import EZTravelLogo from '../images/EZTravelLogo.png'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Itinerary() {
  const defaultTheme = createTheme();

  const [state, setState] = useState();
  const [user, setUser] = useState();
  const [list, setList] = useState();
  const [refresh, setRefresh] = useState();
  const [selected, setSelect] = useState();
  useEffect(() => {
    if (localStorage.token) {
      fetch("http://owenhar1.asuscomm.com:3000/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "token": localStorage.token
        })
      }).then((res) => res.json()).then((data) => {
        console.log(data)
        if (data.status == "error") {
          setUser(null)
          setState("no user")
          localStorage.token = ""
        } else {
          setUser(data)
          fetch("http://owenhar1.asuscomm.com:3000/api/getItineraryList", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "token": localStorage.token
            })
          }).then((res) => res.json()).then((data) => {
            console.log(data)
            if (data.error) {
              setList()
              setState("logged in")
            } else {
              setList(data)
              setState("logged in")
            }
          })

        }
      })

    } else {
      setUser(null);
      setState("no user");
    }
  }, [refresh]);

  const handleItemClick = async (event) => {
    const id = event.target.id
    if (id === "create") {
      setState("create")
    } else {
      fetch("http://owenhar1.asuscomm.com:3000/api/getItinerary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "token": localStorage.token,
          "id": id
        })
      }).then((res) => res.json()).then((data) => {
        console.log(data)
        if (data.error) {
          console.error("Failed to fetch item")
        } else {
          setSelect(data)
          setState("item")
        }
      })
    }
  }

  const Itinerary = () => {
    const item = selected

    const [places, setPlaces] = useState([])
    const [selectedLocation, setSelectedLocation] = useState(null);

    let tempPlaces = []

    useEffect(() => {
      const fetchPlaces = async () => {
        const placesArray = await Promise.all(
          item.destinations.map(async (dest) => {
            try {
              const response = await fetch(`http://10.1.1.111:3001/places/${dest}`);
              const data = await response.json();
              return data.place;
            } catch (error) {
              console.error(error);
              return null;
            }
          })
        );

        setPlaces(placesArray.filter((place) => place !== null));
      }

      fetchPlaces();
    }, [])
    const deleteItem = async (event) => {
      event.preventDefault();

      fetch("http://owenhar1.asuscomm.com:3000/api/deleteItinerary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "token": localStorage.token,
          "id": item._id
        })
      }).then((res) => res.json()).then((data) => {
        console.log(data)
        if (data.error) {
          console.error("Failed to delete item")
        } else {
          setSelect()
          setState()
          setRefresh(data)
        }
      })
    }
    const addActivity = async (event) => {
      event.preventDefault();
      const activity = document.getElementById("activity").value;

      fetch("http://owenhar1.asuscomm.com:3000/api/addActivity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "token": localStorage.token,
          "id": item._id,
          "activity": activity
        })
      }).then((res) => res.json()).then((data) => {
        console.log(data)
        if (data.error) {
          console.error("Failed to delete item")
        } else {
          setSelect(data)
        }
      })
    }

    const activities = item.activities.map((item) => {
      return (
        <li>{item}</li>
      )
    })



    const placesRender = places.map((place) => {
      return (
        <li onClick={(event) => {
          event.preventDefault();
          setSelectedLocation(place)
        }}>{place.name}</li>
      )
    })

    const handleClose = () => {
      setSelectedLocation(null);
    };

    // Here we will connect with the place db and get the places.
    return (
      <>
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="sm">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <ul>
                {activities}
              </ul>
              <div>
                <TextField
                  margin="normal"
                  id="activity"
                  label="New Activity"
                  name="activity"
                />
                <Button
                  type="add"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: '#2484BF' }}
                  style={{ backgroundColor: '#2484BF' }}
                  onClick={addActivity}
                >
                  Add New Item
                </Button>
              </div>
              <ul>
                {placesRender}
              </ul>
              <Button
                type="delete"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: '#2484BF' }}
                style={{ backgroundColor: '#2484BF' }}
                onClick={deleteItem}
              >
                Delete
              </Button>
              <Button
                type="home"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: '#2484BF' }}
                style={{ backgroundColor: '#2484BF' }}
                onClick={() => {
                  setSelect()
                  setState()
                  setRefresh(Math.random)
                }}
              >
                Back
              </Button>
            </Box>
            {selectedLocation && (
              <div className="modal-backdrop">
                <div className="modal">
                  <img src={selectedLocation.pictureURL || EZTravelLogo} alt="Location" style={{ display: "block", width: "300px" }} />
                  <h3>{selectedLocation.name}</h3>
                  <p>Price: ${selectedLocation.price}</p>
                  <p>Rating: {selectedLocation.rating}</p>
                  <p>Description: {selectedLocation.description}</p>
                  <button onClick={handleClose} className="close-btn">X</button>
                  <Button>Remove</Button>
                </div>
              </div>

            )}
            {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
          </Container>
        </ThemeProvider>
      </>
    )
  }

  const Create = () => {
    const handleSubmit = (event) => {
      event.preventDefault()
      const data = new FormData(event.currentTarget);
      console.log(data)
      let item = {
        title: data.get('title'),
        description: data.get('description'),
        startDate: new Date(document.getElementById("start").value),
        endDate: new Date(document.getElementById("end").value),
        token: localStorage.token
      };
      console.log(item)
      fetch("http://owenhar1.asuscomm.com:3000/api/makeItinerary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
      }).then((res) => res.json()).then((data) => {
        console.log(data)
        if (data.error) {
          console.error("Failed to create item")
        } else {
          setSelect()
          setState()
          setRefresh(data)
        }
      })
    }
    return (
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="description"
              label="Description"
              name="description"
            />
            <div>
              <label>Start Date: </label>
              <input id="start" type="date"></input>
            </div>
            <div>
              <label>End Date: </label>
              <input id="end" type="date"></input>
            </div>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#2484BF' }}
              style={{ backgroundColor: '#2484BF' }}
            >
              Create
            </Button>
            <Button
              type="home"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#2484BF' }}
              style={{ backgroundColor: '#2484BF' }}
              onClick={() => {
                setSelect()
                setState()
                setRefresh(Math.random)
              }}
            >
              Back
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    )
  }


  const List = (props) => {
    const items = list.map((item) => {
      return (
        <Button onClick={handleItemClick}
          type="button"
          fullWidth
          variant="contained"
          key={item._id}
          id={item._id}
          sx={{ mt: 3, mb: 2 }}
        >
          {item.title}
        </Button>
      )
    })
    return (
      <div>
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h2>Itineraries</h2>
              {items}
              <Button onClick={handleItemClick}
                type="create"
                fullWidth
                variant="contained"
                key="create"
                id="create"
                sx={{ mt: 3, mb: 2 }}
              >
                Create New Itinerary
              </Button>
            </Box>
            {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
          </Container>
        </ThemeProvider>
      </div>
    )
  }

  const Starting = () => {
    return (
      <div>

      </div>
    )
  }

  const Login = () => {
    return (
      <div>
        <h1>Itinerary</h1>
        <h3>Please log in</h3>
      </div>
    )
  }

  let render = <Starting></Starting>;
  if (state === "no user") render = <Login></Login>;
  if (state === "logged in") render = <List></List>
  if (state === "item") render = <Itinerary></Itinerary>
  if (state === "create") render = <Create></Create>



  return (
    <div>
      <AppBarComponent />
      {render}
    </div>
  );
}

export default Itinerary;
