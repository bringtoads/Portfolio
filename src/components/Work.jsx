import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2020,
        title: 'this is just some dummy data',
        duration: '3 years',
        details: 'Dolore nisi duis excepteur Lorem.Amet velit Lorem aute eu mollit culpa in ut aute Lorem. Adipisicing occaecat enim eiusmod magna nisi. Ad minim in elit enim. Esse sint elit laboris nisi anim occaecat reprehenderit. Ut incididunt magna esse nisi aute Lorem cillum labore non adipisicing eiusmod sint.'
    }
    , {
        year: 2020,
        title: 'this is just some dummy data',
        duration: '3 years',
        details: 'Dolore nisi duis excepteur Lorem.Amet velit Lorem aute eu mollit culpa in ut aute Lorem. Adipisicing occaecat enim eiusmod magna nisi. Ad minim in elit enim. Esse sint elit laboris nisi anim occaecat reprehenderit. Ut incididunt magna esse nisi aute Lorem cillum labore non adipisicing eiusmod sint.'
    }
    , {
        year: 2020,
        title: 'this is just some dummy data',
        duration: '3 years',
        details: 'Dolore nisi duis excepteur Lorem.Amet velit Lorem aute eu mollit culpa in ut aute Lorem. Adipisicing occaecat enim eiusmod magna nisi. Ad minim in elit enim. Esse sint elit laboris nisi anim occaecat reprehenderit. Ut incididunt magna esse nisi aute Lorem cillum labore non adipisicing eiusmod sint.'
    }
    , {
        year: 2020,
        title: 'this is just some dummy data',
        duration: '3 years',
        details: 'Dolore nisi duis excepteur Lorem.Amet velit Lorem aute eu mollit culpa in ut aute Lorem. Adipisicing occaecat enim eiusmod magna nisi. Ad minim in elit enim. Esse sint elit laboris nisi anim occaecat reprehenderit. Ut incididunt magna esse nisi aute Lorem cillum labore non adipisicing eiusmod sint.'
    }
    , {
        year: 2020,
        title: 'this is just some dummy data',
        duration: '3 years',
        details: 'Dolore nisi duis excepteur Lorem.Amet velit Lorem aute eu mollit culpa in ut aute Lorem. Adipisicing occaecat enim eiusmod magna nisi. Ad minim in elit enim. Esse sint elit laboris nisi anim occaecat reprehenderit. Ut incididunt magna esse nisi aute Lorem cillum labore non adipisicing eiusmod sint.'
    }

]
const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bond text-center text-[#001b5e]'></h1>
            {data.map((item, index) => (
                <WorkItem key={index} year={item.year} title={item.title} duration={item.duration} details={item.details} />
            ))}
        </div>
    )
}

export default Work