export default function Contact() {
    return (
    <>
    <h1>contact us</h1>
    <div className="antialiased bg-gray-100 justify-center">
        <div className="flex flex-col md:flex-col  min-h-screen justify-center items-center">
            <div className="flex flex-col space-y-6 bg-cyan-700 w-full max-w-3xl p-8 rounded-xl shadow-lg text-white overflow-hidden">
                <div className="flex flex-col md:flex-row md:space-x-6 space-y-8 md:space-y-0 justify-between items-center">
                    <div className="flex flex-col space-y-8 justify-between p-4">
                    <div>
                        <h1 className="font-bold text-4xl tracking-wide">SAY HI</h1>
                        <p className="pt-4 pb-4 text-cyan-100 text-sm">
                            lorem ipsum tralala lorem ipsum tralala, <br/> lorem lorem ipsum tralala lorem ipsum tralala, lorem 
                        </p>
                    </div>
                    <div className="flex flex-col space-y-6 pt-4">
                        <div className="inline-flex space-x-2 items-center">
                        <i class="fa-solid fa-phone text-teal-300"></i>
                        <span>+47 998 89 98</span>
                        </div>
                        <div className="inline-flex space-x-2 items-center">
                        <i class="fa-solid fa-envelope  text-teal-300"></i>   
                        <span>contact@julezshoez.com</span>
                        </div>
                        <div className="inline-flex space-x-2 items-center">
                        <i class="fa-solid fa-location-dot text-teal-300"></i>
                        <span>Noroff Road 45B</span>
                        </div>
                    </div>
                    <div className="relative">
                        <div className=" absolute z-0 w-40 h-40 bg-teal-400 rounded-full right-60 -bottom-70"></div>
                    </div>

                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600">
                        <form action="" className="flex flex-col space-y-4 md:w-full lg:w-64">
                            <div>
                                <label for="" className="text-sm">Your name</label>
                                <input type="text" placeholder="Your name" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 otline-none focus:ring-2 focus:ring-teal-300"></input>
                            </div>
                            <div>
                                <label for="" className="text-sm">Your E-mail</label>
                                <input type="text" placeholder="Your E-mail" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 otline-none focus:ring-2 focus:ring-teal-300"></input>
                            </div>
                            <div>
                                <label for="" className="text-sm">Your message</label>
                                <textarea placeholder="Your message" rows="4" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 otline-none focus:ring-2 focus:ring-teal-300">
                                </textarea>
                            </div>
                            <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">Send message</button>
                        </form>
                        
                    </div>
                    </div> 
            </div>
        </div>

    </div>
    </> 
)

}