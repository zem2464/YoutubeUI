import React, { memo, useState } from "react";
import { IMore } from "../../Icons/Icons";
import {
  ChannalName,
  MoreBtn,
  UserProfile,
  UserProfileImageContiner,
  VideoCardContiner,
  VideoContentContainer,
  VideoDesc,
  VideoMetaData,
  VideoThumnail,
  VideoTitle,
  VideoTitleContiner
} from "./VideoCard.style";
import { View } from "react-native";

export const VideoCard = memo(({ item, key }) => {
  const [isHover, _hover] = useState(false);
  console.log(key);
  return (
    <View
      style={{
        zIndex: isHover ? 2 : -1,
        width: "100%",
        height: "100%",
        transform: [{ scale: isHover ? 1.2 : 1 }]
        // position: isHover ? "absolute" : "relative"
      }}
      key={key}
    >
      <VideoCardContiner
        isHover={isHover}
        onMouseEnter={() => _hover(1)}
        onMouseLeave={() => _hover(0)}
        // style={isHover ? { maxWidth: 450, maxHeight: 400 } : {}}
      >
        <VideoThumnail
          source={{
            uri: item?.thumbnails?.medium?.url
          }}
          resizeMode={"contain"}
          // height={isHover ? 250 : 200}
        />
        <VideoContentContainer>
          <UserProfileImageContiner>
            <UserProfile
              source={{
                uri: item?.thumbnails?.medium?.url
              }}
            />
          </UserProfileImageContiner>
          <VideoMetaData>
            <VideoTitleContiner>
              <VideoTitle
                numberOfLines={2}
                ellipsizeMode="tail"
                title={item?.title}
              >
                {item?.title}
              </VideoTitle>
              <MoreBtn>
                <IMore style={{ height: 30 }} />
              </MoreBtn>
            </VideoTitleContiner>
            <VideoDesc>
              <ChannalName title={item?.channelTitle}>
                {item?.channelTitle}
              </ChannalName>
            </VideoDesc>
          </VideoMetaData>
        </VideoContentContainer>
      </VideoCardContiner>
    </View>
  );
});
