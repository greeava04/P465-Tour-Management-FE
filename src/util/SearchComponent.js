import React from 'react';
import { InputBase, IconButton, Paper, dividerClasses } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
function SearchComponent() {
    return (
        <div style={{display: 'block', justifyContent: 'center', alignItems: 'center',  height: '100vh', width: '50%', margin: 'auto', marginbottom:'100px'}}>
            <Paper component="form" style={{ display: 'block', width: '100%', padding: '5px 10px', margin: '10px 10px',border: '1px solid #2484BF'  }}>
                <InputBase
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search' }}
                />
                <IconButton type="submit" aria-label="search" style={{color: '#2484BF', padding: '10px', justifyContent:'right' }}>
                    <SearchIcon />
                </IconButton>
            </Paper>
        </div>
    )
}
export default SearchComponent;
