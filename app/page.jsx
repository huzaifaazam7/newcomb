import Image from 'next/image'
import Navbar from './components/Navbar'
import Link from 'next/link'

export default function Home() {
  return (
<section>
  <div class="container px-5 py-24 mx-auto flex flex-col">
    <div class="lg:w-4/6 mx-auto">
      <div class="rounded-lg h-64 overflow-hidden">
      <Image src="/ck.jpg" alt="car" width={1200} height={800}/>  
      </div>
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Cloths Here!</h2>
            <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p class="text-base">The Versatility of Clothes in Everyday Life</p>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4">Clothes are an essential part of human life, serving purposes that go beyond mere functionality. They provide protection against environmental elements such as heat, cold, and rain, while also allowing individuals to express their personality, culture, and style. From casual wear to formal attire, clothes cater to diverse occasions and lifestyles, reflecting societal norms and personal preferences. Advances in fabric technology have made modern clothing more comfortable, durable, and sustainable, offering options like breathable materials for active wear and eco-friendly fabrics to reduce environmental impact. Clothes play a vital role in shaping identity and fostering creativity, making them indispensable in both practical and cultural contexts.</p>
          <a class="text-indigo-500 inline-flex items-center">
            {/* Learn More */}
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div>
    

<footer>
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> */}
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">NExtjs!</span>
            </a>
            <Link href="/fifth">
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6 text-slate-950">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6 text-slate-950">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6 text-slate-950">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline text-slate-950">Contact</a>
                </li>
            </ul>
            </Link>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400 text-slate-950">© 2023 <a href="https://flowbite.com/" class="hover:underline">Nextjs!™</a>. All Rights Reserved.</span>
    </div>
</footer>


  </div>
</section>
  )
}
