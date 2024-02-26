import React from 'react';
import { InputBase, IconButton, Paper, dividerClasses } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
function SearchComponent() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Paper component="form" style={{ display: 'flex', alignItems: 'center', width: '100%', padding: '2px 4px', margin: '0 auto', border: '1px solid #2484BF' }}>
                <IconButton type="submit" aria-label="search" style={{ color: '#2484BF', padding: '10px' }}>
                    <SearchIcon />
                </IconButton>
                <InputBase
                    placeholder="Search"
                    style={{ marginLeft: '10px', flex: 1 }}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Paper>
        </div>
    )
}
export default SearchComponent;
