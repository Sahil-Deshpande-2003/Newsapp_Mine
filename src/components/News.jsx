import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
const News  = (props)=>{


      const [articles,setArticles]= useState([])
      const [page,setPage]= useState(1)
      const [totalResults,setTotalResults]= useState(0)
      const [loading,setLoading]= useState(true)
      // document.title = `${this.capitalize(props.category)} - NewsMonkey`

  // functional based me prop types end me likhte hai


  const fetchMoreData = async()=>{


    setPage(page+1)

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`

  

    let data = await fetch(url);
    console.log("Fetched data")

    
    let parsedData = await data.json();
    console.log("Parsed data")

  

    //
    
    

    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  }

  const capitalize = (s) => {

    return s.charAt(0).toUpperCase() + s.slice(1)

  }



     const updateNews = async() => {

      

        setLoading(true)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`

        props.setProgress(30);

        let data = await fetch(url);
        console.log("Fetched data")

        props.setProgress(60);
        
        let parsedData = await data.json();
        console.log("Parsed data")

      
    
        props.setProgress(100);
        
        //

        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        
   
    
      }

      


    useEffect(()=>{
      // plays the role of cdm
    updateNews()
    },[])
  

    console.log("Rendering News component");
    console.log("Articles in state:", articles);
    return (
      <>


        <h2 className="text-center">NewsMonkey - Top {capitalize(props.category)} Headlines</h2>

          {loading && <Spinner/>}

      <InfiniteScroll
        
          dataLength={articles.length}
          next={fetchMoreData}
          // hasMore ka condition nahi samjha??????
          hasMore={articles.length!=totalResults}
          loader={<Spinner/>}
        > 

        <div className="container">

        <div className="row my-3">
        

        {!loading && articles.map((element)=>{


          console.log("Hey! I am here")
         
         return <div className="col-md-4 my-2" key={element.url}><Newsitem title={element.title} description={element.description} author={element.author} url={element.url} imageUrl = {element.urlToImage} date = {element.publishedAt} source={element.source.name} /></div>
        })} 

</div>
</div>

 </InfiniteScroll>

   

  
      </>
    )
  
}

News.defaultProps = {
  country: 'in',
  pageSize: 5
}

News. propTypes= {
  country: propTypes.string,
  pageSize : propTypes.number,
  category:propTypes.string,
}


export default News
