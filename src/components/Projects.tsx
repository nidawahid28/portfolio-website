import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: "Todo List ",
        description: "A Typescript based app for managing and organising taks efficiently.",
        img:"/project01.jpg",
        tags:["Node","Typescript"]
    },
    {
        id: 1,
        title:"Countdown Timer",
        description:"An app to track time with an interactive countdown feature.",
        img: "/project02.jpg",
        tags:["Node","Typescript"],
    },
    {
        id: 2,
        title:"Currency Convertor Project",
        description:"A simple Typescript powered tool for converting currencies with real-time rates.",
        img: "/project03.JPG",
        tags: ["Node","Typescript"],
    },
    {
      id: 3,
      title:"Static Interactive Resume",
      description: "A Typescript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
      img:"/project04.jpg",
      tags:["Node", "Typescript","HTML","CSS"],
    },
    {
      id: 4,
      title: "Simple Calculator Project",
      description:"A basic Typescript calculator for performing essential arthmetic operations.",
      img: "/project05.JPG",
      tags:["Node","Typescript"],
    },
    {
      id: 5,
      title:"Next.js Application with Dynamic Routes",
      description:"A Next.js app with dynamic routing that displays country details via unique URLs linked from a static country list.",
      img:"/project06.jpg",
      tags:["Node","Typescript","HTML","CSS","Next.js"],
    }
]

const project = () => {
  return (
    <div id='projects' className='container pt-32' data-aos="zoom-in-up">
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        description={el.description}
        img={el.img}
        tags={el.tags}
        />))}
      </div>

    </div>
  )
}

export default project


