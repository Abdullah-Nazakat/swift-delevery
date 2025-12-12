export default function Location() {
    return (
        <section className="flex flex-col lg:flex-row w-full min-h-[600px]">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 bg-[#0B1221] p-10 lg:p-20 flex flex-col justify-center space-y-12">
                <h2 className="text-[#FFB700] text-3xl lg:text-4xl font-bold leading-snug">
                    Use our expert customer support
                </h2>

                <div className="space-y-6">
                    <h3 className="text-white text-2xl font-medium">Toll Free Number</h3>
                    <div className="text-gray-300 space-y-2 text-lg lg:text-xl">
                        <p>+30 6944134450</p>
                        <p>info@dev-power.com</p>
                        <p>Monday - Friday</p>
                        <p>9:30 am - 6:30 pm EST</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="text-white text-2xl font-medium">Location:</h3>
                    <div className="text-gray-300 space-y-2 text-lg lg:text-xl">
                        <p>Drimitinou 58 Heraclion, Crete, Greece</p>
                        <p>Δριμυτινού 58, Ηράκλειο Κρήτης, Ελλάδα</p>
                    </div>
                </div>
            </div>

            {/* Right Map */}
            <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3255.1226059600044!2d25.119473675575176!3d35.32777677270339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149a598db835dc53%3A0xf2a3503546d993dd!2sDrimitinou%2058%2C%20Iraklio%20713%2005%2C%20Greece!5e0!3m2!1sen!2s!4v1765541159036!5m2!1sen!2s"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
}