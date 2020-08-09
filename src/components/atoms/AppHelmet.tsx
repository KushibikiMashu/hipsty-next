// import React from "react"
// import { Helmet } from "react-helmet"
// import { CONST } from "../const"
//
// export default function AppHelmet(props) {
//     const {video} = props
//     const title = video ? video.title : CONST.siteTitle
//     const description = video ? `${video.title}(${video.channelTitle})` : CONST.description
//     const url = video ? `${CONST.videoUrl}/${video.hash}` : CONST.baseUrl
//     const image = video ? `${CONST.baseUrl}${video.thumbnail}` : CONST.banner
//     return (
//         <Helmet>
//             {/* 共通 */}
//             <meta name="Content-Type" content="text/html; charset=UTF-8"/>
//             <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//             <title>{CONST.siteTitle}</title>
//             <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet"/>
//
//             {/* 可変 */}
//             <link rel="canonical" href={url}/>
//             <meta property="og:site_name" content={CONST.siteTitle}/>
//             <meta property="og:title" content={title}/>
//             <meta property="og:description" content={description}/>
//             <meta property="og:url" content={url}/>
//             <meta property="og:image" content={image}/>
//             <meta property="og:type" content='website'/>
//
//             <meta name="twitter:site" content="@Panda_Program"/>
//             <meta name="twitter:title" content={title}/>
//             <meta name="twitter:description" content={description}/>
//             <meta name="twitter:image" content={image}/>
//             <meta name="twitter:card" content="summary_large_image"/>
//         </Helmet>
//     )
// }
