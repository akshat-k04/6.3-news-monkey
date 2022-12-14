import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles =
   [
    {
      "source": {
        "id": "talksport",
        "name": "TalkSport"
      },
      "author": "Jackson Cole",
      "title": "Freddie Flintoff airlifted to hospital following car crash while filming Top Gear, England cricket...",
       "description":"gggg ggggg gggg gg gg gggg ggg gg ggg gg g ggg gg gg gg gg ggg gggg gggg ggg ggg ggg ggg ggggg",
      "url": "https://talksport.com/sport/cricket/1276705/freddie-flintoff-airlifted-hospital-car-crash-top-gear/",
      "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2015/10/ff.jpg?strip=all&quality=100&w=700&h=420&crop=1",
      "publishedAt": "2022-12-13T22:16:01Z",
      "content": "Freddie Flintoff was airlifted to hospital following a car crash during filming for Top Gear in Surrey on Monday. \r\nThe England cricket legend was shooting an episode of the BBC series at Dunsfold Pa… [+1980 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]

  constructor() {
    super();
    console.log("hello , i am constructor");
    this.state = {
      article:this.articles,
      loading:false 
    }
  }
  async componentDidMount(){
    console.log("i am componentdidmount") ;
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=4a426e33536d44b4b61cb978025d7e87";
    let data =await fetch(url);
    let parsedata = await data.json();
    this.setState({article:parsedata.articles})
  }
  render() {
    console.log("i am render") ;
    return (
      <div className='container my-3'>
        <h2>news monkey-top headlines</h2>
        <div className='row'>
          {this.state.article.map((element)=>{
            return <div className='col-md-4 my-3' key={element.url}>
              <NewsItem newsurl={element.url} title={element.title} description={element.description} imageurl={element.urlToImage}  />
            </div>
          })}
          
        </div>
        
        

      </div>
    )
  }
}

export default News