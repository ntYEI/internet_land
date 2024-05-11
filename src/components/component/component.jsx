import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Component() {
  return (<>
    <header className="flex items-center justify-between px-4 md:px-6 h-16 bg-gray-900 text-gray-50">
      <Link className="flex items-center space-x-2" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="font-medium">Acme Inc</span>
      </Link>
      <nav className="flex space-x-4">
        <Link className="hover:underline" href="#">
          Home
        </Link>
        <Link className="hover:underline" href="#">
          Plans
        </Link>
        <Link className="hover:underline" href="#">
          About
        </Link>
        <Link className="hover:underline" href="#">
          Contact
        </Link>
      </nav>
    </header>
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div
          className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                High-Speed Internet for Your Home
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Experience lightning-fast internet with our reliable and affordable plans. Upgrade your home network
                today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#">
                View Plans
              </Link>
            </div>
          </div>
          <img
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="310"
            src="/placeholder.svg"
            width="550" />
        </div>
      </div>
    </section>
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      id="plans">
      <div className="container px-4 md:px-6">
        <div
          className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Compare Our Internet Plans</h2>
            <p
              className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Choose the plan that best fits your needs. All plans come with unlimited data and 24/7 customer support.
            </p>
          </div>
        </div>
        <div
          className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div
            className="flex flex-col justify-between space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Basic</h3>
              <p className="text-4xl font-bold">$49/mo</p>
              <p className="text-gray-500 dark:text-gray-400">Perfect for small households</p>
            </div>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                100 Mbps download
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                20 Mbps upload
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                Unlimited data
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                24/7 customer support
              </li>
            </ul>
            <Button className="w-full">Sign Up</Button>
          </div>
          <div
            className="flex flex-col justify-between space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Premium</h3>
              <p className="text-4xl font-bold">$79/mo</p>
              <p className="text-gray-500 dark:text-gray-400">Perfect for medium to large households</p>
            </div>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                500 Mbps download
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                100 Mbps upload
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                Unlimited data
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                24/7 customer support
              </li>
            </ul>
            <Button className="w-full">Sign Up</Button>
          </div>
          <div
            className="flex flex-col justify-between space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Gigabit</h3>
              <p className="text-4xl font-bold">$99/mo</p>
              <p className="text-gray-500 dark:text-gray-400">Perfect for power users and small businesses</p>
            </div>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                1 Gbps download
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                500 Mbps upload
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                Unlimited data
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4 text-green-500" />
                24/7 customer support
              </li>
            </ul>
            <Button className="w-full">Sign Up</Button>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div
              className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Customer Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Hear from Our Satisfied Customers
            </h2>
            <p
              className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our customers love the speed, reliability, and customer service of our internet plans. See what they
              have to say.
            </p>
          </div>
          <div className="grid gap-4">
            <div
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <blockquote className="space-y-2">
                <p className="text-lg font-semibold leading-snug">
                  “I've never had such fast and reliable internet. It's changed the way I work from home.”
                </p>
                <div>
                  <div className="font-semibold">Jane Doe</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Small Business Owner</div>
                </div>
              </blockquote>
            </div>
            <div
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
              <blockquote className="space-y-2">
                <p className="text-lg font-semibold leading-snug">
                  “The customer service is amazing. They've always been there to help me with any issues.”
                </p>
                <div>
                  <div className="font-semibold">John Smith</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Homeowner</div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div
          className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
            <p
              className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Get answers to the most common questions about our internet plans.
            </p>
          </div>
          <div className="mx-auto w-full max-w-5xl">
            <Accordion collapsible type="single">
              <AccordionItem value="what-is-the-download-speed">
                <AccordionTrigger className="text-base">What is the download speed?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    The download speeds for our plans range from 100 Mbps for the Basic plan, 500 Mbps for the Premium
                    plan, and up to 1 Gbps for the Gigabit plan. We offer high-speed internet to meet the needs of
                    households of all sizes.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="what-is-the-upload-speed">
                <AccordionTrigger className="text-base">What is the upload speed?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    The upload speeds for our plans range from 20 Mbps for the Basic plan, 100 Mbps for the Premium
                    plan, and up to 500 Mbps for the Gigabit plan. We understand the importance of fast upload speeds
                    for video conferencing, file sharing, and other online activities.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="is-there-a-data-cap">
                <AccordionTrigger className="text-base">Is there a data cap?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    No, all of our internet plans come with unlimited data. You can stream, download, and browse to
                    your heart's content without worrying about overage fees or throttling.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="what-is-the-customer-support-like">
                <AccordionTrigger className="text-base">What is the customer support like?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our customer support team is available 24/7 to assist you with any questions or issues you may
                    have. We pride ourselves on providing friendly, knowledgeable, and responsive support to ensure
                    your satisfaction.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div
        className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
          <p
            className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Have a question or need help? Our friendly support team is here to assist you.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </section>
    <footer className="w-full bg-gray-900 text-gray-50 py-8">
      <div
        className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div
          className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <Link className="flex items-center space-x-2" href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="font-medium">Acme Inc</span>
          </Link>
          <nav className="flex space-x-4">
            <Link className="hover:underline" href="#">
              Home
            </Link>
            <Link className="hover:underline" href="#">
              Plans
            </Link>
            <Link className="hover:underline" href="#">
              About
            </Link>
            <Link className="hover:underline" href="#">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link className="hover:underline" href="#">
            Privacy
          </Link>
          <Link className="hover:underline" href="#">
            Terms
          </Link>
          <p className="text-sm">© 2024 Acme Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </>);
}

function CheckIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>)
  );
}


function MountainIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>)
  );
}
