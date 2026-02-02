import heroImg from '@/assets/img-hero.jpg'

export const SharedScreenshot = () => {
    return (
        <div className="relative h-screen text-white">
            <img src={heroImg} alt="Shared Screenshot" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-b from-black/70 to-black/70"></div>
            <div className="relative flex flex-col h-full items-center justify-center text-center">
                <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">Energo Food Tournament</h1>
                <p className="mt-6 md:mt-8 italic md:text-xl">"The most competitive sport in the world is BUSINESS"</p>
            </div>
        </div>
    )
}
