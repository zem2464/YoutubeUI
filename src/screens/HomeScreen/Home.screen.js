import React, { useCallback, useEffect, useState } from "react";
import { VideoCard } from "../../components/VideoCard/VideoCard.component";
import { Container } from "./Home.style";
import { ScrollView, FlatList } from "react-native";

export const HomeScreen = () => {
  const [youTubeData, _youTubeData] = useState([]);
  const [currentPage, _currentPage] = useState(50);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = useCallback(async () => {
    let res = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=newsindian&key=AIzaSyAZOaM7kZVym7jVmYIO0N8U3PIXgqHKDYY" +
        (currentPage ? "&pageToken=" + currentPage : {})
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        _currentPage(json?.nextPageToken);
        return json.items;
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("res", res);
    if (res?.length) {
      _youTubeData([...youTubeData, ...res]);
    }
  }, [currentPage]);
  return (
    <ScrollView>
      <Container>
        <FlatList
          contentContainerStyle={{
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start"
          }}
          data={youTubeData}
          onEndReachedThreshold={0.2}
          onEndReached={() => {
            fetchData();
          }}
          renderItem={({ item, index }) => {
            return <VideoCard item={item?.snippet} index={item?.id?.videoId} />;
          }}
        />
      </Container>
    </ScrollView>
  );
};
