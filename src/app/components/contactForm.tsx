export default function ContactForm() {
    return (
        <form name="contact" method="POST" data-netlify="true" className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-8">
            <div className="flex flex-col gap-4 sm:col-span-1">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Your name</label>
                    <input id="name" type="text" name="name" className="p-2"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Your email</label>
                    <input id="email" type="email" name="email"  className="p-2"/>
                </div>
            </div>
            <div className="flex flex-col gap-2 sm:col-span-1">
                <label htmlFor="message">Your message</label>
                <textarea id="message" name="message" className="min-h-32 p-1"/>
                <button type="submit" className="self-end">Send</button>
            </div>
        </form>
    );
}