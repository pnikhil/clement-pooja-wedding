import React from "react"
import SectionTitle from "../SectionTitle"
import story1 from "../../images/story/meeting.jpg"
import story2 from "../../images/story/dating.jpg"
import story3 from "../../images/story/enagement.jpg"
import "./style.css"

const Story = () => {
    return (
        <div id="story" className="story-area section-padding">
            <SectionTitle section={"Our Story"} />
            <div className="container story-wrap">

                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12 pl-n">
                            <div className="story-img">
                                <img src={story1} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text left-align-text">
                                <h3>How We Met</h3>
                                <p>
                                    Social Media – Facebook in Particular. Actually, our first meet was less than cordial. We were both in our teenage and really didn’t have any conversations, till nearly 6-7 Years later, when we started casually chatting on Facebook Messenger, and then moved onto WhatsApp.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text right-align-text">
                                <h3>Our First Date</h3>
                                <span className="date">December 27, 2016</span>
                                <p>
                                    First Date was on 27th December 2016 at Garuda Mall, M.G Road Bangalore. We had gone to watch our first sci-fi movie together called “ALIVE”. I remember us being a little scared on the frightening scenes and Pooja trying to portray a strong persona while she was scared beyond wits. We then proceeded to Plan B – a pub right across the mall where we spoke on length about our likes, dislikes and in general about each other. Since, I was on a short leave, I did not have any time left and began our courtship.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 pr-n">
                            <div className="story-img">
                                <img src={story2} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 pl-n">
                            <div className="story-img">
                                <img src={story3} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="story-text left-align-text">
                                <h3>Our Engagement</h3>
                                <span className="date">October 2, 2020</span>
                                <p>
                                    Filled with fun, frolic and lot of photos. Exchange of rings, forever locking the two of us in a knot. No more freedoms, no more crushes. Just Pooja & Clement. What stood out though, was people enjoying the part even though it was a small gathering. Drinks & Food served right, just bring the life back to an event, and that is what happened. After a day filled with formalities, the party gained colour in the evening. A big thanks to the rain gods for staying away.
                                </p>
                            </div>
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default Story
