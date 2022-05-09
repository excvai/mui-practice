import { Stack } from '@mui/material';
import Post from './Post';

const Feed = () => {
  return (
    <Stack spacing={4} flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Stack>
  );
};

export default Feed;
