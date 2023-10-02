'use client'
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { AccountCircle, Brightness4, ExitToApp, Notifications } from '@mui/icons-material';
<<<<<<< HEAD
import { Hidden } from '@mui/material';
=======
>>>>>>> 774bc20 (parte de notificacao)


function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static"
    sx={{
      backgroundColor: 'white'}}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 5,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'text.primary',
              textDecoration: 'none',
            }}
          >
           <img src="/assets/organiza.png" alt="Logo-do-site" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
<<<<<<< HEAD
            <Hidden mdUp>
=======
>>>>>>> 774bc20 (parte de notificacao)
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="text.primary"
            >
              <MenuIcon />
            </IconButton>
<<<<<<< HEAD
            </Hidden>
=======
>>>>>>> 774bc20 (parte de notificacao)
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Box class='p-2'>
                <Button href='/principal' style={{ display: 'block', color: 'black' }}>
                  Painel Principal
                </Button>

                <Button href='/orcamento' style={{ display: 'block', color: 'black'  }}>
                  Orçamento
                </Button>

                <Button href='/receitas-e-despesas' style={{ display: 'block', color: 'black'  }}>
                  Receitas e Despesas
                </Button>

                <Button href='/investimentos' style={{ display: 'block', color: 'black'  }}>
                  Inventimentos
                </Button>
              </Box>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'text.primary',
              textDecoration: 'none',
            }}
          >
            <img src="/assets/organiza.png" alt="Logo-do-site" />
          </Typography>
<<<<<<< HEAD
            <Hidden smDown>
          <Box className="flex justify-jusify space-x-4" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
=======

          <Box className="flex justify-between space-x-4" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
>>>>>>> 774bc20 (parte de notificacao)
          
          <Button 
          className="hover:bg-green-700 px-4 py-2 font-semibold  text-black rounded"
          href="/principal"
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: 'text.primary', display: 'block' }}
          >
            Painel Principal
          </Button>

          <Button 
          className="hover:bg-green-700 px-4 py-2 font-semibold text-black rounded"
          href="/orcamento"
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: 'text.primary', display: 'block' }}
          >
            Orçamento
          </Button>

          <Button 
          className="hover:bg-green-700 px-4 py-2 font-semibold  text-black rounded"
          href="/receitas-e-despesas"
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: 'text.primary', display: 'block' }}
          >
            Receitas e Despesas
          </Button>

          <Button className="hover:bg-green-700 px-4 py-2 font-semibold  text-black rounded"
          href="/investimentos"
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: 'text.primary', display: 'block' }}
          >
            Investimentos
          </Button>
        
        </Box>
<<<<<<< HEAD
        </Hidden>
=======
>>>>>>> 774bc20 (parte de notificacao)

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Abrir configurações">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Box>
                <Button style={{ display: 'flex', color: 'black' }}>
                  <IconButton>
                    <AccountCircle />
                  </IconButton>
                  Seu perfil
                </Button>

                <Button href='/notificacao' style={{ display: 'flex', alignItems: 'center', color: 'black' }}>
                  <IconButton>
                    <Notifications /> 
                  </IconButton>
                  Configuração de notificação
                </Button>

                <Button style={{ display: 'flex', alignItems: 'center', color: 'black' }}>
                  <IconButton>
                    <Brightness4 />
                  </IconButton>
                  Modo escuro
                </Button>

                <Button href="/" style={{ display: 'flex', color: 'black' }}>
                  <IconButton>
                    <ExitToApp /> 
                  </IconButton>
                  Sair
                </Button>
                </Box>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;