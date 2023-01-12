import styled from "styled-components/native";
import { View, Image, Text, TouchableOpacity } from "react-native";

export const VideoCardContiner = styled(TouchableOpacity)`
  width: 350px;
  height: 300px;
  padding: 10px;
  z-index: -1;
`;

export const VideoThumnail = styled(Image)`
  height: 200px;
  width: 100%;
  border-radius: 10px;
`;

export const VideoContentContainer = styled(View)`
  flex-direction: row;
  margin-top: 12px;
`;

export const UserProfileImageContiner = styled(View)`
  padding: 5px;
`;
export const UserProfile = styled(Image)`
  height: 36px;
  width: 36px;
  border-radius: 50%;
`;
export const VideoMetaData = styled(View)`
  flex: 1;
`;
export const VideoTitleContiner = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
`;

export const VideoTitle = styled(Text)`
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
`;

export const MoreBtn = styled(TouchableOpacity)`
  padding: 5px;
`;

export const VideoDesc = styled(TouchableOpacity)`
  flex: 1;
  padding-top: 5px;
`;
export const ChannalName = styled(Text)`
  color: #606060;
  font-size: 12px;
  font-weight: 500;
`;
