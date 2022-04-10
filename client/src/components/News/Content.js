import React from 'react';
import Card from '@mui/material/Card';
import { CardContent, CardHeader } from '@mui/material';

const Content = () => {
  const seeNews = () => {
    var req = new Request('https://newsapi.org/v2/top-headlines?country=us&apiKey=0ec9ed04b24240b9ab5ee00ff9db6777');
    fetch(req)
      .then(function(response) {
        console.log(response.json());
        const { items } = response.json();
        items.map((response) => ({
          title: response.title,
          author: response.author,
          description: response.description
        }))
          return (
              <Card>
                <CardHeader>{response.title}</CardHeader>
                <CardContent>{response.description}</CardContent>
              </Card>
          )
      })
    }
    seeNews();
  

}

export default Content