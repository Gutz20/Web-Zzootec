import { linksDrawerCat1, linksDrawerCat2 } from "@/helpers/data";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { useState } from "react";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiInboxLine,
  RiMailLine,
} from "react-icons/ri";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0),
  ...theme.mixins.toolbar,
}));

const DrawerNav = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer
        variant="permanent"
        open={open}
      >
        <DrawerHeader>
          <div>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <RiArrowRightSLine />
              ) : (
                <RiArrowLeftSLine />
              )}
            </IconButton>
          </div>
        </DrawerHeader>
        <Divider />
        <List>
          {linksDrawerCat1.map((text, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{ display: "block" }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <RiInboxLine /> : <RiMailLine />}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  // sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {linksDrawerCat2.map((text, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{ display: "block" }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <RiInboxLine /> : <RiMailLine />}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  // sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default DrawerNav;
