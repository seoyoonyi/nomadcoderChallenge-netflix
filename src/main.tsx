import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { createGlobalStyle, ThemeProvider } from "styled-components";
//
import { theme } from "./utils/theme";
import { App } from "./App";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Tv } from "./pages/Tv";
import { Movie } from "./pages/Movie";
import { Search } from "./pages/Search";

const GlobalStyle = createGlobalStyle`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	body {
		font-family: "Pretendard", sans-serif;
		margin: 0;
		line-height: 1;
		color: white;
		background-color: black;
		overflow-x: hidden;
		overflow-y: auto;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	* {
		box-sizing: border-box;
	}
	input, button {
		font-family: "Pretendard", sans-serif;
	}
`;

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "tv/:tvId", element: <Tv /> },
        { path: "movie/:movieId", element: <Movie /> },
        { path: "search", element: <Search /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <HelmetProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
            <RouterProvider router={router} />
          </ThemeProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);
