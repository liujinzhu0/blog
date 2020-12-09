import React from "react"
import Head from "next/head"
import { Row, Col, Affix, Icon, Breadcrumb } from "antd"
/* 导航 */
import MarkNav from "markdown-navbar"
import "markdown-navbar/dist/navbar.css"
/* markDown */
import marked from "marked"
import hljs from "highlight.js"
import "highlight.js/styles/monokai-sublime.css"

import ReactMarkdown from 'react-markdown'



/* 组件 */
import Header from "../components/Header"
import Author from "../components/Author"
import Advert from "../components/Advert"
import Footer from "../components/Footer"
import "../static/pages/detailed.css"
import Axios from "axios"


const Detailed = (props) => {

  const renderer = new marked.Renderer()
  marked.setOptions({
    renderer:renderer,
    gfm:false,
    pedantic:false,
    sanitize:false,
    tables:true,
    breaks:false,
    smartLists:true,
    smartypants:true,
    highlight:function(code){
      return hljs.highlightAuto(code).value
    }
  })
let html = marked(props.article_content)


  return (
    <>
      <Head>
        <title>博客详情页</title>
      </Head>
      <Header />

      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            {/* 面包靴导航 */}
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/"> 首页</a></Breadcrumb.Item>
                <Breadcrumb.Item> 视频列表</Breadcrumb.Item>
                <Breadcrumb.Item>xxxx</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            {/* 内容区域 */}
            <div>
              {/* 标题 */}
              <div className="detailed-title">React实战视频教程-技术胖Blog开发(更新08集)</div>
              <div className="list-icon center">
                <span> <Icon type="calender" /> 2019-06-28 </span>
                <span> <Icon type="folder" /> 视频呢教程</span>
                <span> <Icon type="fire" /> 2344人 </span>
              </div>
              {/* 内容 */}
              <div className="detailed-content">
             <ReactMarkdown
             source={html}
             escapeHtml={false}
             ></ReactMarkdown>
          </div>



            </div>






          </div>






        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          {/* 右侧 */}
          <Author />
          <Advert />

        <Affix offsetTop={5}>
          <div className="detailed-nav comm-box">
            <div class="nav-title">文章目录</div>
            <MarkNav className="article-menu" source={markdown} order={false}/>
          </div>
        </Affix>
        </Col>
      </Row>
      <Footer />
    </>
  )
}
/* 相当于生命周期函数 */
Detailed.getInitialProps = async (context)=> {
let id=context.query.id
const promise = new Promise((resolve)=>{
  Axios("http://localhost:7001/default/getArticleById/"+id).then(res=>{
    resolve(res.data.data[0])
  })
})
return await promise
}


export default Detailed;