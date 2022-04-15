import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "../News/NewsIcons";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Nullimage from "../../components/News/nullimage.png";
import { Row, Col } from "react-bootstrap";
import Auth from '../../utils/auth';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
const lightColor = 'rgba(255, 255, 255, 0.7)';

const API_DOMAIN = "https://newsapi.org/v2/top-headlines?country=";
const API_KEY = "0ec9ed04b24240b9ab5ee00ff9db6777";
const endpointPath = (country, category, page, pageSize) => `${API_DOMAIN}${country}&category=${category}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`;

const header = (category) => `News - Top ${category} Headlines`;
const Header = styled.h1`
    text-align: center;
    margin-top: 120px;
    color: #fff;
    margin-bottom: 20px;
`

const Container = styled.div`
    width: 93%;
    padding-right: (1.5rem, 0.75rem);
    padding-left: (1.5rem, 0.75rem);
    margin-right: auto;
    margin-left: auto;
`
const card = {
    marginTop: "10px",
    marginBottom: "50px"
}

const navs = [
  { nav: "Home", page: "/news" },
  { nav: "General", page: "/general" },
  { nav: "Business", page: "/business" },
  { nav: "Sports", page: "/sports" },
  { nav: "Entertainment", page: "/entertainment" },
  { nav: "Technology", page: "/technology" }
]

const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  const capitaLize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  document.title = `${capitaLize(props.category)} - News App`;

  const updatenews = async () => {
    try {
      console.log(endpointPath);
      const response = await axios.get(endpointPath(props.country, props.category, page, props.pageSize));
      console.log(response);
      setLoading(true);

      const parsedData = response.data;
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);

    }
    catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updatenews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const response = await axios.get(endpointPath(props.country, props.category, page + 1, props.pageSize));
    setPage(page + 1);
    const parsedData = response.data;
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
        <>
      {/* ******* settings for 3 icons on top right corner ******* */}
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={undefined}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />
            {/* ******* logout/home link ******* */}
            <Grid item>
              <Button
                href="/"
                onClick={Auth.logout}
                variant="body2"
                sx={{
                  textDecoration: 'none',
                  color: lightColor,
                  '&:hover': {
                    color: 'common.white',
                  },
                }}
                rel="noopener noreferrer"
              >
                logout
              </Button>
            </Grid>
          </Grid>
        </Toolbar>


            <AppBar component="div" color="primary" position="static" elevation={0} sx={{ zIndex: 0 }}>
                <Toolbar>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item xs>
                          <Typography color="inherit" variant="h5" component="h1">
                              JAM News
                          </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>


          </AppBar>

          <AppBar position="static" elevation={0} sx={{ zIndex: 0 }}>
            <Grid container>
              {navs.map((navs) =>
                <Toolbar sx={{ color: "inherit", }} className="mk" to={navs.page} key={uuidv4()}>
                  <Link className="mgk" color="inherit" href={navs.nav}>
                      {navs.nav}
                  </Link>
                </Toolbar>
              )}
            </Grid>
          </AppBar>
        {/* // Bar with tabs (Tasks, News, Weather) */}
          <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
            <Tabs value={2} textColor="inherit">
              <Tab href="/preview" label="Tasks" />
              <Tab href="/calculator "label="Calculator" />
              <Tab href="/news"label="News" />
            </Tabs>
          </AppBar>
    
    </>
      <Header>
        {header(capitaLize(props.category))}
      </Header>
      {loading}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
      >
        <Container>
          <Row>
            {articles.map((element) => {
              return (
                <Col
                  sm={12}
                  md={6}
                  lg={4}
                  xl={3}
                  style={card}
                  key={element.url}
                >
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    author={element.author}
                    date={element.publishedAt}
                    channel={element.source.name}
                    alt="Card image cap"
                    publishedAt={element.publishedAt}
                    imageUrl={
                      element.urlToImage === null
                        ? Nullimage
                        : element.urlToImage
                    }
                    urlNews={element.url}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </InfiniteScroll>
    </>
  );
}

News.defaultProps = {
  country: "us",
  pageSize: 7,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
