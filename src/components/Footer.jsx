'use client'
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.common.black
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <img 
            src="/assets/organiza.png" 
            alt="Logo-do-site" 
            className="w-1/3"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" style={{ color: 'white' }} gutterBottom>
              Contato
            </Typography>
            <Typography variant="body2" style={{ color: 'white' }}>
              Email: info@example.com
            </Typography>
            <Typography variant="body2" style={{ color: 'white' }}>
              Telefone: +81 98765-4321
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" style={{ color: 'white' }} gutterBottom>
              Nos siga
            </Typography>
            <Link href="https://www.facebook.com/" style={{ color: 'white' }}>
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              style={{ color: 'white' }}
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" style={{ color: 'white' }}>
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" style={{ color: 'white' }} align="center">
            {"Alguns direitos reservados © "}
            <Link color="inherit">
              Organiza
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}