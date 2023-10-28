import React from 'react'
import ProjectItem from './ProjectItem'
import one from '../assets/1.jpg'
import two from '../assets/2.jpg'
import three from '../assets/3.jpg'
import four from '../assets/4.jpg'

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'></h1>
            <p className='text-center py-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum, corrupti quas cumque repellendus deleniti ducimus iusto perspiciatis quo repellat sequi nesciunt voluptatum soluta rerum ex aperiam enim. Sint, perferendis.

            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={one} title='one' />
                <ProjectItem img={two} title='two' />
                <ProjectItem img={three} title='three' />
                <ProjectItem img={four} title='four' />
            </div>
        </div>
    )
}

export default Projects