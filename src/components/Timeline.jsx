import React from 'react'
//import { ReactComponent as SchoolIcon } from '../assets/school.svg'
import SchoolIcon from './SchoolIcon'
import timelineElements from '../timelineElements'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import '../style/Timeline.css'

const Timeline = () => {

  let schoolStyle = { background: 'rgb(235, 235, 235)'}

  return (
    <>
    <div id="studies"></div>
    <div className='bigContainer'>
      <div className='timelineCont'>
        <div className="timelineSubcont">
          <h2 className='timelineTitle'>Studies</h2>
          <VerticalTimeline>
            {timelineElements.map( (element) => {
                return (
                  <VerticalTimelineElement
                  key= { element.key }
                  date= { element.date }
                  dateClassName= 'date'
                  iconStyle= { schoolStyle }
                  icon= { <SchoolIcon/> }
                  >
                  <h3 className='vertical-timeline-element-title'>
                    {element.title}
                  </h3>
                  <h5 className='vertical-timeline-element-subtitle'>
                    {element.location}
                    </h5>
                    <p id='description'>
                      {element.description}
                    </p>   
                  </VerticalTimelineElement>
                );
            })}
          </VerticalTimeline>
        </div>
      </div>
    </div>
    </>
  )
}

export default Timeline;