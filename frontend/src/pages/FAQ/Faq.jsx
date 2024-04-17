import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How often should I exercise?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This comes down to your goals, lifestyle and current fitness level.
            For those who are new or returning to exercise, aiming for two to
            three workouts each week is a great place to start to build your
            fitness while giving your body time to recover. Once that’s feeling
            easier, you can add more workouts to your weekly schedule! When your
            fitness increases, you might be doing between four and six workouts
            each week. In addition to your workouts, adding in gentle movement
            like walking, cycling or yoga can help to build your fitness and
            stay active throughout the week.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What time of day is best to work out?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The best time to work out is whenever you can fit it in! Have a look
            at your schedule and figure out what time of day is best for you. If
            your routine is flexible, think about when you feel most energetic,
            or when you would prefer to exercise. Morning workouts can be an
            energising way to start the day for some, while others prefer
            working out in the afternoons or evenings. Consistency is what
            matters, so focus on working out when it works best for you, which
            will make it more enjoyable and easier to stick to!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How long should my workouts be?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Again, this depends on what works for your lifestyle. For adults,
            the World Health Organisation recommends at least 150-300 minutes of
            moderate-intensity aerobic physical activity, or at least 75-150
            minutes each week of vigorous-intensity aerobic physical activity.
            No matter where your starting point is, our range of Sweat programs
            help you to build consistency in your training, offering workouts as
            quick as 10 minute and longer workouts that will take you around 45
            minutes to complete. Remember, something is better than nothing!
            Even fitting in a daily walk can help you reach your fitness goals.
            If your diary doesn’t have many longer blocks of time available, you
            can exercise in shorter, more frequent bursts of 10 to 20 minutes.
            Take a look at the Express Workouts in the On Demand section of the
            Sweat app to get started. There are so many ways to make time for
            fitness and short workouts can be just as effective.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Do I need to warm up before my workouts?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You bet! We know it can be tempting to get straight into it,
            especially if you’re short on time, but a proper warm-up is really
            important. According to the Mayo Clinic, warming up and cooling down
            may help reduce your risk of injury and improve performance. A good
            warm-up prepares your body for activity, raises your body
            temperature and increases blood flow to your muscles. A simple
            warm-up can be five minutes of cardio or some dynamic stretching of
            the muscles you are about to use. Each workout in the Sweat app
            comes with optional warm-ups you can follow.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Should I do strength training, cardio or both?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We recommend a mixture of cardio and strength training. Alternating
            between the two is a good way to find balance. Why both and not just
            one? Because you want to reap the benefits of each! According to the
            American Cancer Society, two to three strength-based workouts each
            week can result in significant health benefits, such as increased
            muscle mass, stronger bones, boosted metabolism, better posture,
            balance and joint flexibility. Research shows it also can boost
            heart health and have a positive impact on your mental health.
            Regularly increasing your heart rate and blood flow by adding cardio
            into your routine can also promote heart, brain, skin and lung
            health, as well as improve your sleep and energy levels.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Faq;