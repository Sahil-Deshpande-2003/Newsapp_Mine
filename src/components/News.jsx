import React, { Component } from 'react'
import propTypes from 'prop-types'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
export class News extends Component {
   
  static defaultProps = {
    country: 'in',
    pageSize: 5
  }

  static propTypes= {
    country: propTypes.string,
    pageSize : propTypes.number,
    category:propTypes.string,
  }

      constructor(){
        console.log("Inside News constructor")
        super();

        this.state = {

          // not this.state.articles here

          articles:[],
          loading:false,
          page:1,
          totalResults:0,
        }

        
      }

      handlePrevClick = async() => {
        this.setState({
          loading:true
        })

        // look at the sample response on news api website, it says category should come before apiKey in the url
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`

        let data = await fetch(url);
    
        let parsedData = await data.json();
    
        //
    
        this.setState({
          articles:parsedData.articles,
          page:this.state.page-1,
          loading:false,
        })
    
      }


      handleNextClick = async() => {
        this.setState({
          loading:true
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`

        let data = await fetch(url);
    
        let parsedData = await data.json();
    
        //
    
        this.setState({
          articles:parsedData.articles,
          page:this.state.page+1,
          loading:false,          
        })
    
      }

        
  componentDidMount = async() => {
    
    // we have hardcoded articles here, to fetch data dynamically from url use cdm
    // <News pageSize={5}  key="general" country="in" apiKey="524be655ed644951bdc2ae78c8711c0e" category="general" />}

    console.log("cdm")
    this.setState({
      loading:true
    })

    console.log("Inside cdm")

    console.log("category = " + `${this.props.category}`)
    console.log("country = " + `${this.props.country}`)
    console.log("apiKey = " + `${this.props.apiKey}`)
    console.log("pageSize = " + `${this.props.pageSize}`)


    console.log("cdm Over")

    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`

    let data = await fetch(url);
    console.log("Fetched data")
    
    let parsedData = await data.json();
    console.log("Parsed data")

  
    
    //
    
    this.setState({
      articles:parsedData.articles,
   
      totalResults:parsedData.totalResults,
      loading:false,      
    })

    console.log("articles!!!!!!!! = " + `${this.state.articles}`)
    

  }

  render() {
    console.log("Rendering News component");
    console.log("Articles in state:", this.state.articles);
    return (
      <div className='container my-3'>


        <h2 className="text-center">NewsMonkey - Top Headlines</h2>

          {this.state.loading && <Spinner/>}
        <div className="row my-3">


        {!this.state.loading && this.state.articles.map((element)=>{


          console.log("Hey! I am here")
         
         return <div className="col-md-4" key={element.url}><Newsitem title={element.title} description={element.description} author={element.author} url={element.url} imageUrl = {element.urlToImage} date = {element.publishedAt} /></div>
        })} 

</div>

<div className="d-flex justify-content-between my-3">
  <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr;Previous</button>
<button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/5)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button></div>


  
      </div>
    )
  }
}

export default News
