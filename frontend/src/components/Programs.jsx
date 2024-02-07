import React from 'react';
import '../styling/style.css'
import Program1 from '../imgs/Program1.webp';
import Program2 from '../imgs/Program2.jpg';
import Program3 from '../imgs/Program3.jpg';
import Program4 from '../imgs/Program4.png';
import Program5 from '../imgs/Program5.png';
import Program6 from '../imgs/Program6.png';
import ELCLogo1 from '../imgs/ELCLogo1.jpeg';
import ELCLogo2 from '../imgs/ELCLogo2.jpeg';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import QueryString from 'query-string';

const Programs = () => {

  const location = useLocation();
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const values = QueryString.parse(location.search);
    console.log(values);




    if (values.success) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (values.canceled) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);
  
  return (
      <div className="p-8 bg-berige text-" id="programs">
          <h2 className="text-8xl font-bold text-black text-left mb-20 bg-berige" > Programs</h2>
          <div className="flex flex-wrap justify-around bg-berige">
            <div className="w-full md:w-1/3 p-4 mt-20 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <div className="border-0 border-black rounded p-4 shadow-2xl bg-berige ">
                <h3 className="text-3xl font-bold mb-4 font-[Merriweather]">Private 1:1 Coaching</h3>
                <h6 className="italic mb-4 -mt-4 font-semibold font-[Georgia] ">In-Person or Virtual</h6>
                <img src={Program2} alt="Private 1:1 Coaching" className="object-cover w-full h-96 border-8 border-black rounded-lg" />
                <p className="text-xl mt-4 font-[Georgia]">Experience like never before with 1:1 training, where every session is crafted uniquely for you, ensuring efficient progress tailored to your specific goals and needs. Available in-person or virtually. </p>
                <div className='flex justify-center space-x-4'>
                  <a href="#coaching" className="bg-gray text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-2">
                    Learn More
                  </a>
                  <a href="#contact" className="bg-lightred text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-2">
                    Inquire
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4 mt-20 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              <div className="border-0 border-black rounded p-4 shadow-2xl bg-berige " > 
                <h3 className="text-3xl font-bold mb-4 font-[Merriweather]" >Training Programs</h3>
                <h6 className="italic mb-4 -mt-4 font-semibold font-[Georgia] ">Available WorldWide</h6>         
                <img src={Program1} alt="Custom Workout Routine" className="object-cover w-full h-96 border-8 border-black rounded-lg" />
                <p className="text-xl mt-4 font-[Georgia]" > Discover the impact of a personalized workout plan. Through my tailored approach, we'll create a fitness routine that matches your goals, fits your schedule, and keeps you motivated on the path to a healthier, stronger you.</p>
                <div className='flex justify-center space-x-4'>
                  <a href="#routine" className="bg-gray text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-2">
                    Learn More
                  </a>
                  <a href="#contact" className="bg-lightred text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-2">
                    Inquire
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4 mt-20 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <div className="border-0 border-black rounded p-4 shadow-2xl bg-berige ">
                <h3 className="text-3xl font-bold mb-4 font-[Merriweather]">Nutrition Advice / Plan</h3>
                <h6 className="italic mb-4 -mt-4 font-semibold font-[Georgia] ">Available WorldWide</h6>
                <img src={Program3} alt="Nutrition Advice / Plan" className="object-cover w-full h-96 border-8 border-black rounded-lg" />
                <p  className="text-xl mt-4 font-[Georgia]s">Explore the benefits of a customized nutrition plan. With a designed dietary strategy that aligns with your goals, adapts to your lifestyle, and guides you towards a healthier and happier life.</p>
                <div className='flex justify-center space-x-4'>
                  <a href="#diet" className="bg-gray text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-2">
                    Learn More
                  </a>
                  <a href="#contact" className="bg-lightred text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-2">
                    Inquire
                  </a>
                </div>
              </div>
            </div>
          </div>

        <div className="flex flex-col items-center mt-20 text-black shadow-2xl bg-berige"  id='coaching'>
          <div className="w-full  md:w-1/2 p-4 border-b-2  border-black md:border-b-0 shadow-2xl transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-10 mb-16">
            <h3 className="text-6xl font-bold mb-4 font-[Merriweather] text-center mt-8 mb-12 " >Coaching Services</h3>
            <h4 className= "text-4xl font-bold mb-4 font-[Merriweather] text-left mt-8  ">1:1 In Person Coaching</h4>
            <p className="text-xl font-bold font-[Merriweather] text-red  "> Current Status: Open</p>
            <h4 className= "text-4xl font-bold mb-4 font-[Merriweather] text-left mt-8  "> What's Included: ✔️ </h4>
              <ul className="custom-bullet list-inside leading-relaxed m-4 font-[merriweahter] text-xl ">
                <li><span className='font-bold'>High-Level Coaching by Ethan Lynch: </span> Personalized coaching that encompasses everything you need. Tailored to your unique needs, this one-on-one service employs a science-based approach, coupled with my expertise and meticulous programming, ensuring optimal results efficiently. </li>
                <li><span className='font-bold'>Preparation Information Package: </span> A comprehensive and personalized information package that includes essential pre-training details and vital nutrition information. It's designed to kickstart your journey with detailed and individualized insights. </li>
                <li><span className='font-bold'>Communication Via Text / Email: </span> Get direct access to me for personalized support and quick responses to any questions you have, guaranteed within 48 hours. Your journey is my priority. </li>
                <li><span className='font-bold'>Essiential Apps: </span> Phone applications to track workout performance and nutrional information needed for personalized diets which will be used to track progression over time. </li>
                <li><span className='font-bold'>Individualized Training Programming: </span> Tailored to your individual needs, the training program addresses specific areas like lagging muscle groups and accommodates your availability and work / school schedule. This personalized approach ensures you achieve your desired physique efficiently. </li>
                <li><span className='font-bold'>Individualized Nutrition Programming: </span> I'll equip you with essential tools, including a personalized Meal Plan, Grocery List, and Macronutrient Targets, ensuring you have everything you need to achieve your fitness goals. </li>
                <li><span className='font-bold'>Supplement Recommendations </span> I'll provide you with a list of recommended supplements that will help you achieve your goals. </li>
                <li><span className='font-bold'>Form Technique Analysis and Monitoring: </span> I'll assess and monitor your exercise technique (form) throughout our sessions, ensuring you perform movements optimally and safely for the best results and intended outcomes. </li>
                <li><span className='font-bold'>Ongoing accountability:</span> I'll equip you with the necessary tools to stay motivated and on track. The process will be enjoyable and easily adaptable to your schedule, ensuring consistent adherence.  </li>
                <li><span className='font-bold'>Weekly Check-In </span> Weekly check-ins are a crucial aspect of my coaching, ensuring thorough communication and progress assessment. My carefully designed protocol covers all essential aspects, guaranteeing continuous guidance toward your desired fitness goals. </li>
              </ul>

              <a href="#results" className="bg-red text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-2 ml-6">
                    See Results
                  </a>
              

              

              <h2 className= "text-5xl font-bold mb-4 font-[Merriweather] text-left mt-8  ">1:1 Virtual Coaching</h2>
              <p className="text-xl font-bold font-[Merriweather] text-red  "> Current Status: Open</p>
              <h4 className= "text-4xl font-bold mb-4 font-[Merriweather] text-left mt-8  "> What's Included: ✔️ </h4>

              <ul className="custom-bullet list-inside leading-relaxed m-4 font-[merriweahter] text-xl ">
                <li><span className='font-bold'>High-Level Coaching by Ethan Lynch: </span> Personalized coaching that encompasses everything you need. Tailored to your unique needs, this one-on-one service employs a science-based approach, coupled with my expertise and meticulous programming, ensuring optimal results efficiently. </li>
                <li><span className='font-bold'>Preparation Information Package: </span> A comprehensive and personalized information package that includes essential pre-training details and vital nutrition information. It's designed to kickstart your journey with detailed and individualized insights. </li>
                <li><span className='font-bold'>Communication Via Text / Email: </span> Get direct access to me for personalized support and quick responses to any questions you have, guaranteed within 48 hours. Your journey is my priority. </li>
                <li><span className='font-bold'>Essiential Apps: </span> Phone applications to track workout performance and nutrional information needed for personalized diets which will be used to track progression over time. </li>
                <li><span className='font-bold'>Individualized Training Programming: </span> Tailored to your individual needs, the training program addresses specific areas like lagging muscle groups and accommodates your availability and work / school schedule. This personalized approach ensures you achieve your desired physique efficiently. </li>
                <li><span className='font-bold'>Individualized Nutrition Programming: </span> I'll equip you with essential tools, including a personalized Meal Plan, Grocery List, and Macronutrient Targets, ensuring you have everything you need to achieve your fitness goals. </li>
                <li><span className='font-bold'>Supplement Recommendations </span> I'll provide you with a list of recommended supplements that will help you achieve your goals. </li>
                <li><span className='font-bold'>Form Technique Analysis and Monitoring(Via Video): </span> I'll assess and monitor your exercise technique (form) throughout our sessions, ensuring you perform movements optimally and safely for the best results and intended outcomes. </li>
                <li><span className='font-bold'>Ongoing accountability:</span> I'll equip you with the necessary tools to stay motivated and on track. The process will be enjoyable and easily adaptable to your schedule, ensuring consistent adherence.  </li>
                <li><span className='font-bold'>Weekly Check-In </span> Weekly check-ins are a crucial aspect of my coaching, ensuring thorough communication and progress assessment. My carefully designed protocol covers all essential aspects, guaranteeing continuous guidance toward your desired fitness goals. </li>
              </ul>

              <a href="#results" className="bg-red text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-2 ml-6">
                    See Results
                  </a>

              

            <div className="mt-8 justify-between transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-40">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="bg-gray p-4 shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 mr-2 mb-4 md:mb-0 flex flex-col items-center justify-center">
                  <h4 className="text-4xl font-bold font-[Merriweather] text-white mb-6">Virtual Coaching</h4>
                  <img className='w-1/2 h-1/2 mb-4' src={ELCLogo1} />
                  <h4 className="text-xl -mt-2 font-bold font-[Merriweather] text-red ml-1">Recurring</h4>
                  <h4 className="text-2xl mt-2 font-bold font-[Merriweather] text-white">$150 Per Month</h4>
                  <p className="text-xl -mt2 font-bold font-[Merriweather] text-red ml-1"></p>
                  <div className="flex justify-between md:justify-start">
                  <form action="http://localhost:8000/api/stripe/create-checkout-session" method="POST">
                      <input type="hidden" name="price_id" value="price_1ObZl7JYXhvyfXz9piNUESG8" />
                      <input type="hidden" name="mode" value="subscription" />
                      <button className="bg-lightred text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-2"> Purchase</button>
                    </form>
                    <button href="#Private" className="bg-lightred ml-4 md:ml-16 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-2"> Inquire</button>
                  </div>
                </div>

                <div className="bg-gray p-4 shadow-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex flex-col items-center justify-center">
                  <h4 className="text-4xl font-bold font-[Merriweather] text-white mb-6 ">Personal Training</h4>
                  <img className='w-1/2 h-1/2 mb-4' src={ELCLogo2} />
                  <h4 className="text-xl -mt-2 font-bold font-[Merriweather] text-red">Recurring</h4>
                  <img src="" alt="" />
                  <h4 className="text-2xl mt-2 font-bold font-[Merriweather] text-white">$200 Per Month</h4>
                  <div className="flex justify-between md:justify-start">
                  <form action="http://localhost:8000/api/stripe/create-checkout-session" method="POST">
                      <input type="hidden" name="price_id" value="price_1OeSV9JYXhvyfXz9LTht4jUV" />
                      <input type="hidden" name="mode" value="subscription" />
                      <button className="bg-lightred text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-2"> Purchase</button>
                    </form>
                    <button href="#Private" className="bg-lightred ml-4 md:ml-16 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-2"> Inquire</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-4 border-b-2 border-black md:border-b-0 shadow-2xl mt-16 mb-16" id='routine'>
            <h3 className="text-6xl font-bold mb-4 font-[Merriweather] text-center mt-8 mb-8">Training Programs</h3>
            
            <div className="flex justify-between mb-8">
              <div className="w-1/2 p-2 bg-gray-200 relative flex flex-col">
                <img src={Program5} alt="Workout" className="w-full h-full" />
                <div className='bg-dark'>
                  <h2 className="text-3xl text-white leading-relaxed font-[merriweahter] font-bold">Men's Program</h2>
                  <p className=" text-xl text-white leading-relaxed font-[merriweahter]  ">This program prioritizes hypertrophy, aiming for balanced muscle development. It involves continuous programming tailored to optimize training using a science-based approach.</p>
                  
                  </div>
                  <form action="http://localhost:8000/api/stripe/create-checkout-session" method="POST">
                  <input type="hidden" name="price_id" value="price_1OZPzPJYXhvyfXz93WqOem3x" />
                  <input type="hidden" name="mode" value="payment" />
                  <button  className="bg-lightred text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 mt-2"> Purchase</button>
                </form>
              </div>

              <div className="w-1/2 p-2 bg-gray-200 relative flex flex-col">
                <img src={Program4} alt="Workout" className="w-full h-full" />
                <div className='bg-dark'>
                  <h2 className="text-3xl text-white leading-relaxed font-[merriweahter] font-bold">Women's Program</h2>
                  <p className="text-xl text-white leading-relaxed font-[merriweahter] ">
                This program places particular emphasis on lower body and back development, targeting the glutes, lats, and delts to achieve a well-rounded V-taper, especially beneficial for women.</p>
                </div>
                <form action="http://localhost:8000/api/stripe/create-checkout-session" method="POST">
                  <input type="hidden" name="price_id" value="price_1OgG2LJYXhvyfXz9Ito4gZFC" />
                  <input type="hidden" name="mode" value="payment" />
                  <button className="bg-lightred text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 mt-2"> Purchase</button>
                </form>
              </div>
            </div>

            <ul className="custom-bullet list-inside text-2xl text-black leading-relaxed mt-8 font-[merriweahter] font-semibold">
            <h4 className= "text-4xl font-bold mb-4 font-[Merriweather] text-left mt-8  "> What's Included: ✔️ </h4>
              <li>Optimized Workouts for the kind of Athlete you are / want to become</li>
              <li>Custom Workouts to fit your schedule and personal needs</li>
              <li>Introduces variety to keep workouts interesting, preventing boredom and monotony</li>
              <li>Adapt the routine to accommodate any physical limitations or health considerations you may have</li>
              <li>Learn how to perform exercises correctly / Safely </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 p-4 border-b-2 border-black md:border-b-0 shadow-2xl mt-16" id='diet'>
            <div className="w-full p-4 bg-gray-200 relative flex flex-col items-center justify-center">
              <img src={Program6} alt="Workout" className="w-1/2 h-full bg-cover" />
              <div className='bg-dark text-center w-1/2 h-full'>
                <h2 className="text-3xl text-white leading-relaxed font-[merriweahter] font-bold">Nutritional Plan</h2>
                <p className="text-xl text-white leading-relaxed font-[merriweahter]">
                This nutrition plan is meticulously crafted to align with your fitness goals. It focuses on optimizing your dietary intake through personalized and science-based strategies, ensuring you receive the essential nutrients needed to support your overall well-being and achieve your desired physique.</p>
              </div>
              <form action="http://localhost:8000/api/stripe/create-checkout-session" method="POST">
                <input type="hidden" name="price_id" value="price_1OZPxuJYXhvyfXz9mbg8Wjxg" />
                <input type="hidden" name="mode" value="payment"/>
                <button className="bg-lightred text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 mt-2"> Purchase</button>
              </form>
            </div>

            <h3 className="text-6xl font-bold mb-4 font-[Merriweather] text-center mt-8 mb-8">Nutrition Plan</h3>
            <ul className="custom-bullet list-inside text-2xl text-black leading-relaxed m-4 font-[merriweahter] font-semibold">
            <h4 className= "text-4xl font-bold mb-4 font-[Merriweather] text-left mt-8"> What's Included: ✔️ </h4>
              <li>Personalized nutrition plan tailored to your specific goals, needs, and lifestyle</li>
              <li>Customized meal plan designed to help you achieve your goals</li>
              <li>Learn how to eat healthy and make the right food choices</li>
              <li>Learn how to read food labels and understand nutrition facts</li>
              <li>Learn how to make healthy food choices when eating out</li>
            </ul>
          </div>
      </div>
    </div>
  );
};

export default Programs;