"use client";
import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { OverviewDespesas } from "../../components/principal/overview/overview-despesas";
import { OverviewGastosMesAtual } from "../../components/principal/overview/overview-gastos-mes-atual";
import { OverviewReceitas } from "../../components/principal/overview/overview-receitas";
import { OverviewSaldoGeral } from "../../components/principal/overview/overview-saldo-geral";

export default function Principal() {
  return (
    <>
      <Box
        className={{ background: "#9C9C9C" }}
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Grid xs={12} sm={6} lg={3}>
              <OverviewSaldoGeral
                difference={12}
                positive
                sx={{ height: "100%" }}
                value="R$ 9.000,00"
              />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewReceitas
                difference={16}
                positive={false}
                sx={{ height: "100%" }}
                value="R$ 4.000,00"
              />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewDespesas
                difference={12}
                sx={{ height: "100%" }}
                value={"R$ 2.700,00"}
              />
            </Grid>
            <Grid xs={12} lg={5}></Grid>
            <Grid xs={12} md={6} lg={4} sx={{ marginTop: 6 }}>
              <OverviewGastosMesAtual
                chartSeries={[67.5, 32.5]}
                labels={["Receita", "Despesa"]}
                sx={{ height: "100%" }}
              />
            </Grid>
            <Grid xs={12} md={6} lg={4}></Grid>
            <Grid xs={12} md={12} lg={8}></Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
