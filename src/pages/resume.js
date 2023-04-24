import { Link, Typography, Grid, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import SkillCard from '../components/skill-card';

const skills = [
  {
    title: "Languages & Databases",
    skills: ["JavaScript ES6+", "TypeScript", "SQL", "NoSQL", "GraphQL"],
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
    color: theme.palette.secondary.main,
    '&:hover, &.Mui-focusVisible': {
        color: theme.palette.secondary.light
    }
}));

const Resume = () => {
    return (
        <>
            <Typography
                component={'h2'}
                variant={'h2'}
                style={{ textAlign: 'center' }}
                gutterBottom
            >
                Skills
            </Typography>
            <Grid container spacing={3} mb={5}>
                {skills.map(info => (
                    <Grid item xs={12} md={4} key={info.title}>
                        <SkillCard cardInfo={info} />
                    </Grid>
                ))}
            </Grid>
            <Container style={{ textAlign: 'center' }}>
                <CustomLink
                    component={'a'}
                    variant={'h5'}
                    href={''}
                    underline={'none'}
                >
                    Download My Resume
                </CustomLink>
            </Container>
        </>
    );
}

export default Resume;
