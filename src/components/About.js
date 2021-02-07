import React from 'react';
import Link from './Link';

function Credit(name, role, link) {
    return (
        link ?
            <li className={'about__section__paragraph__credit'}>
                <Link classes={'about__section__paragraph__credit__name'} url={link} target={'_blank'} text={name}/>
                <span className={'about__section__paragraph__credit__role'}>{role}</span>
            </li>
            :
            <li className={'about__section__paragraph__credit'}>
                <span className={'about__section__paragraph__credit__name'}>{name}</span>
                <span className={'about__section__paragraph__credit__role'}>{role}</span>
            </li>
    );
}

function About() {
    return (
        <div className={'about'}>
            <h1 className={'about__title'}>About</h1>
            <div className={'about__section'}>
                <p className={'about__section__paragraph'}>
                    The mission of the Interactive Principles project is help make research backed principles
                    from the learning sciences more usable for designers of instructional technologies, specifically
                    educational games, by providing examples and contextualizing the design questions that may have
                    pedagogical impacts. The current site is used in Carnegie Mellon University’s 05-418/818 Design
                    of Educational Games course as a tool to help students in exploring and working with
                    principles covered in the course.
                </p>
                <p className={'about__section__paragraph'}>
                    The current set of 30 principles is from
                    Koedinger, Booth, and Klahr’s article Instructional Complexity and the Science to Constrain It,
                    in which the authors summarized a number of different principle sets into a concise set of 30.
                </p>
            </div>

            <h2 className={'about__subtitle'}>Works Cited</h2>
            <div className={'about__section'}>
                <div className={'about__section__paragraph about__section__paragraph--list'}>
                    <ul>
                        <li>Kenneth R Koedinger, Julie L Booth, and David Klahr. 2013.
                            Instructional Complexity and the Science to Constrain It.
                            Science 342, 6161: 935–937. <a className={'link'} href={'https://doi.org/10.1126/science.1238056'} target={'_blank'}>https://doi.org/10.1126/science.1238056</a> </li>
                    </ul>
                </div>
            </div>

            <h2 className={'about__subtitle'}>Team</h2>
            <div className={'about__section'}>
                <div className={'about__section__paragraph about__section__paragraph--list'}>
                    <ul>
                        {Credit('Erik Harpstead', 'Project Lead', 'http://www.erikharpstead.net/')}
                        {Credit('Katie McTigue', 'Design, Content, Development', 'http://katiemctigue.com')}
                        {Credit('Minji Kim', 'Design, Content')}
                        {Credit('Nicole Wang', 'Design')}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;