import React from 'react'
import { DiDjango, DiPython, DiReact, DiPostgresql } from 'react-icons/di'
import { SiJavascript, SiStrapi, SiOracle, SiTailwindcss } from 'react-icons/si'
import { CgCPlusPlus } from 'react-icons/cg'
import { Card, Text } from "@nextui-org/react";
import { Slide, Zoom } from 'react-reveal';


const Technology = () => {
  var code = '</>';
  return (
    <div className='w-screen'>
      <section className="flex flex-col justify-center items-center body-font">
        <div className="flex flex-col justify-center items-center container px-5 py-24 mx-auto">
          <div className="text-center w-full mb-20">
            <Zoom>
              <Text
                h1
                size={30}
                weight="bold"
              >
                Skills & Technologies {code}
              </Text>
            </Zoom>
          </div>
          <div className="flex flex-wrap md:pl-14 pl-0">
              <Slide right>
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full" >
                  <Card bordered shadow={true} hoverable css={{ mw: "400px" }} >
                    <div className="h-full flex items-center p-4 cursor-pointer">
                      <DiPython className="w-16 h-16 text-black object-cover object-center flex-shrink-0 rounded-full mr-4" />
                      <div className="flex-grow">
                        <h2 className="text-black title-font font-medium">Python</h2>
                      </div>
                    </div>
                  </Card>
                </div>
              </Slide>
              <Zoom>
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full" >
                  <Card bordered shadow={true} hoverable css={{ mw: "400px" }} >
                    <div className="h-full flex items-center p-4 rounded-lg cursor-pointer">
                      <DiDjango className="w-16 h-16 text-black object-cover object-center flex-shrink-0 rounded-full mr-4" />
                      <div className="flex-grow">
                        <h2 className="text-black title-font font-medium">Django</h2>
                      </div>
                    </div>
                  </Card>
                </div>
              </Zoom>
              <Slide left>
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full" >
                  <Card bordered shadow={true} hoverable css={{ mw: "400px" }} >
                    <div className="h-full flex items-center p-4 rounded-lg cursor-pointer">
                      <DiPostgresql className="w-16 h-16 text-black object-cover object-center flex-shrink-0 rounded-full mr-4" />
                      <div className="flex-grow">
                        <h2 className="text-black title-font font-medium">PostgreSql</h2>
                      </div>
                    </div>
                  </Card>
                </div>
              </Slide>
              <Slide right>
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full" >
                  <Card bordered shadow={true} hoverable css={{ mw: "400px" }} >
                    <div className="h-full flex items-center p-4 rounded-lg cursor-pointer">
                      <SiJavascript className="w-16 h-16 text-black object-cover object-center flex-shrink-0 rounded-full mr-4" />
                      <div className="flex-grow">
                        <h2 className="text-black title-font font-medium">Javascript</h2>
                      </div>
                    </div>
                  </Card>
                </div>
              </Slide>
              <Zoom>
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full" >
                  <Card bordered shadow={true} hoverable css={{ mw: "400px" }} >
                    <div className="h-full flex items-center p-4 rounded-lg cursor-pointer">
                      <DiReact className="w-16 h-16 text-black object-cover object-center flex-shrink-0 rounded-full mr-4" />
                      <div className="flex-grow">
                        <h2 className="text-black title-font font-medium">React</h2>
                      </div>
                    </div>
                  </Card>
                </div>
              </Zoom>
              <Slide left>
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full" >
                  <Card bordered shadow={true} hoverable css={{ mw: "400px" }} >
                    <div className="h-full flex items-center p-4 rounded-lg cursor-pointer">
                      <SiOracle className="w-16 h-16 text-black object-cover object-center flex-shrink-0 rounded-full mr-4" />
                      <div className="flex-grow">
                        <h2 className="text-black title-font font-medium">Oracle Sql</h2>
                      </div>
                    </div>
                  </Card>
                </div>
              </Slide>
              <Slide right>
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full" >
                  <Card bordered shadow={true} hoverable css={{ mw: "400px" }} >
                    <div className="h-full flex items-center p-4 rounded-lg cursor-pointer">
                      <CgCPlusPlus className="w-16 h-16 text-black object-cover object-center flex-shrink-0 rounded-full mr-4" />
                      <div className="flex-grow">
                        <h2 className="text-black title-font font-medium">C++</h2>
                      </div>
                    </div>
                  </Card>
                </div>
              </Slide>
              <Zoom>
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full" >
                  <Card bordered shadow={true} hoverable css={{ mw: "400px" }} >
                    <div className="h-full flex items-center p-4 rounded-lg cursor-pointer">
                      <SiTailwindcss className="w-16 h-16 text-black object-cover object-center flex-shrink-0 rounded-full mr-4" />
                      <div className="flex-grow">
                        <h2 className="text-black title-font font-medium">Tailwind</h2>
                      </div>
                    </div>
                  </Card>
                </div>
              </Zoom>
              <Slide left>
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full" >
                  <Card bordered shadow={true} hoverable css={{ mw: "400px" }} >
                    <div className="h-full flex items-center p-4 rounded-lg cursor-pointer">
                      <SiStrapi className="w-16 h-16 text-black object-cover object-center flex-shrink-0 rounded-full mr-4" />
                      <div className="flex-grow">
                        <h2 className="text-black title-font font-medium">Strapi</h2>
                      </div>
                    </div>
                  </Card>
                </div>
              </Slide>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Technology
