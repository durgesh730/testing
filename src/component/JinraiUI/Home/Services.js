import React from 'react';
import img5 from '../../../assets/qa.png';
import img from '../../../assets/coding (2).png';
import img2 from '../../../assets/project (1).png';
import img3 from '../../../assets/technical-support.png';
import img4 from '../../../assets/system-integration.png';
import img6 from '../../../assets/adaptation (1).png';
import img7 from '../../../assets/responsibility.png';
import img8 from '../../../assets/salary.png';

const Services = () => {
    return (
        <div id="services" className="bg-white pt-10 pb-7">
            <section>
                <div className="my-4 py-4">
                    <h2 className="my-2 sm:text-4xl text-3xl text-[--bg-color] font-bold text-center" itemProp="name">Our Services</h2>

                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-[--bg-color]'></div>
                    </div>
                    <p className="text-gray-600 text-center mt-6 mb-4 sm:px-0 px-4" itemProp="description">
                        We are deeply committed to the growth and success of our clients through innovative and customized services.
                    </p>
                </div>

                <div className="md:px-32 px-10">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {/* Development Service */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden rounded-lg shadow-xl p-3 group hover:bg-[#f4f4f4]" itemScope itemType="http://schema.org/Service">
                            <div className="m-2 text-sm">
                                <img
                                    alt="Custom web development for scalable and mobile-friendly solutions"
                                    className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out h-[80px] m-auto mb-8 mt-3"
                                    src={img}
                                    itemProp="image"
                                />
                                <h3 className="mt-8 text-xl text-center font-semibold text-gray-900 mb-2" itemProp="name">Development</h3>
                                <p className="text-gray-600 text-center" itemProp="description">
                                    We specialize in creating and optimizing high-quality, custom websites for businesses and organizations of all sizes, ensuring mobile-friendly and user-friendly solutions.
                                </p>
                            </div>
                        </div>

                        {/* Project Management Service */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden rounded-lg shadow-xl p-3 group hover:bg-[#f4f4f4]" itemScope itemType="http://schema.org/Service">
                            <div className="m-2 text-sm">
                                <img
                                    alt="Expert project management for seamless software delivery"
                                    className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out h-[80px] m-auto mb-8 mt-3"
                                    src={img2}
                                    itemProp="image"
                                />
                                <h3 className="mt-8 text-xl text-center font-semibold text-gray-900 mb-2" itemProp="name">Project Management</h3>
                                <p className="text-gray-600 text-center" itemProp="description">
                                    Our expert project management services ensure the timely and efficient delivery of software, while managing scope, cost, and resources effectively.
                                </p>
                            </div>
                        </div>

                        {/* Technical Support Service */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden rounded-lg shadow-xl p-3 group hover:bg-[#f4f4f4]" itemScope itemType="http://schema.org/Service">
                            <div className="m-2 text-sm">
                                <img
                                    alt="Reliable technical support for domain registration and hosting"
                                    className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out h-[80px] m-auto mb-8 mt-3"
                                    src={img3}
                                    itemProp="image"
                                />
                                <h3 className="mt-8 text-xl text-center font-semibold text-gray-900 mb-2" itemProp="name">Technical Support</h3>
                                <p className="text-gray-600 text-center mb-6" itemProp="description">
                                    We offer domain registration, hosting services, and ongoing technical support to ensure your online presence remains secure and visible.
                                </p>
                            </div>
                        </div>

                        {/* System Integration Service */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden rounded-lg shadow-xl p-3 group hover:bg-[#f4f4f4]" itemScope itemType="http://schema.org/Service">
                            <div className="m-2 text-sm">
                                <img
                                    alt="System integration services for optimized IT solutions"
                                    className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out h-[80px] m-auto mb-8 mt-3"
                                    src={img4}
                                    itemProp="image"
                                />
                                <h3 className="mt-8 text-xl text-center font-semibold text-gray-900 mb-2" itemProp="name">System Integration</h3>
                                <p className="text-gray-600 text-center" itemProp="description">
                                    Our system integration service ensures the seamless connection of various software applications to optimize business operations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:px-32 px-10 pt-8">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {/* Testing and QA Service */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden rounded-lg shadow-xl p-3 group hover:bg-[#f4f4f4]" itemScope itemType="http://schema.org/Service">
                            <div className="m-2 text-sm">
                                <img
                                    alt="Comprehensive testing and quality assurance services"
                                    className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out h-[80px] m-auto mb-8 mt-3"
                                    src={img5}
                                    itemProp="image"
                                />
                                <h3 className="mt-8 text-xl text-center font-semibold text-gray-900 mb-2" itemProp="name">Testing and QA</h3>
                                <p className="text-gray-600 text-center" itemProp="description">
                                    Our testing and QA services ensure that your products and applications meet the highest quality standards for reliability and performance.
                                </p>
                            </div>
                        </div>

                        {/* Customization and Adaptation Service */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden rounded-lg shadow-xl p-3 group hover:bg-[#f4f4f4]" itemScope itemType="http://schema.org/Service">
                            <div className="m-2 text-sm">
                                <img
                                    alt="Customized software solutions for specific business needs"
                                    className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out h-[80px] m-auto mb-8 mt-3"
                                    src={img6}
                                    itemProp="image"
                                />
                                <h3 className="mt-8 text-xl text-center font-semibold text-gray-900 mb-2" itemProp="name">Customization and Adaption</h3>
                                <p className="text-gray-600 text-center" itemProp="description">
                                    We provide tailored software solutions to meet the unique needs of your business, ensuring optimal performance and scalability.
                                </p>
                            </div>
                        </div>

                        {/* Operations and Managed Services */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden rounded-lg shadow-xl p-3 group hover:bg-[#f4f4f4]" itemScope itemType="http://schema.org/Service">
                            <div className="m-2 text-sm">
                                <img
                                    alt="Managed services for streamlined business operations"
                                    className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out h-[80px] m-auto mb-8 mt-3"
                                    src={img7}
                                    itemProp="image"
                                />
                                <h3 className="mt-8 text-xl text-center font-semibold text-gray-900 mb-2" itemProp="name">Operations and Managed Services</h3>
                                <p className="text-gray-600 text-center mb-6" itemProp="description">
                                    We offer expert-managed services to streamline your operations, allowing you to focus on core business activities.
                                </p>
                            </div>
                        </div>

                        {/* Hiring and Payroll Service */}
                        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden rounded-lg shadow-xl p-3 group hover:bg-[#f4f4f4]" itemScope itemType="http://schema.org/Service">
                            <div className="m-2 text-sm">
                                <img
                                    alt="Efficient hiring and payroll solutions for businesses"
                                    className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out h-[80px] m-auto mb-8 mt-3"
                                    src={img8}
                                    itemProp="image"
                                />
                                <h3 className="mt-8 text-xl text-center font-semibold text-gray-900 mb-2" itemProp="name">Hiring and Payroll</h3>
                                <p className="text-gray-600 text-center" itemProp="description">
                                    We provide hassle-free hiring and payroll solutions, allowing businesses to focus on their growth while we handle the operational aspects.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
