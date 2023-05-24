import { Link, Typography, Grid, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import SkillCard from '../components/skill-card';
import { blueGrey } from '@mui/material/colors';

const skills = [
  {
    title: "Languages & Databases",
    skills: ["JavaScript", "TypeScript", "SQL", "NoSQL", "GraphQL"],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "Node JS",
      "Express JS",
      "React",
      "Angular",
      "Vue.js",
      "Apollo",
      "Sequelize",
      "Mongoose",
      "Bootstrap",
      "Material UI",
      "Tailwind",
    ],
  },
  {
    title: "Tools of the Trade",
    skills: [
      "Insomnia",
      "Jest",
      "Mocha",
      "Adobe CC",
      "Affinity Designer",
      "Figma",
      "Adobe XD",
    ],
  },
];

const CustomLink = styled((props) => (
    <Link
        {...props}
    />
))(({ theme }) => ({
    color: theme.palette.success.main,
    '&:hover, &.Mui-focusVisible': {
        color: theme.palette.warning.dark
    }
}));

const Resume = () => {
    return (
      <>
        <Typography
          component={"h2"}
          variant={"h2"}
          style={{ textAlign: "center" }}
          gutterBottom
        >
          Skills
        </Typography>
        <Grid container spacing={3} mb={5}>
          {skills.map((info) => (
            <Grid item xs={12} md={4} key={info.title}>
              <SkillCard cardInfo={info} />
            </Grid>
          ))}
        </Grid>
        <Container style={{ textAlign: "center", color:blueGrey}}>
          <CustomLink
            component={"a"}
            variant={"h5"}
            href={"resume.pdf"}
            download={"ralph-resume.pdf"}
            underline={"none"}
            onClick={() => {}}
          >
            Download My Resume
          </CustomLink>
        </Container>
      </>
    );
}

export default Resume;
