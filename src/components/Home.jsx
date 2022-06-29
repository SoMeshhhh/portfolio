import { React, useState } from 'react'
import my_emote_full from '../images/my_emote_full.png'
import { motion } from 'framer-motion'
import Jump from 'react-reveal/Jump';
import { Modal, Row, Card, Text, Grid, Spacer, Button } from "@nextui-org/react";

const Home = () => {

    const [visible, setVisible] = useState(false);

    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };

    return (
        <>
            <div className='w-screen'>
                <div>
                    <Modal
                        closeButton
                        width='500px'
                        aria-labelledby="modal-title"
                        open={visible}
                        onClose={closeHandler}
                    >
                        <Modal.Header>
                            <Text id="modal-title" size={18}>
                                <Text b size={18}>
                                    Project Section
                                </Text>
                            </Text>
                        </Modal.Header>
                        <Modal.Body>
                            <Row justify="flex-start">
                                <Grid.Container gap={2} justify="center">
                                    <Grid xs={12}>
                                        <Card hoverable clickable>
                                            <Card.Body css={{ p: 0 }}>
                                                <Card.Image
                                                    objectFit="cover"
                                                    src={require("../images/tesla.png")}
                                                    width="100%"
                                                    height={140}
                                                    alt={"tesla"}
                                                />
                                            </Card.Body>
                                            <Card.Footer justify="flex-start">
                                                <Row wrap="wrap" justify="center">
                                                    <Text b>Tesla UI</Text>
                                                    <Spacer />
                                                    <Button size={"xs"}><a href='https://teslaa-ui.netlify.app/' className='text-white'>Visit</a></Button>
                                                </Row>
                                            </Card.Footer>
                                        </Card>
                                        <Spacer />
                                        <Card hoverable clickable>
                                            <Card.Body css={{ p: 0 }}>
                                                <Card.Image
                                                    objectFit="cover"
                                                    src={require("../images/rest.png")}
                                                    width="100%"
                                                    height={140}
                                                    alt={"tesla"}
                                                />
                                            </Card.Body>
                                            <Card.Footer justify="flex-start">
                                                <Row wrap="wrap" justify="center">
                                                    <Text b>Rest API</Text>
                                                    <Spacer />
                                                    <Button size={"xs"}><a href='https://restt-apii.herokuapp.com/' className='text-white'>Visit</a></Button>
                                                </Row>
                                            </Card.Footer>
                                        </Card>
                                    </Grid>
                                </Grid.Container>
                            </Row>
                        </Modal.Body>
                    </Modal>
                </div>
                <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <div className='flex flex-col space-y-0 mb-4'>
                                <h1 className="title-font sm:text-6xl text-3xl font-medium text-gray-900">Hi,
                                </h1>
                                <h1 className="title-font sm:text-6xl text-3xl font-medium text-gray-900">I'm Somesh Patel</h1>
                                <h1 className="title-font sm:text-6xl text-3xl font-medium text-gray-900">Python Full Stack Developer</h1>
                            </div>
                            <motion.button
                                whileHover={{ scale: 0.8 }}
                                initial={{ x: 100 }}
                                animate={{ x: 1 }}
                                transition={{ ease: "easeOut" }}
                                onClick={handler}
                                className="inline-flex items-center text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 text-lg my-3 rounded-full">Explore Work
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </motion.button>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center">
                            <Jump right>
                                <div className='w-48'
                                >
                                    <motion.img
                                        drag
                                        dragConstraints={{
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                        }}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="object-cover object-center rounded cursor-pointer h-" alt="hero" src={my_emote_full} />
                                </div>
                            </Jump>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home