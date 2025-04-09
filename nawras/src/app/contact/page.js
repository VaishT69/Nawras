export default function Contact() {
    return(
        <div className="text-black p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg mb-2">Feeel free to reach out via the form below:</p>
            <form className="flex flex-col gap-3 max-w-md mx-auto">
                <input type="text" placeholder="Your Name" className=" h-10 p-2 border rounded"/>
                <input type="email" placeholder="Your Email" className="h-10  p-2 border rounded"/>
                <textarea placeholder="Your Message" rows="5" className="p-2 border rounded"/>
                <button type="submit" className="bg-[#efe4b5] text-black  h-8 w-15 px-2 py-2 rounded hover:bg-white transition">Send</button>
            </form>
        </div>
    )
}