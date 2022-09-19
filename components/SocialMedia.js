import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton, Stack, useTheme } from "@mui/material";
const socialMedia = [
  {
    text: "/kevinpuchaicela",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/kevinpuchaicela/",
  },
  {
    text: "@kevinrp22",
    icon: <GitHubIcon />,
    link: "https://github.com/Kevinrp22",
  },
];

export const SocialMedia = () => {
  const theme = useTheme();
  return (
    <Stack direction="row" justifyContent={"center"}>
      {socialMedia.map((social) => {
        return (
          <>
            <IconButton
              sx={`& svg {
                  color:white;
                  font-size:3rem;
                  &:hover{
                    color:${theme.palette.primary[200]}
                  }
              }`}
            >
              {social.icon}
            </IconButton>
          </>
        );
      })}
    </Stack>
  );
};
