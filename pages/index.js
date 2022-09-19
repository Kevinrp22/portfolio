import { Box, Container, Stack, Typography } from "@mui/material";
import { SocialMedia } from "../components/SocialMedia";

export default function Home() {
  return (
    <Stack component={"main"} height="100vh" justifyContent={"center"}>
      <Container>
        <Box textAlign={"justify"}>
          <Typography paragraph fontWeight={"600"} color={"primary.200"}>Hola, mi nombre es</Typography>
          <Typography
            variant="h1"
            mb="0.5rem"
            fontWeight={800}
            sx={{ fontSize: { xs: "2.8rem", sm: "4rem" } }}
          >
            Kevin Puchaicela
          </Typography>
          <Typography
            variant="h2"
            mb="0.5rem"
            fontWeight={500}
            color={"primary.300"}
            fontSize={["1.5rem", "2rem"]}
          >
            Desarrollador web.
          </Typography>
          <Typography paragraph fontWeight={"600"}>
            Especializado en el desarrollo de{" "}
            <Box component="span" color={"primary.200"} fontWeight={"bold"}>
              Frontend y Backend
            </Box>{" "}
            para aplicaciones web. Me considero una persona{" "}
            <Box component="span" color={"primary.200"} fontWeight={"bold"}>
              autodidacta y proactiva
            </Box>
            , desarrollo proyectos personales por que me gusta estar en
            constante aprendizaje, además de enseñar lo aprendido.
          </Typography>
          <Typography paragraph fontWeight={"600"}>
            En mis tiempos libres{" "}
            <Box component="span" color={"primary.200"} fontWeight={"bold"}>
              aprendo diseño gráfico
            </Box>{" "}
            creando iconos para webs y{" "}
            <Box component="span" color={"primary.200"} fontWeight={"bold"}>
              consumiendo información sobre UIX y UI.
            </Box>
          </Typography>
          <Typography paragraph fontWeight={"bold"} color={"primary.200"}>
            Estoy especializado en el marco de trabajo de NextJS con ReactJs,
            Apollo Graphql, Prisma...
          </Typography>
        </Box>
        <SocialMedia />
      </Container>
    </Stack>
  );
}
