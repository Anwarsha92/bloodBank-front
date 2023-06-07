import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

function About() {

    useEffect(() => {
        localStorage.removeItem("username")
    })
    return (
        <div>

            <Header></Header>

            <div className='text-center container mt-5 w-50'>
                <h2 className='text-success'><u>KL 29 Care & Charity</u></h2>
                <div>
                    <p>KL 29 Care & Charity formed on 2023 on the basis of a project. As we all know by now, blood donation has a lot of benefits. Why a person requires blood has various reasons. It may be an illness or also an accident, nonetheless, it is important. The blood that we donate helps a person in need. It enhances their health condition and makes them overcome their critical situation.

                        In other words, blood donation does not simply help that specific person but also contributes to a responsible gesture towards society. Moreover, it also enhances the health of the donor. As the cell depletion allows a way for production, not new cells that freshen our body system.

                        Furthermore, it also revitalizes our body for better health. Next up, a single blood donation helps at least three people in need. Thus, imagine how one donation can make a difference in so many people’s lives.

                        In addition, blood donation makes the work of blood banks easier. It stabilizes their collection which helps other people get blood urgently. The demand is still higher than the supply in blood banks, so we must donate more and more of it to help people.</p>
                </div>

                <div>
                    <h4><u>Contact Us</u></h4>
                    <p><i class="las la-phone"></i> <a href="">+919048756183</a></p>
                    <p><i class="lar la-envelope"></i> <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrlGBFbFBnGVtRPlQlFrQWFjWNDVzTKPMkktLWNpVrdWbjkbtSFgspcbHPbkpRkqBSBcDB">kl29care&charity@gmail.com</a></p>
                    </div>
            </div>

            <Footer></Footer>

        </div>
    )
}

export default About