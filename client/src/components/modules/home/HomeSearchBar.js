import { useRef } from 'react';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

function HomeSearchBar() {
  const searchRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchRef.current.value) return;
    console.log(`search => ${searchRef.current.value}`);
    searchRef.current.value = '';
  }

  return (
    <Paper component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: { xs: '80%', md: '50%' } }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase inputRef={searchRef}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search by Product Name"
        inputProps={{ 'aria-label': 'search by product name' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default HomeSearchBar;