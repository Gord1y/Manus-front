import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import img from '@/public/3.jpg'
import { Line } from '@/src/components/ui/Line'
import Section from '@/src/components/ui/Section'

const Home: FC = () => {
	return (
		<>
			<Section
				position='left'
				img={img}
				title='Welcome to Manus'
				description='Manus, the ultimate destination for the finest recipes that will tantalize your taste buds and take your culinary skills to new heights. At Manus, we believe that cooking is an art form, and we are dedicated to providing you with an exceptional collection of recipes that will transform your meals into extraordinary gastronomic experiences.'
			/>
			<Line />
			<Section
				position='right'
				img={img}
				title='Why Manus?'
				description="Whether you're a seasoned chef or a passionate home cook, Manus is your trusted companion on your culinary journey. Our team of expert chefs, food enthusiasts, and culinary connoisseurs have scoured the globe to curate an extensive repertoire of recipes that span diverse cuisines and cater to various dietary preferences."
				secondaryText='Explore our vast library of recipes, where each dish has been carefully crafted to showcase the perfect balance of flavors, textures, and presentation. From classic comfort foods to exotic delicacies, Manus has it all. Discover mouthwatering appetizers that will kick-start your meal, delve into our collection of tantalizing main courses that will leave you craving for more, and indulge in our decadent desserts that will satisfy your sweet tooth.'
			/>
			<Line />
			<Section
				position='left'
				img={img}
				title='What Do We Offer'
				description='Not only do we offer a wide range of recipes, but Manus is also committed to providing you with detailed step-by-step instructions, accompanied by beautiful visuals, ensuring that you can recreate these culinary masterpieces with ease and confidence. We understand that cooking is an immersive experience, and our goal is to guide you through every stage, from selecting the finest ingredients to mastering intricate cooking techniques.'
				secondaryText="At Manus, we embrace culinary innovation and strive to keep pace with evolving food trends. Our recipe collection is constantly updated with fresh and exciting creations, ensuring that you are always at the forefront of culinary excellence. Whether you're looking for a quick weeknight meal, planning a dinner party, or seeking inspiration for a special occasion, Manus has the perfect recipe to suit your needs."
			/>
			<Line />
			<section className='flex flex-col items-center w-full lg:flex-row text-white'>
				<div className=' h-fit w-full flex flex-col gap-2 bg-red-400 items-center justify-center py-5 px-10'>
					<div className=' text-4xl font-bold'>Feel The Taste</div>
					<div className=' max-w-xs lg:max-w-3xl text-lg font-medium'>
						Taste is primarily sensed by the taste buds on the tongue, which can
						detect five basic tastes: sweet, sour, salty, bitter, and umami
						(savory).
						<br />
						<br /> Sweet tastes are often associated with sugary or fruity
						flavors, while sour tastes are tart and acidic. Salty tastes come
						from the presence of salt or other minerals, while bitter tastes can
						be found in foods like coffee, dark chocolate, and leafy greens.
						Umami tastes are savory and often found in meat, cheese, and other
						protein-rich foods.
					</div>
					<Link
						href='/recipes'
						className=' text-lg py-3 px-5 border-r-2 bg-white lg:bg-transparent text-red-500 lg:text-white border-white hover:bg-white hover:text-red-500 ease-in-out font-semibold'
					>
						View Recipes
					</Link>
				</div>
				<Image
					src={img}
					alt='Picture of the author'
					className='w-full lg:w-2/5'
				/>
			</section>
		</>
	)
}

export default Home
