import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';

const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: {
          xs: 'none',
          sm: 'block',
        },
      }}
    >
      <Box position='sticky' top={80}>
        <Typography variant='h6' fontWeight='100' mb={2}>
          Online Friends
        </Typography>
        <AvatarGroup max={8}>
          <Avatar alt='Remy Sharp' src='//unsplash.it/400/400' />
          <Avatar alt='Travis Howard' src='//unsplash.it/401/401' />
          <Avatar alt='Cindy Baker' src='//unsplash.it/402/402' />
          <Avatar alt='Agnes Walker' src='//unsplash.it/400/400' />
          <Avatar alt='Trevor Henderson' src='//unsplash.it/400/400' />
          <Avatar alt='Agnes Walker' src='//unsplash.it/400/400' />
          <Avatar alt='Agnes Walker' src='//unsplash.it/400/400' />
          <Avatar alt='Agnes Walker' src='//unsplash.it/400/400' />
          <Avatar alt='Trevor Henderson' src='//unsplash.it/400/400' />
          <Avatar alt='Trevor Henderson' src='//unsplash.it/400/400' />
          <Avatar alt='Trevor Henderson' src='//unsplash.it/400/400' />
        </AvatarGroup>
        <Typography variant='h6' fontWeight='100' mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3}>
          <ImageListItem>
            <img src='//unsplash.it/405/405' alt='img' loading='lazy' />
          </ImageListItem>
          <ImageListItem>
            <img src='//unsplash.it/405/405' alt='img' loading='lazy' />
          </ImageListItem>
          <ImageListItem>
            <img src='//unsplash.it/405/405' alt='img' loading='lazy' />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight='100' mt={2} mb={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Remy Sharp' src='' />
            </ListItemAvatar>
            <ListItemText
              primary='Brunch this weekend?'
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Travis Howard' src='//unsplash.it/400/400' />
            </ListItemAvatar>
            <ListItemText
              primary='Summer BBQ'
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Cindy Baker' src='' />
            </ListItemAvatar>
            <ListItemText
              primary='Oui Oui'
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
