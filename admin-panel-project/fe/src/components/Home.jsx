import * as React from "react";
import { useState } from "react";
import { AppBar, Toolbar, Typography, Menu, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import CssBaseline from "@mui/material/CssBaseline";
import Users from "../pages/Users";
import Products from "../pages/Products";

import {
  Link as RouterLink,
  Route,
  Routes,
  MemoryRouter,
  useLocation,
} from "react-router-dom";
import UserAdd from "../pages/UserAdd";
import ProductAdd from "./ProductAdd";
import ProductEdit from "./ProductEdit";
import UserEdit from "./UserEdit";
import { orange } from "@mui/material/colors";
import UserRoleList from "../pages/UsersRoleList";
import UserRoleAdd from "../pages/UserRoleAdd";
import ProductCategoryList from "../pages/ProductCategoryList";
import ProductCategoryAdd from "../pages/ProductCategoryAdd";
import UserRoleUpdate from "../pages/UserRoleUpdate";
import ProductCategoryUpdate from "../pages/ProductCategoryUpdate";

const settings = ["Profile", "Account", "Dashboard", "Logout"];
const drawerWidth = 240;

export default function Home(props) {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [form, setForm] = useState({
    id: "",
    image: "",
    title: "",
    price: "",
    rating: "",
  });
  // form.first setForm({...form, firstname: e.target.name})

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //--------------------------

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const Link = React.forwardRef(function Link(itemProps, ref) {
    return <RouterLink ref={ref} {...itemProps} role={undefined} />;
  });

  function ListItemLink(props) {
    const { icon, primary, to } = props;

    return (
      <li>
        <ListItem button component={Link} to={to}>
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    );
  }

  const drawer = (
    <div>
      <Toolbar />
      {/* <Typography variant="h7">Management</Typography> */}

      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Management
          </ListSubheader>
        }
      >
        <Divider />
        <ListItemLink
          to="/"
          primary="Products"
          icon={<ShoppingBagOutlinedIcon />}
        />
        <ListItemLink
          to="/products/add"
          primary="Product Add"
          icon={<ShoppingBagOutlinedIcon />}
        />
        <Divider />
        <ListItemLink
          to="/product-category"
          primary="Product Category"
          icon={<ShoppingBagOutlinedIcon />}
        />
        <ListItemLink
          to="/product-category/add"
          primary="Product Category Add"
          icon={<ShoppingBagOutlinedIcon />}
        />
        <Divider />
        <ListItemLink
          to="/users"
          primary="Users"
          icon={<PermIdentityOutlinedIcon />}
        />
        <ListItemLink
          to="/users/add"
          primary="User Add"
          icon={<PermIdentityOutlinedIcon />}
        />
        <Divider />
        <ListItemLink
          to="/users-role"
          primary="Users Role"
          icon={<PermIdentityOutlinedIcon />}
        />
        <ListItemLink
          to="/users-role/add"
          primary="User Role Add"
          icon={<PermIdentityOutlinedIcon />}
        />
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  function Content() {
    const location = useLocation();
    return (
      <Typography variant="body2" sx={{ pb: 2 }} color="text.secondary">
        Admin Panel - {location.pathname}
      </Typography>
    );
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Panel
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}></Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="*" element={<Content />} />
        </Routes>
        <Routes>
          <Route
            path="/"
            element={<Products form={form} setForm={setForm} />}
          />
          <Route path="/products/add" element={<ProductAdd />} />
          <Route
            path="/products/edit/:id"
            element={<ProductEdit form={form} setForm={setForm} />}
          />
          <Route
            path="/users/edit/:id"
            element={<UserEdit form={form} setForm={setForm} />}
          />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<UserAdd />} />
          {/* --------------------------------------------------------- USER_ROLE------------- */}
          <Route
            path="/users-role/edit/:id"
            element={<UserRoleUpdate form={form} setForm={setForm} />}
          />
          <Route path="/users-role" element={<UserRoleList />} />
          <Route path="/users-role/add" element={<UserRoleAdd />} />
          {/* --------------------------------------------------------- CATEGORY_NAME------------- */}
          <Route
            path="/product-category/edit/:id"
            element={<ProductCategoryUpdate form={form} setForm={setForm} />}
          />
          <Route path="/product-category" element={<ProductCategoryList />} />
          <Route
            path="/product-category/add"
            element={<ProductCategoryAdd />}
          />
        </Routes>
      </Box>
    </Box>
  );
}
