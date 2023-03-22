import React from "react";
import PlantDetails from "../PlantDetails/PlantDetails";
import { Grid } from "@mui/material";
import axios from "axios";

const containerStyle = {
  width: "100%",

  margin: "auto",
  display: "flex",
  flexDirection: "column",
};

const center = {
  lat: 0,
  lng: 0,
};

const mockData = [
  {
    id: 1,
    user: {
      userName: "Brandy",
      userAvatar: "https://source.unsplash.com/random/100x100",
    },
    plant: {
      commonName: "Monstera Deliciosa",
      scientificName: "Plant Scientific Name",
      description: "Laboris ",
      imageUrl: "https://source.unsplash.com/random/1080x1080",
      timePosted: "2 hours ago",
    },
  },
  {
    id: 2,
    user: {
      userName: "John",
      userAvatar: "https://source.unsplash.com/random/100x100?sig=1",
    },
    plant: {
      commonName: "Snake Plant",
      scientificName: "Sansevieria trifasciata",
      description:
        "Ut et incididunt exercitation ullamco enim eiusmod reprehenderit ex exercitation duis.",
      imageUrl: "https://source.unsplash.com/random/1080x1080?sig=2",
      timePosted: "4 hours ago",
    },
  },
  {
    id: 3,
    user: {
      userName: "Brandy",
      userAvatar: "https://source.unsplash.com/random/100x100?sig=3",
    },
    plant: {
      commonName: "Monstera Deliciosa",
      scientificName: "Plant Scientific Name",
      description:
        "Laboris incididunt id ipsum aute duis.Id id adipisicing sint eu ea dolor qui nisi laborum nisi pariatur id excepteur dolor.",
      imageUrl: "https://source.unsplash.com/random/1080x1080?sig=4",
      timePosted: "2 hours ago",
    },
  },
  {
    id: 4,
    user: {
      userName: "Brandy",
      userAvatar: "https://source.unsplash.com/random/100x100?sig=5",
    },
    plant: {
      commonName: "Monstera Deliciosa",
      scientificName: "Plant Scientific Name",
      description:
        "Laboris incididunt id ipsum aute duis.Id id adipisicing sint eu ea dolor qui nisi laborum nisi pariatur id excepteur dolor.",
      imageUrl: "https://source.unsplash.com/random/1080x1080?sig=6",
      timePosted: "2 hours ago",
    },
  },
  {
    id: 5,
    user: {
      userName: "Brandy",
      userAvatar: "https://source.unsplash.com/random/100x100",
    },
    plant: {
      commonName: "Monstera Deliciosa",
      scientificName: "Plant Scientific Name",
      description:
        "Laboris incididunt id ipsum aute duis.Id id adipisicing sint eu ea dolor qui nisi laborum nisi pariatur id excepteur dolor.",
      imageUrl: "https://source.unsplash.com/random/1080x1080",
      timePosted: "2 hours ago",
    },
  },
];

const postData = [];
const getPosts = function() {
  axios.get('http://localhost:8080/posts')
  .then((posts) => {
    posts.data.map((data, index) => {
      postData.push({
        id: index + 1,
        user: {
          userName: 'Brandy',
          userAvatar: 'https://source.unsplash.com/random/100x100'
        },
        plant: {
          commonName: data.title,
          scientificName: data.plantName,
          description: data.description,
          imageUrl: data.image,
          timePosted: "2 hours ago"
        }
      })
    })
  })
}
getPosts()

const ListView = () => {
  return (
    <Grid container spacing={2} sx={{ width: "100%", height: "100%" }}>
      {postData.map((data) => (
        <Grid item xs={12} key={data.id}>
          <PlantDetails user={data.user} plant={data.plant} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListView;
