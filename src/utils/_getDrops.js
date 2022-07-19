import puppeteer from "puppeteer";

async function autoScroll(page){
	await page.evaluate(async () => {
		await new Promise((resolve) => {
			let totalHeight = 0;
			const distance = 200;
			const timer = setInterval(() => {
				const scrollHeight = document.body.scrollHeight;
				window.scrollBy(0, distance);
				totalHeight += distance;

				if(totalHeight >= scrollHeight - window.innerHeight){
					clearInterval(timer);
					resolve();
				}
			}, 100);
		});
	});
}

const getDrops = async () => {
	const scrapeUrl = 'https://opensea.io/collection/letswalk';
	
	try {
		const browser = await puppeteer.launch({
			headless: true,
		});

		const page = await browser.newPage();
		await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36');

		const desiredWidth = 2880;
		const desiredHeight = 1620;
		const deviceScaleFactor = 0.75;

		await page.setViewport({
				width: parseInt(desiredWidth / deviceScaleFactor),
				height: parseInt(desiredHeight / deviceScaleFactor),
				deviceScaleFactor: deviceScaleFactor,
		});

		await page.goto(scrapeUrl, {
			waitUntil: 'networkidle0',
		});

		await autoScroll(page);
		
		const imageData = await page.evaluate(() => {
			return [...document.querySelectorAll('.Asset--anchor')].map((linkBlock) => {
				const image = linkBlock.querySelector('[alt^="#LetsWalk"]');
				const openSeaLink = linkBlock.href;
				const {src, alt} = image;
				const [name, number] = alt.slice(12).split(' #');
				
				return {
					src: src.split("=w")[0],
					alt,
					name,
					number: number.padStart(3, 0),
					openSeaLink,
				}
			})
		})
	
		await browser.close();
			
		return { images: imageData, error: null };
	} catch (error) {
		console.error(error);
		return { images: null, error };
	}
};

export default getDrops;
