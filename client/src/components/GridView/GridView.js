import React, { useEffect, useState } from "react";
import PlantDetails from "../PlantDetails/PlantDetails";
import Grid from "@mui/material/Grid";
import { fetchUserData, fetchPostsData, fetchUser } from "../../dataFetcher";

const GridView = () => {
  let [usersData, setUsersData] = useState([]);
  let [currentUser, setCurrentUser] = useState();
  let [favourites, setFavourites] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const users = await fetchUserData();
      const usersWithPosts = await fetchPostsData(users);
      setUsersData(usersWithPosts);
    };
    fetchData();
    fetchUser().then((user) => {
      setFavourites(user.favourites);
    });
  }, []);

  return (
    <Grid container spacing={1} sx={{ width: "100%", height: "100%" }}>
      {usersData.length > 0 &&
        usersData.map((user) =>
          user.posts.map((post) => (
            <Grid item xs={12} sm={12} md={6} lg={4} key={post.id}>
              <PlantDetails
                user={{
                  userName: user.userName,
                  userAvatar: user.userAvatar,
                }}
                plant={post.plant}
                favourites={favourites ? favourites : []}
                id={post.id}
              />
            </Grid>
          ))
        )}
    </Grid>
  );
};

export default GridView;
