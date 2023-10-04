import BalancoGeral from "@/components/BalancoGeral";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import UltimasMovimentacoes from "@/components/UltimasMovimentacoes";
import LayoutAdmin from "@/components/login-cadastro/LayoutAdmin";
import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { OverviewDespesas } from "../../components/principal/overview/Overview-despesas";
import { OverviewGastosMesAtual } from "../../components/principal/overview/Overview-gastos-mes-atual";
import { OverviewReceitas } from "../../components/principal/overview/Overview-receitas";
import { OverviewSaldoGeral } from "../../components/principal/overview/Overview-saldo-geral";

export default async function Principal() {
  // const response = await fetch("http://localhost:3000/pessoas", { next: { revalidate: 10}}); //ISR
  const response = await fetch("http://localhost:3000/pessoas"); //SSR
  const data = await response.json();

  const receitaPorcentagem = (data[0].receitas / data[0].saldoGeral) * 100;

  const despesaPorcentagem = (data[0].despesas / data[0].saldoGeral) * 100;

  return (
    <LayoutAdmin>
      <Header />
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
            spacing={6}
            justifyContent="center"
            alignItems="flex-start" // Alinhe ao topo
          >
            {data.map((pessoa) => (
              <>
                <Grid key={pessoa.id} xs={12} sm={6} lg={3}>
                  <OverviewSaldoGeral
                    difference={12}
                    positive
                    sx={{ height: "100%" }}
                    value={`R$ ${pessoa.saldoGeral.toFixed(2)}`}
                  />
                </Grid>
                <Grid key={pessoa.id} xs={12} sm={6} lg={3}>
                  <OverviewReceitas
                    difference={16}
                    positive={false}
                    sx={{ height: "100%" }}
                    value={`R$ ${pessoa.receitas.toFixed(2)}`}
                  />
                </Grid>
                <Grid key={pessoa.id} xs={12} sm={6} lg={3}>
                  <OverviewDespesas
                    difference={12}
                    sx={{ height: "100%" }}
                    value={`R$ ${pessoa.despesas.toFixed(2)}`}
                  />
                </Grid>
              </>
            ))}
            <Grid xs={12} lg={5}>
              <Grid xs={12} lg={5}>
                <UltimasMovimentacoes />
              </Grid>
              <Grid xs={12} lg={4} sx={{ mt: 4 }}>
                <BalancoGeral />
              </Grid>
            </Grid>
            <Grid xs={12} md={6} lg={4}>
              <OverviewGastosMesAtual
                chartSeries={[receitaPorcentagem, despesaPorcentagem]}
                labels={["Receita", "Despesa"]}
                sx={{ height: "100%" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </LayoutAdmin>
  );
}
