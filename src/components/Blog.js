import React from 'react';
import { Container, Row } from 'react-bootstrap';
import TitleHeader from './TitleHeader';
import '../style/blog.css';
import Cardimage from './Cardimage';
import image1 from '../image/image1.jpg';
import image2 from '../image/image2.jpg';
import image3 from '../image/image3.jpg';

export default function Blog() {

    return (
        <>
            <section id="blog" className="blog">
                <Container>
                    <TitleHeader titleHeader="BLOG POSTS" titleText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas sed consequatur accusamus quasi enim distinctio placeat sequi maxime ipsa nobis?" />
                    <Row>
                        <Cardimage
                            blogimage={image1}
                            bloglink_1="/"
                            bloglink_2="/"
                            blogtitle="Creat Creative & Clean"
                            blogtext="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas sed consequatur accusamus quasi enim distinctio placeat sequi maxime ipsa nobis?" />
                        <Cardimage
                            blogimage={image2}
                            bloglink_1="/"
                            bloglink_2="/"
                            blogtitle="Make A Sleek Break"
                            blogtext="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas sed consequatur accusamus quasi enim distinctio placeat sequi maxime ipsa nobis?" />
                        <Cardimage
                            blogimage={image3}
                            bloglink_1="/"
                            bloglink_2="/"
                            blogtitle="Creative Manipulations"
                            blogtext="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas sed consequatur accusamus quasi enim distinctio placeat sequi maxime ipsa nobis?" />
                    </Row>
                </Container>
            </section>
        </>
    );
}