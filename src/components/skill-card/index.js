import { Card, CardContent, Typography } from '@mui/material';

const SkillCard = ({ cardInfo }) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent sx={{ textAlign: 'center' }}>
                <Typography
                    component={'h3'}
                    variant={'h4'}
                    sx={{ color: 'primary.main' }}
                >
                    {cardInfo.title}
                </Typography>
                <Typography
                    component={'h4'}
                    variant={'subtitle1'}
                    sx={{ color: '#b1bdc8' }}
                >
                    {cardInfo.category}
                </Typography>
                {cardInfo.skills.map(skill => (
                    <Typography component={'p'} variant={'p'} key={skill}>
                        {skill}
                    </Typography>
                ))}
            </CardContent>
        </Card>
    );
}

export default SkillCard;
