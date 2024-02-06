import React, { Component } from 'react'
import propTypes from 'prop-types'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
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

  fetchMoreData = async()=>{

    this.setState({
      page:this.state.page+1,

    })

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`

  

    let data = await fetch(url);
    console.log("Fetched data")

    
    let parsedData = await data.json();
    console.log("Parsed data")

  

    //
    
    this.setState({
      articles:this.state.articles.concat(parsedData.articles),
   
      totalResults:parsedData.totalResults,
      loading:false,      
    })
  }

  capitalize = (s) => {

    return s.charAt(0).toUpperCase() + s.slice(1)

  }



      constructor(props){
        console.log("Inside News constructor")
        super(props);

        this.state = {

          // not this.state.articles here

          articles:[],
          loading:false,
          page:1,
          totalResults:0,
        }

        // To use this line   document.title = `${this.props.category}`, I dont have access of props inside the constructor directly, hence I pass props as argument to the constructor


        document.title = `${this.capitalize(this.props.category)} - NewsMonkey`

        
      }

      updateNews = async() => {

      

        this.setState({
          loading:true
        })

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`

        this.props.setProgress(30);

        let data = await fetch(url);
        console.log("Fetched data")

        this.props.setProgress(60);
        
        let parsedData = await data.json();
        console.log("Parsed data")

      
    
        this.props.setProgress(100);
        
        //
        
        this.setState({
          articles:parsedData.articles,
       
          totalResults:parsedData.totalResults,
          loading:false,      
        })
    
      }

      



        
  componentDidMount = async() => {
    
    // we have hardcoded articles here, to fetch data dynamically from url use cdm
    // <News pageSize={5}  key="general" country="in" apiKey="524be655ed644951bdc2ae78c8711c0e" category="general" />}

    this.updateNews();
    

  }

  render() {
    console.log("Rendering News component");
    console.log("Articles in state:", this.state.articles);
    return (
      <>


        <h2 className="text-center">NewsMonkey - Top {this.capitalize(this.props.category)} Headlines</h2>

          {this.state.loading && <Spinner/>}

      <InfiniteScroll
        
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          // hasMore ka condition nahi samjha??????
          hasMore={this.state.articles.length!=this.state.totalResults}
          loader={<Spinner/>}
        > 

        <div className="container">

        <div className="row my-3">
        

        {!this.state.loading && this.state.articles.map((element)=>{


          console.log("Hey! I am here")
         
         return <div className="col-md-4 my-2" key={element.url}><Newsitem title={element.title} description={element.description} author={element.author} url={element.url} imageUrl = {element.urlToImage} date = {element.publishedAt} source={element.source.name} /></div>
        })} 

</div>
</div>

 </InfiniteScroll>



  
      </>
    )
  }
}

export default News
