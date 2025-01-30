# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
.navbar-left{
  display: flex;
  align-items: center;
  gap: 4rem;
}

.navbar-left h2{
  font-weight: bold;
  color: red;
}

.navbar-left ul{
  display: flex;
  list-style: none;
  gap: 3rem;
}

.navbar-left ul li{
  cursor: pointer;
}

.navbar-right{
  display: flex;
  align-items: center;
  gap: 2rem;
}
.icons{
  cursor: pointer;
}

.navbar-profile{
  display: flex;
  border: 1px solid white;
  border-radius: 25%;
}