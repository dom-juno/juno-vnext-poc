import {
  Avatar,
  Container,
  CssBaseline,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { SafeArea } from "capacitor-plugin-safe-area";
import React from "react";
import { useEffect, useState } from "react";
import ResponsiveAppBottomBar from "./ResponsiveAppBottomBar";
import ResponsiveAppTopBar from "./ResponsiveAppTopBar";
export default function Home({ ...props }) {
  const { setToken } = props;
  const [appInsets, setAppInsets] = useState({ top: 0, bottom: 0 });

  useEffect(() => {
    const setupWithInsets = async function () {
      const insets = await SafeArea.getSafeAreaInsets();
      appInsets.top = insets.insets.top;
      appInsets.bottom = insets.insets.bottom;
      setAppInsets({ ...appInsets });
    };
    setupWithInsets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  SafeArea.getSafeAreaInsets().then(({ insets }) => {
    console.log(insets);
  });

  SafeArea.getStatusBarHeight().then(({ statusBarHeight }) => {
    console.log(statusBarHeight, "statusbarHeight");
  });

  /** TEST CODE */
  function refreshMessages(): MessageExample[] {
    const getRandomInt = (max: number) =>
      Math.floor(Math.random() * Math.floor(max));
    return Array.from(new Array(50)).map(
      () => messageExamples[getRandomInt(messageExamples.length)]
    );
  }
  const [value] = React.useState(0);
  const [messages, setMessages] = React.useState(() => refreshMessages());
  React.useEffect(() => {
    setMessages(refreshMessages());
  }, [value, setMessages]);
  /** END TEST CODE */

  return (
    <div style={{ marginTop: appInsets.top, marginBottom: appInsets.bottom }}>
      <ResponsiveAppTopBar setToken={setToken} />
      <Container sx={{ mb: 6 }}>
        <h1>Welcome!</h1>
        {/* TODO - PUT MORE COOL STUFF HERE */}

        {/* TEST CODE */}
        <CssBaseline />
        <List>
          {messages.map(({ primary, secondary, person }, index) => (
            <ListItem button key={index + person}>
              <ListItemAvatar>
                <Avatar alt="Profile Picture" src={person} />
              </ListItemAvatar>
              <ListItemText primary={primary} secondary={secondary} />
            </ListItem>
          ))}
        </List>
        {/* END TEST CODE */}
      </Container>
      <ResponsiveAppBottomBar />
    </div>
  );
}

/** TEST CODE */
interface MessageExample {
  primary: string;
  secondary: string;
  person: string;
}

const messageExamples: readonly MessageExample[] = [
  {
    primary: "Brunch this week?",
    secondary:
      "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: "/static/images/avatar/5.jpg",
  },
  {
    primary: "Birthday Gift",
    secondary: `Do you have a suggestion for a good present for John on his work
        anniversary. I am really confused & would love your thoughts on it.`,
    person: "/static/images/avatar/1.jpg",
  },
  {
    primary: "Recipe to try",
    secondary:
      "I am try out this new BBQ recipe, I think this might be amazing",
    person: "/static/images/avatar/2.jpg",
  },
  {
    primary: "Yes!",
    secondary: "I have the tickets to the ReactConf for this year.",
    person: "/static/images/avatar/3.jpg",
  },
  {
    primary: "Doctor's Appointment",
    secondary:
      "My appointment for the doctor was rescheduled for next Saturday.",
    person: "/static/images/avatar/4.jpg",
  },
  {
    primary: "Discussion",
    secondary: `Menus that are generated by the bottom app bar (such as a bottom
        navigation drawer or overflow menu) open as bottom sheets at a higher elevation
        than the bar.`,
    person: "/static/images/avatar/5.jpg",
  },
  {
    primary: "Summer BBQ",
    secondary: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
    person: "/static/images/avatar/1.jpg",
  },
];
/** END TEST CODE */