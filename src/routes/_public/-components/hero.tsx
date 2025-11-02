export default function Hero() {
	return (
		<main className="flex flex-col items-center justify-between pt-16 pb-8 text-center md:flex-row md:pt-12 md:pb-24 md:text-left">
			<div className="mb-8 md:mb-0 md:w-1/2">
				<h1 className="font-bold text-5xl lg:text-6xl lg:tracking-tight xl:text-7xl xl:tracking-tighter">
					Modernizing Care for the New Millennium
				</h1>
				<p className="mx-auto mt-4 max-w-xl text-lg text-slate-600 md:mx-0">
					At Millennicare, we believe everyone deserves access to quality care.
					Join our network of caregivers and careseekers and take the first step
					towards better care today.
				</p>
			</div>
			<div className="hidden py-6 md:order-1 md:flex md:w-1/2 md:justify-end">
				<img
					src="/welcome_screen_portrait.png"
					alt="MillenniCare dashboard screen"
					loading="eager"
					className="max-h-[650px]"
					height={400}
					width={300}
				/>
			</div>
		</main>
	);
}
